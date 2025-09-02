import { TaskResponse, UserTask } from '@/hooks/type'
import axios from 'axios'

export const getTodayTask = async (address: string, chainId: number) => {
  const response = await axios.get(`/api/task`, {
    params: { address, chainId }
  })
  return response.data as TaskResponse[]
}

export const postTask = async (
  address: string,
  chainId: number,
  task: string
) => {
  const response = await axios.post(`/api/task`, {
    address,
    chainId,
    task
  })
  return response.data
}

export const claimReward = async (address: string, chainId: number) => {
  const response = await axios.post(`/api/claim`, {
    address,
    chainId
  })
  return response.data
}

export const getUser = async (address: string, chainId: number) => {
  const response = await axios.get(`/api/user`, {
    params: { address, chainId }
  })
  return response.data as UserTask
}
