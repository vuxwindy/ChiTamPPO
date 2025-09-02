import { on } from 'events'
import { Task, TaskKey } from './type'

export const useTask = () => {
  const storeKey = 'PPOTasks'

  const onCompleteTask = (
    address: string,
    chainId: number,
    taskKey: TaskKey
  ) => {
    const allTasks = onGetAllTasks()
    const task = onGetTask(address, chainId)
    task[taskKey] = Math.floor(Date.now() / 1000)
    const tasks = allTasks.map((t) =>
      t.address === address && t.chainId === chainId ? task : t
    )
    localStorage.setItem(storeKey, JSON.stringify(tasks))
  }

  const onGetAllTasks = () => {
    const tasks = localStorage.getItem(storeKey)
    if (!tasks) {
      return []
    }
    return JSON.parse(tasks) as Task[]
  }

  const onGetTask = (address: string, chainId: number) => {
    const tasks = localStorage.getItem(storeKey)
    if (!tasks) {
      const temp = {
        address,
        chainId,
        [TaskKey.Daily]: 0,
        [TaskKey.JoinTeleGroup]: 0,
        [TaskKey.FollowX]: 0,
        [TaskKey.Share]: 0
      } as Task

      localStorage.setItem(storeKey, JSON.stringify([temp]))
      return temp
    }
    const parsed = JSON.parse(tasks) as Task[]
    const existing = parsed.find(
      (item) => item.address === address && item.chainId === chainId
    )
    if (!existing) {
      const temp = {
        address,
        chainId,
        [TaskKey.Daily]: 0,
        [TaskKey.JoinTeleGroup]: 0,
        [TaskKey.FollowX]: 0,
        [TaskKey.Share]: 0
      } as Task

      localStorage.setItem(storeKey, JSON.stringify([...parsed, temp]))
      return temp
    }
    return existing
  }

  return { onCompleteTask, onGetTask, onGetAllTasks }
}
