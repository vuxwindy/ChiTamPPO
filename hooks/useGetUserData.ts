import axios from 'axios'
import { UserResponse } from './type'

export const useGetUserData = () => {
  const getUserData = async (address: string, refAddress: string | null) => {
    const res = await axios.get(`/api/ref`, {
      params: { address, refAddress }
    })

    return res.data as UserResponse
  }

  return { getUserData }
}
