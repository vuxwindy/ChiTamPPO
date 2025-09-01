import { bscTestnet } from 'viem/chains'

export const supportedPools = [
  {
    pool: '0x1DcDf32991b836893036A3780E8ea6F6c971FEDc',
    token0: '0x1F9bfDc9839dbe0C01B6B56a959974d22b38C29A',
    token1: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
  }
]

export interface Token {
  symbol: string
  name: string
  decimals: number
  icon: string
  address: string
}

export const supportedTokens: Token[] = [
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    decimals: 18,
    icon: '',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
  },
  {
    symbol: 'PPO',
    name: 'PPO Token',
    decimals: 18,
    icon: '',
    address: '0x1F9bfDc9839dbe0C01B6B56a959974d22b38C29A'
  }
]
