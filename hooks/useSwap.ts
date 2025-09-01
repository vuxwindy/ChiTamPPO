import { wagmiConfig } from '@/config'
import {
  PancakeSwapRouter,
  wrapNativeToken
} from '@/config/contracts/addresses'
import {
  readContract,
  waitForTransactionReceipt,
  writeContract
} from '@wagmi/core'
import swapRouterAbi from '../config/contracts/abi/SwapRouter.json'
import { isNativeToken } from '@/utils'
import pairAbi from '../config/contracts/abi/Pair.json'
import { supportedPools } from '@/config/swap'

export const useSwap = () => {
  const onSwap = async (
    tokenIn: string,
    tokenOut: string,
    amountIn: bigint,
    amountOut: bigint,
    recipient: string,
    chainId: number
  ) => {
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from now
    const amountOutMin = amountOut - (amountOut / BigInt(1000)) * BigInt(5) // slippage 0.5%

    const actualTokenIn = isNativeToken(tokenIn as `0x${string}`, chainId)
      ? wrapNativeToken[chainId]
      : tokenIn

    const actualTokenOut = isNativeToken(tokenOut as `0x${string}`, chainId)
      ? wrapNativeToken[chainId]
      : tokenOut

    let result: `0x${string}`
    if (isNativeToken(tokenIn as `0x${string}`, chainId)) {
      result = await writeContract(wagmiConfig, {
        address: PancakeSwapRouter[chainId] as `0x${string}`,
        abi: swapRouterAbi,
        functionName: 'swapExactETHForTokens',
        args: [
          amountOutMin,
          [actualTokenIn, actualTokenOut],
          recipient,
          deadline
        ],
        value: amountIn
      })
    } else if (isNativeToken(tokenOut as `0x${string}`, chainId)) {
      result = await writeContract(wagmiConfig, {
        address: PancakeSwapRouter[chainId] as `0x${string}`,
        abi: swapRouterAbi,
        functionName: 'swapExactTokensForETH',
        args: [
          amountIn,
          amountOutMin,
          [actualTokenIn, actualTokenOut],
          recipient,
          deadline
        ]
      })
    } else {
      result = await writeContract(wagmiConfig, {
        address: PancakeSwapRouter[chainId] as `0x${string}`,
        abi: swapRouterAbi,
        functionName: 'swapExactTokensForTokens',
        args: [
          amountIn,
          amountOutMin,
          [actualTokenIn, actualTokenOut],
          recipient,
          deadline
        ]
      })
    }

    await waitForTransactionReceipt(wagmiConfig, {
      hash: result
    })

    return result
  }

  const estimateAmountOuts = async (
    pool: string,
    tokenIn: string,
    amountIn: bigint,
    chainId: number
  ) => {
    const checkPool = supportedPools.find((item) => item.pool === pool)
    if (!checkPool) return
    const result = (await readContract(wagmiConfig, {
      address: pool as `0x${string}`,
      abi: pairAbi,
      functionName: 'getReserves',
      args: []
    })) as bigint[]

    const actualTokenIn = isNativeToken(tokenIn as `0x${string}`, chainId)
      ? wrapNativeToken[chainId]
      : tokenIn

    const [reserveIn, reserveOut] =
      actualTokenIn === checkPool.token0
        ? [result[0], result[1]]
        : [result[1], result[0]]

    console.log('reserveIn:', reserveIn)
    console.log('reserveOut:', reserveOut)

    const getAmountOut = await readContract(wagmiConfig, {
      address: PancakeSwapRouter[chainId] as `0x${string}`,
      abi: swapRouterAbi,
      functionName: 'getAmountOut',
      args: [amountIn, reserveIn, reserveOut]
    })

    return getAmountOut as bigint
  }

  return { onSwap, estimateAmountOuts }
}
