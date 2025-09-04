import { bsc, bscTestnet } from 'viem/chains'
import { PPO_TOKEN } from './contracts/addresses'

export const NFTPackages: Record<number, string> = {
  [bscTestnet.id]: '0xD696FFA561896F56D56bfEe1f763467c8D04930c',
  [bsc.id]: '0x4425118f67EbB4B6c9C20E7c9eced471C57f82E9'
}

export const packages: Record<
  number,
  {
    packageId: number
    min: number
    max: number
    token: `0x${string}`
    interest: number
    duration: number
  }[]
> = {
  [bsc.id]: [
    {
      packageId: 9,
      min: 1000,
      max: 20000,
      token: PPO_TOKEN[bsc.id],
      interest: 0.4, // 0.4% per day
      duration: 63072000 // 2 years
    },
    {
      packageId: 10,
      min: 20001,
      max: 100000,
      token: PPO_TOKEN[bsc.id],
      interest: 0.5, // 0.5% per day
      duration: 63072000 // 1 year
    },
    {
      packageId: 11,
      min: 100001,
      max: 100000000,
      token: PPO_TOKEN[bsc.id],
      interest: 0.6, // 0.6% per day
      duration: 63072000 // 6 months
    }
  ]
}
