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

  const linkTelegram = 'https://t.me/PixelpayotChannels'
  const linkX = 'https://x.com/pixelpayot'
  const linkYoutube = 'https://www.youtube.com/watch?v=4n3GelvSiG4'

  const defaultTasks: {
    [TaskKey.FollowX]: boolean
    [TaskKey.JoinTeleGroup]: boolean
  } = {
    [TaskKey.FollowX]: false,
    [TaskKey.JoinTeleGroup]: false
  }

  const onGetStoredTasks = (): {
    [TaskKey.FollowX]: boolean
    [TaskKey.JoinTeleGroup]: boolean
  } => {
    if (typeof window === 'undefined') {
      return defaultTasks
    }
    const stored = localStorage.getItem(storeKey)
    if (stored) {
      return JSON.parse(stored)
    }
    return defaultTasks
  }

  const onCompleteTask = async (
    address: string,
    chainId: number,
    taskKey: TaskKey
  ) => {
    await postTask(address, chainId, taskKey)
    if (taskKey === TaskKey.FollowX || taskKey === TaskKey.JoinTeleGroup) {
      const currentTasks = onGetStoredTasks()
      currentTasks[taskKey] = true
      localStorage.setItem(storeKey, JSON.stringify(currentTasks))
    }
  }

  const checkTaskX = (): boolean => {
    if (typeof window === 'undefined') {
      return false
    }
    const currentTasks = onGetStoredTasks()
    return currentTasks[TaskKey.FollowX]
  }
  const checkTaskTele = (): boolean => {
    if (typeof window === 'undefined') {
      return false
    }
    const currentTasks = onGetStoredTasks()
    return currentTasks[TaskKey.JoinTeleGroup]
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

  return {
    onCompleteTask,
    onGetAllTasks,
    onGetUser,
    onClaimReward,
    linkTelegram,
    linkX,
    linkYoutube,
    checkTaskX,
    checkTaskTele
  }
}
