import { wagmiConfig } from '@/config'
import { NFTPackages } from '@/config/investment'
import {
  readContract,
  waitForTransactionReceipt,
  writeContract
} from '@wagmi/core'
import NFTPackageAbi from '../config/contracts/abi/NftPackages.json'
import { NativeAddress } from '@/config/contracts/addresses'
import { User } from './type'
import PPOTokenAbi from '@/config/contracts/abi/PPOToken.json'

export interface Order {
  id: bigint
  tokenId: bigint
  user: string
  packageId: bigint
  amount: bigint
  interestPerDay: bigint
  interestEarned: bigint
  createdAt: bigint
  lastUpdatedAt: bigint
  endedAt: bigint
}

export const useInvestment = () => {
  const onInvest = async (
    token: string,
    address: string,
    packageId: number,
    amount: bigint,
    referer: string,
    chainId: number
  ) => {
    if (token !== NativeAddress[chainId]) {
      const checkApproval = (await readContract(wagmiConfig, {
        address: token as `0x${string}`,
        abi: PPOTokenAbi,
        functionName: 'allowance',
        args: [address, NFTPackages[chainId] as `0x${string}`]
      })) as bigint

      if (checkApproval < amount) {
        const approval = await writeContract(wagmiConfig, {
          address: token as `0x${string}`,
          abi: PPOTokenAbi,
          functionName: 'approve',
          args: [NFTPackages[chainId] as `0x${string}`, amount]
        })

        await waitForTransactionReceipt(wagmiConfig, {
          hash: approval
        })
      }
    }

    const result = await writeContract(wagmiConfig, {
      address: NFTPackages[chainId] as `0x${string}`,
      abi: NFTPackageAbi.abi,
      functionName: 'buyPackage',
      args: [token, address, packageId, amount, referer],
      value: token === NativeAddress[chainId] ? amount : undefined
    })

    await waitForTransactionReceipt(wagmiConfig, {
      hash: result
    })
  }

  const onClaim = async (orderId: string, chainId: number) => {
    const result = await writeContract(wagmiConfig, {
      address: NFTPackages[chainId] as `0x${string}`,
      abi: NFTPackageAbi.abi,
      functionName: 'claim',
      args: [orderId]
    })

    await waitForTransactionReceipt(wagmiConfig, {
      hash: result
    })
  }

  const onGetOrder = async (address: string, chainId: number) => {
    const result = (await readContract(wagmiConfig, {
      address: NFTPackages[chainId] as `0x${string}`,
      abi: NFTPackageAbi.abi,
      functionName: 'getOrdersByUser',
      args: [address]
    })) as Order[]
    return result
  }

  const onGetUser = async (address: string, chainId: number) => {
    const result = (await readContract(wagmiConfig, {
      address: NFTPackages[chainId] as `0x${string}`,
      abi: NFTPackageAbi.abi,
      functionName: 'getUser',
      args: [address]
    })) as User
    return result
  }
  return { onInvest, onClaim, onGetOrder, onGetUser }
}
