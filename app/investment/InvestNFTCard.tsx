"use client";

import { useState, useMemo, useCallback } from "react";
import dayjs from "dayjs";
import { ethers } from "ethers";
import { useAccount, useChainId } from "wagmi";
import { writeContract, waitForTransactionReceipt } from "@wagmi/core";
import { toast } from "react-toastify";
// import { ppoPackageAbi } from "@/abis/ppoPackage";
// import { wagmiConfig } from "@/config/wagmi";
// import { useContractAddress } from "@/composables/useContractAddress";

function floorFragment(digits: any, num: number = 1) {
  const factor = Math.pow(10, digits);
  return Math.floor(num * factor) / factor;
}

type InvestNFTCardProps = {
  nft: {
    tier: number;
    startTime?: string | number;
    endTime?: string | number;
    buyAmountBNB?: string | number;
    ppoPerDay?: string | number;
    pendingPPO?: string | number;
    tokenId?: string | number;
  };
  onClaimed: () => void;
};

export default function InvestNFTCard({ nft, onClaimed }: InvestNFTCardProps) {
  const { address } = useAccount();
  const chainId = useChainId();
  //   const { ppoPackageAddress } = useContractAddress();

  const [isClaiming, setIsClaiming] = useState(false);

  const tier = useMemo(() => {
    if (nft.tier === 0) return "Bronze NFT";
    if (nft.tier === 1) return "Silver NFT";
    if (nft.tier === 2) return "Gold NFT";
    return "";
  }, [nft.tier]);

  const isActive = useMemo(() => {
    return dayjs().isAfter(dayjs(Number(nft.startTime) * 1000)) && dayjs().isBefore(dayjs(Number(nft.endTime) * 1000));
  }, [nft.startTime, nft.endTime]);

  const lockPeriod = useMemo(() => {
    return dayjs(Number(nft.endTime) * 1000).diff(dayjs(Number(nft.startTime) * 1000), "day");
  }, [nft.startTime, nft.endTime]);

  const mintStake = useMemo(() => ethers.formatUnits(nft.buyAmountBNB?.toString() || "0", 18), [nft.buyAmountBNB]);

  const ppoPerDay = useMemo(() => floorFragment(ethers.formatUnits(nft.ppoPerDay?.toString() || "0", 18), 5), [nft.ppoPerDay]);

  const pendingPPO = useMemo(() => floorFragment(ethers.formatUnits(nft.pendingPPO?.toString() || "0", 18)), [nft.pendingPPO]);

  const handleClaim = async () => {
    if (!address) {
      toast.error("Please connect your wallet first!");
      return;
    }
    setIsClaiming(true);
    try {
      //   const txHash = await writeContract(wagmiConfig, {
      //     account: address,
      //     chainId,
      //     abi: ppoPackageAbi,
      //     address: ppoPackageAddress,
      //     functionName: "claim",
      //     args: [Number(nft.tokenId)],
      //   });
      //   console.log("Claiming PPO...", nft.tokenId);
      //   await waitForTransactionReceipt(wagmiConfig, {
      //     chainId,
      //     hash: txHash,
      //   });
      //   onClaimed();
      //   toast.success("Claim successful!");
    } catch (err) {
      console.error(err);
      toast.error("Claim failed!");
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div className='pool-card p-[16px] md:p-[30px]'>
      <div className='pool-header'>
        <div className='pool-icon'>
          {nft.tier === 0 && <img src='/nft/ppo-bronze.png' alt='Bronze NFT' className='w-full h-full object-cover rounded-full' />}
          {nft.tier === 1 && <img src='/nft/ppo-silver.png' alt='Silver NFT' className='w-full h-full object-cover rounded-full' />}
          {nft.tier === 2 && <img src='/nft/ppo-gold.png' alt='Gold NFT' className='w-full h-full object-cover rounded-full' />}
        </div>
        <div className='pool-info'>
          <h3 className='max-md:!text-xl pool-name'>{tier}</h3>
        </div>
        <div className={`pool-status ${isActive ? "active" : "inactive"}`}>{isActive ? "Active" : "Inactive"}</div>
      </div>

      <div className='pool-stats'>
        <div className='stat-row'>
          <span className='stat-label'>Lock Period</span>
          <span className='stat-value max-md:!text-base'>{lockPeriod} days</span>
        </div>
        <div className='stat-row'>
          <span className='stat-label'>Min Stake</span>
          <span className='stat-value max-md:!text-base'>{mintStake} BNB</span>
        </div>
        <div className='stat-row'>
          <span className='stat-label'>PPO per day</span>
          <span className='stat-value max-md:!text-base'>{ppoPerDay} PPO</span>
        </div>
        <div className='stat-row'>
          <span className='stat-label'>Pending PPO</span>
          <span className='stat-value max-md:!text-base'>{pendingPPO} PPO</span>
        </div>
      </div>

      <div className='pool-actions'>
        <button className='btn btn-linear' onClick={handleClaim} disabled={!isActive || isClaiming}>
          <i className='fas fa-lock mr-2'></i>
          {isClaiming ? "Claiming..." : "Claim Now"}
        </button>
      </div>
    </div>
  );
}
