"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaWallet } from "react-icons/fa";

interface CustomConnectButtonProps {
  customClassButton?: any;
}

export default function CustomConnectButton(props: CustomConnectButtonProps) {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

        if (!connected) {
          return (
            <ButtonCustom customClass={props.customClassButton} onClick={openConnectModal}>
              <FaWallet />
              Connect Wallet
            </ButtonCustom>
          );
        }

        if (chain.unsupported) {
          return (
            <ButtonCustom
              onClick={openChainModal}
              className={`px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition ${props.customClassButton}`}
            >
              Wrong network
            </ButtonCustom>
          );
        }

        return (
          <div className='flex justify-center'>
            {/* <ButtonCustom onClick={openChainModal}>{chain.name}</ButtonCustom> */}
            <ButtonCustom onClick={openAccountModal} customClass={props.customClassButton}>
              {account.displayName}
              {/* {account.displayBalance ? ` (${account.displayBalance})` : ""} */}
            </ButtonCustom>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

interface ButtonCustomProps {
  onClick?: any;
  children: any;
  className?: string;
  customClass?: string;
}

const ButtonCustom = (props: ButtonCustomProps) => {
  return (
    <button
      className={props.className || `px-4 py-2 bg-blue-600 rounded-full text-white flex gap-1 items-center hover:bg-blue-700 ${props.customClass}`}
      onClick={props.onClick || (() => {})}
    >
      {props.children}
    </button>
  );
};
