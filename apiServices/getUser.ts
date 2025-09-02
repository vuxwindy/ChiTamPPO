import { getMasterWallet, getProvider } from '@/config/provider'
import { ethers } from 'ethers'
import abi from '../config/contracts/abi/PPOToken.json'
import userModel from '@/models/userModel'

export const getUser = async (address: string, chainId: number) => {
  const user = await userModel.findOne({ address, chainId })
  if (!user) throw new Error('User not found')
  return user
}
