import { on } from 'events'
import { Task, TaskKey } from './type'
import {
  claimReward,
  getTodayTask,
  getUser,
  postTask
} from '@/services/taskService'

export const useTask = () => {
  const storeKey = 'PPOTasks'

  const onCompleteTask = async (
    address: string,
    chainId: number,
    taskKey: TaskKey
  ) => {
    await postTask(address, chainId, taskKey)
  }

  const onGetAllTasks = async (address: string, chainId: number) => {
    return await getTodayTask(address, chainId)
  }

  const onGetUser = async (address: string, chainId: number) => {
    return await getUser(address, chainId)
  }

  const onClaimReward = async (address: string, chainId: number) => {
    return await claimReward(address, chainId)
  }

  return { onCompleteTask, onGetAllTasks, onGetUser, onClaimReward }
}
