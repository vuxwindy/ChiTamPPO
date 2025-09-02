export interface User {
  user: string
  referrer: string
  totalRef: bigint
  refEarned: bigint
  refClaimed: bigint
}

export interface UserTask {
  address: string
  chainId: number
  reward: number
  totalEarned: number
  createdAt: string
  lastClaimedAt: string
}

export interface Task {
  address: string
  chainId: number
  daily: number
  joinTeleGroup: number
  followX: number
  share: number
}

export enum TaskKey {
  Daily = 'daily',
  JoinTeleGroup = 'joinTeleGroup',
  FollowX = 'followX',
  Share = 'share'
}

export interface TaskResponse {
  address: string
  chainId: number
  task: string
  createdAt: Date
}
