import { getDefaultConfig, WalletList } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { bsc, bscTestnet, mainnet, polygon, optimism, arbitrum, sepolia } from "wagmi/chains";
import { metaMaskWallet, okxWallet } from "@rainbow-me/rainbowkit/wallets";

const wallets: WalletList = [
  {
    groupName: "Wallets",
    wallets: [okxWallet, metaMaskWallet],
  },
];
const chains = [bsc, mainnet, sepolia, polygon, optimism, arbitrum, bscTestnet] as const;

const metadata = {
  name: "Nextjs Wagmi Quickstart",
  projectId: "c523f0eeb34f4188cfa3f54a6d675d55",
};
const config = getDefaultConfig({
  appName: metadata.name,
  projectId: metadata.projectId,
  chains,
  ssr: false,
});

export const wagmiConfig = config;

export const defaultNetwork = chains[0];
