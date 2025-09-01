import { sepolia, bsc, bscTestnet } from 'wagmi/chains'

export const ContractAddresses: Record<
  string,
  Record<number, `0x${string}` | ''>
> = {
  TestToken: {
    [sepolia.id]: '0xD63991Cd3769fE47Ae832752F40F526E1764d57f'
    // add more chains
    // [mainnet.id]: "0x0000000000000000000000000000000000000000",
  }
} as const

export const PancakeSwapRouter: Record<number, `0x${string}`> = {
  [bsc.id]: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  [bscTestnet.id]: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1'
  // add more chains
  // [mainnet.id]: "0x0000000000000000000000000000000000000000",
} as const

export const NativeAddress: Record<number, `0x${string}`> = {
  [bsc.id]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  [bscTestnet.id]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  [sepolia.id]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
}

export const wrapNativeToken: Record<number, string> = {
  [bscTestnet.id]: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
}
