import { claimToken } from '@/apiServices/claimToken'
import { getUser } from '@/apiServices/getUser'
import { connectDB } from '@/config/mongoose'
import { getMasterWallet } from '@/config/provider'
import { ethers, isAddress } from 'ethers'
import { NextResponse } from 'next/dist/server/web/spec-extension/response'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  await connectDB()

  const address = request.nextUrl.searchParams.get('address')
  const chainId = request.nextUrl.searchParams.get('chainId')

  try {
    if (!address || !isAddress(address) || !chainId) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const user = await getUser(address, Number(chainId))

    return NextResponse.json(user, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
