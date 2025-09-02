import { ethers } from 'ethers'

export const getProvider = () => {
  return new ethers.JsonRpcProvider(process.env.RPC_URL)
}

export const getMasterWallet = () => {
  return new ethers.Wallet(
    process.env.MASTER_PRIVATE_KEY as string,
    getProvider()
  )
}
