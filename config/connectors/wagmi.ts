import { getDefaultConfig, WalletList } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { metaMaskWallet, okxWallet } from "@rainbow-me/rainbowkit/wallets";
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from "wagmi/chains";
const wallets: WalletList = [
  {
    groupName: "Wallets",
    wallets: [okxWallet, metaMaskWallet],
  },
];
const chains = [mainnet, sepolia] as const;

const metadata = {
  name: "Nextjs Wagmi Quickstart",
  projectId: "c523f0eeb34f4188cfa3f54a6d675d55",
};

const config = getDefaultConfig({
  appName: metadata.name,
  projectId: metadata.projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : [])],
  ssr: true,
});

export const wagmiConfig = config;

export const defaultNetwork = chains[1];
