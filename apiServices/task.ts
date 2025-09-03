import taskModel from '@/models/taskModel'
import userModel from '@/models/userModel'

export const completeTask = async (
  address: string,
  chainId: number,
  taskId: string
) => {
  try {
    const user = await userModel.findOne({ address, chainId })
    if (!user) {
      await userModel.create({
        address,
        chainId,
        reward: 0,
        totalEarned: 0,
        createdAt: Math.floor(Date.now() / 1000),
        lastClaimedAt: Math.floor(Date.now() / 1000)
      })
    }
    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)
    const startOfTodayTimestamp = Math.floor(startOfToday.getTime() / 1000)

    const task = await taskModel.findOne({
      address,
      chainId,
      task: taskId,
      createdAt: { $gte: startOfTodayTimestamp } // only today
    })

    if (task) throw new Error('Task already completed')

    const result = await taskModel.create({
      address,
      chainId,
      task: taskId,
      createdAt: Math.floor(Date.now() / 1000)
    })

    const tasks = await taskModel.find({
      address,
      chainId,
      createdAt: { $gte: startOfTodayTimestamp } // only today
    })

    if (tasks.length >= 4) {
      await userModel.findOneAndUpdate(
        {
          address,
          chainId
        },
        {
          $inc: { reward: 1 }
        }
      )
    }
    return result
  } catch (error: any) {
    throw new Error(`Error completing task: ${error.message}`)
  }
}

export const getTasks = async (address: string, chainId: number) => {
  try {
    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)
    const startOfTodayTimestamp = Math.floor(startOfToday.getTime() / 1000)
    const tasks = await taskModel.find({
      address,
      chainId,
      createdAt: { $gte: startOfTodayTimestamp } // only today
    })
    return tasks
  } catch (error: any) {
    throw new Error(`Error fetching tasks: ${error.message}`)
  }
}
