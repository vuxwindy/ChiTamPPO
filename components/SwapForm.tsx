import { supportedPools, supportedTokens, Token } from '@/config/swap'
import { useSwap } from '@/hooks/useSwap'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export const SwapForm = () => {
  const [fromToken, setFromToken] = useState<Token>(supportedTokens[0])
  const [toToken, setToToken] = useState<Token>(supportedTokens[1])
  const [amountIn, setAmountIn] = useState('')
  const [amountOut, setAmountOut] = useState('')

  const { isConnected, chainId, address } = useAccount()

  const { onSwap, estimateAmountOuts } = useSwap()

  const pool = supportedPools[0].pool

  useEffect(() => {
    if (!chainId || !amountIn || !fromToken || !toToken) return
    const timeout = setTimeout(() => {
      estimateSwap(amountIn, chainId, fromToken, toToken)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [amountIn, fromToken, toToken, chainId])

  const estimateSwap = async (
    amountIn: string,
    chainId: number,
    fromToken: Token,
    toToken: Token
  ) => {
    const amountInBN = ethers.parseUnits(amountIn, fromToken.decimals)
    const amountOutBN = await estimateAmountOuts(
      pool,
      fromToken.address,
      amountInBN,
      chainId
    )
    if (!amountOutBN) return
    setAmountOut(ethers.formatUnits(amountOutBN, toToken.decimals))
  }

  const handleSwap = async () => {
    if (!address || !chainId) return
    const amountInBN = ethers.parseUnits(amountIn, fromToken.decimals)
    const amountOutBN = ethers.parseUnits(amountOut, toToken.decimals)
    await onSwap(
      fromToken.address,
      toToken.address,
      amountInBN,
      amountOutBN,
      address,
      chainId
    )
  }

  const handleSwitch = () => {
    const [f, t] = [fromToken, toToken]
    setFromToken(t)
    setToToken(f)
  }

  const handleAmountIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountIn(e.target.value)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='h-fit p-2 border border-gray-300 rounded-md flex justify-between'>
        <input
          placeholder='0'
          className='m-0 w-[300px]'
          value={amountIn}
          onChange={handleAmountIn}
        />
        <div className='h-fit bg-amber-200 px-2 py-0.5 rounded-full'>
          {fromToken.symbol}
        </div>
      </div>

      <button
        onClick={handleSwitch}
        className='h-fit m-0'
      >
        Switch
      </button>

      <div className='h-fit p-2 border border-gray-300 rounded-md flex justify-between'>
        <input
          placeholder='0'
          className='m-0 w-[300px]'
          value={amountOut}
          disabled
        />
        <div className='h-fit bg-amber-200 px-2 py-0.5 rounded-full'>
          {toToken.symbol}
        </div>
      </div>
      {isConnected ? (
        <button
          onClick={handleSwap}
          className='w-full bg-amber-200 rounded-2xl! p-2 mt-4'
        >
          Swap
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  )
}
