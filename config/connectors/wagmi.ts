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
  projectId: "cbb55df41b92b720f6a816ada5513dfa",
};
const config = getDefaultConfig({
  appName: metadata.name,
  projectId: metadata.projectId,
  chains,
  ssr: false,
  appDescription: "Pixel Payot dApp",
  appUrl: "https://pixelpayot.com",
  appIcon: "https://www.pixelpayot.com/icon.png?38915f74c368317d"
});

export const wagmiConfig = config;

export const defaultNetwork = chains[0];
