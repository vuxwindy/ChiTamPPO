export interface User {
  user: string
  referrer: string
  totalRef: bigint
  refEarned: bigint
  refClaimed: bigint
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
