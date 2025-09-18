import { getAllRefsByAddress, getCurrentRefByAddress } from '@/apiServices/ref'
import { completeTask, getTasks } from '@/apiServices/task'
import { connectDB } from '@/config/mongoose'
import { isAddress } from 'ethers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  await connectDB()
  const address = request.nextUrl.searchParams.get('address')
  const refAddress = request.nextUrl.searchParams.get('refAddress')

  try {
    if (
      !address ||
      !isAddress(address) ||
      (refAddress && !isAddress(refAddress))
    ) {
      return NextResponse.json({ error: 'Invalid address' }, { status: 400 })
    }
    const ref = await getAllRefsByAddress(address)
    const current = await getCurrentRefByAddress(address, refAddress ?? null)
    return NextResponse.json({ ref, current }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

// export async function POST(request: NextRequest) {
//   await connectDB()

//   const { address, refAddress } = await request.json()

//   try {
//     if (
//       !address ||
//       !isAddress(address) ||
//       (refAddress && !isAddress(refAddress))
//     ) {
//       return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
//     }
//     const newTask = await loginWithRef(address, refAddress ?? null)
//     return NextResponse.json(newTask, { status: 201 })
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 })
//   }
// }
