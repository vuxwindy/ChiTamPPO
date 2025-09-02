import { completeTask, getTasks } from '@/apiServices/task'
import { connectDB } from '@/config/mongoose'
import { isAddress } from 'ethers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  await connectDB()
  const address = request.nextUrl.searchParams.get('address')
  const chainId = request.nextUrl.searchParams.get('chainId')

  try {
    if (!address || !isAddress(address) || !chainId) {
      return NextResponse.json({ error: 'Invalid address' }, { status: 400 })
    }
    const tasks = await getTasks(address, Number(chainId))
    return NextResponse.json(tasks, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function POST(request: NextRequest) {
  await connectDB()

  const { address, chainId, task } = await request.json()

  try {
    if (!address || !isAddress(address) || !chainId || !task) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    const newTask = await completeTask(address, Number(chainId), task)
    return NextResponse.json(newTask, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
