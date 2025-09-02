import { Task } from '@/models/taskModel'

export const completeTask = async (
  address: string,
  chainId: number,
  taskId: string
) => {
  try {
    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)

    const task = await Task.findOne({
      address,
      chainId,
      task: taskId,
      createdAt: { $gte: startOfToday } // only today
    })

    if (task) throw new Error('Task already completed')

    const result = await Task.create({
      address,
      chainId,
      task: taskId
    })
    return result
  } catch (error: any) {
    throw new Error(`Error completing task: ${error.message}`)
  }
}

export const getTasks = async (address: string, chainId: number) => {
  try {
    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)
    const tasks = await Task.find({
      address,
      chainId,
      createdAt: { $gte: startOfToday } // only today
    })
    return tasks
  } catch (error: any) {
    throw new Error(`Error fetching tasks: ${error.message}`)
  }
}
