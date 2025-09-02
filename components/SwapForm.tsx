"use client"

import { supportedPools, supportedTokens, Token } from '@/config/swap'
import { useSwap } from '@/hooks/useSwap'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { HiOutlineSwitchVertical } from 'react-icons/hi'
import CustomConnectButton from './ConnectButtonCustom'
import { toast } from 'react-toastify'

export const SwapForm = () => {
  const [fromToken, setFromToken] = useState<Token>(supportedTokens[0])
  const [toToken, setToToken] = useState<Token>(supportedTokens[1])
  const [amountIn, setAmountIn] = useState('')
  const [amountOut, setAmountOut] = useState('')
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { isConnected, chainId, address } = useAccount()

  const { onSwap, estimateAmountOuts } = useSwap()

  const pool = supportedPools[0].pool

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
  
  useEffect(() => {
    if (!chainId || !amountIn || !fromToken || !toToken) return
    const timeout = setTimeout(() => {
      estimateSwap(amountIn, chainId, fromToken, toToken)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [amountIn, fromToken, toToken, chainId, estimateSwap])


  const handleSwap = async () => {
    if (!address || !chainId) return
    if(!+amountIn || !+amountOut){
      return toast.warning("This value is not valid")
    }
    const amountInBN = ethers.parseUnits(amountIn, fromToken.decimals)
    const amountOutBN = ethers.parseUnits(amountOut, toToken.decimals)
    const valueSwap = await onSwap(
      fromToken.address,
      toToken.address,
      amountInBN,
      amountOutBN,
      address,
      chainId
    )

    console.log('valueSwap', valueSwap);

    toast.success('Swap completed successfully! 🎉')
    setAmountIn('')
    setAmountOut('')
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


      <div className='h-fit p-2 border border-gray-300 rounded-md flex justify-between relative'>
        <input
          placeholder='0'
          className='m-0 w-[300px]'
          value={amountIn}
          onChange={handleAmountIn}
        />
         <span className=" px-3 py-1 bg-yellow-400 text-black font-bold rounded-lg text-sm absolute right-2">
              {fromToken.symbol}
            </span>
      </div>

      <div
        
        className='h-fit mx-3 flex justify-center'
      >
      <span onClick={handleSwitch} className='p-2 rounded-full bg-amber-300 cursor-pointer'>

        <HiOutlineSwitchVertical size={24} /> 
              </span>

      </div>

      <div className='h-fit p-2 border border-gray-300 rounded-md flex justify-between relative'>
        <input
          placeholder='0'
          className='m-0 w-[300px]'
          value={amountOut}
          disabled
        />
         <span className="px-3 py-1 bg-yellow-400 text-black font-bold rounded-lg text-sm  absolute right-2">
              {toToken.symbol}
            </span>
      </div>

      
      {(mounted && isConnected && address) ? (
        <button
          onClick={handleSwap}
          className='w-full bg-yellow-400 text-black hover:bg-amber-200 rounded-lg! p-2 mt-4'
        >
          Swap
        </button>
      ) : (
        <CustomConnectButton customClassButton={'btn-signup !mb-0 mt-3 rounded-lg! !text-base !justify-center'} />
      )}
    </div>
  )
}
