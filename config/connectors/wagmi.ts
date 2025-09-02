import { getDefaultConfig, WalletList } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import {
  arbitrum,
  base,
  bsc,
  bscTestnet,
  mainnet,
  optimism,
  polygon,
  sepolia
} from 'wagmi/chains'
import { metaMaskWallet, okxWallet } from '@rainbow-me/rainbowkit/wallets'

const wallets: WalletList = [
  {
    groupName: 'Wallets',
    wallets: [okxWallet, metaMaskWallet]
  }
]
const chains = [mainnet, sepolia] as const

const metadata = {
  name: 'Pixel Payot',
  projectId: 'c523f0eeb34f4188cfa3f54a6d675d55'
}

const config = getDefaultConfig({
  appName: metadata.name,
  projectId: metadata.projectId,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [sepolia, bscTestnet]
      : [])
  ],
  ssr: true,
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http()
  }
})

export const wagmiConfig = config

export const defaultNetwork = chains[1]
