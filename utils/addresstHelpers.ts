import { Address } from 'viem'
import { Chain } from 'wagmi/chains'
import { ContractAddresses, NativeAddress } from '@/config/contracts/addresses'
import { ethers } from 'ethers'

export type Addresses = {
  [chainId in Chain['id']]: Address
}
export const getAddressFromMap = (
  address: Addresses,
  chainId?: Chain['id']
): `0x${string}` => {
  return chainId && address[chainId] ? address[chainId] : ('' as `0x${string}`)
}

export const getTestTokenAddress = (chainId: number): `0x${string}` => {
  return getAddressFromMap(ContractAddresses.TestToken as Addresses, chainId)
}

export const isNativeToken = (
  tokenAddress: string,
  chainId: number
): boolean => {
  return tokenAddress.toLowerCase() === NativeAddress[chainId].toLowerCase()
}
