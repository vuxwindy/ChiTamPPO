import { claimToken } from '@/apiServices/claimToken'
import { connectDB } from '@/config/mongoose'
import { getMasterWallet } from '@/config/provider'
import { ethers, isAddress } from 'ethers'
import { NextResponse } from 'next/dist/server/web/spec-extension/response'

export async function POST(request: Request) {
  await connectDB()

  const { address, chainId } = await request.json()

  try {
    if (!address || !isAddress(address) || !chainId) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const tx = await claimToken(address, chainId)
    if (!tx) throw new Error('Transaction failed')

    return NextResponse.json(tx, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
