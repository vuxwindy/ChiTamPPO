import { getMasterWallet, getProvider } from '@/config/provider'
import { ethers } from 'ethers'
import abi from '../config/contracts/abi/PPOToken.json'
import userModel from '@/models/userModel'

export const claimToken = async (address: string, chainId: number) => {
  const masterWallet = getMasterWallet()
  const contract = new ethers.Contract(
    '0x1F9bfDc9839dbe0C01B6B56a959974d22b38C29A',
    abi,
    masterWallet // Use masterWallet as signer
  )

  const users = await userModel.findOne({ address, chainId })
  if (!users) throw new Error('User not found')

  if (!users.reward || users.reward < 200)
    throw new Error('Insufficient reward')

  await userModel.findOneAndUpdate(
    {
      address,
      chainId
    },
    {
      $set: { reward: 0, lastClaimedAt: Math.floor(Date.now() / 1000) },
      $inc: { totalEarned: users.reward }
    }
  )

  const gasPrice = (await getProvider().getFeeData()).gasPrice

  const tx = await contract.transfer(
    address,
    ethers.parseUnits(users.reward.toString(), 18),
    { gasPrice: gasPrice }
  )
  return tx
}
