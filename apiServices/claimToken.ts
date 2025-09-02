import { getMasterWallet, getProvider } from '@/config/provider'
import { ethers } from 'ethers'
import abi from '../config/contracts/abi/PPOToken.json'
import { User } from '@/models/userModel'

export const claimToken = async (address: string, chainId: number) => {
  const masterWallet = getMasterWallet()
  const contract = new ethers.Contract(
    '0x1F9bfDc9839dbe0C01B6B56a959974d22b38C29A',
    abi,
    masterWallet // Use masterWallet as signer
  )

  const users = await User.findOne({ address, chainId })
  if (!users) throw new Error('User not found')
  const tx = await contract.transfer(
    address,
    ethers.parseUnits(users.reward ? users.reward.toString() : '0', 18)
  )
  return tx
}
