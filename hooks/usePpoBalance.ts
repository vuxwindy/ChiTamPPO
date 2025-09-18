import { useAccount, useReadContract } from 'wagmi'
import { erc20Abi } from 'viem'

const PPO_TOKEN_ADDRESS = '0x3Fc74aFFE64777e2AAC5202B9cF158F061EB473f' 
export function usePpoBalance() {
  const { address } = useAccount()

  const { data, isLoading, error } = useReadContract({
    address: PPO_TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address!], 
  })

  return {
    balance: data,
    isLoading,
    error,
  }
}