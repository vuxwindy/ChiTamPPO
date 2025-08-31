"use client";

import { useState, useMemo } from "react";
import "@/app/style/inves.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import MysteryBox from "@/views/investment/MysteryBox";
// import Dialog from "@/components/Dialog";
import InvestNFTCard from "./InvestNFTCard";

export default function InvestmentPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showMysteryBox, setShowMysteryBox] = useState(false);

  const investmentStats = useMemo(
    () => ({
      totalNfts: "-",
      totalMyNfts: "-",
      totalEarned: "125,000",
      apy: "15.8",
      totalStakers: "12,450",
    }),
    []
  );

  const personalStats = useMemo(() => {
    if (!isWalletConnected) {
      return {
        totalStaked: "0",
        totalEarned: "0",
        apy: "0",
        totalStakers: "0",
      };
    }
    return {
      totalStaked: "45,000",
      totalEarned: "2,500",
      apy: "15.8",
      totalStakers: "1",
    };
  }, [isWalletConnected]);

  return (
    <div className="investment-page">
      <Header />

      {/* Investment Hero Section */}
      <section className="investment-hero padding-large">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="investment-header text-center">
                <h1 className="investment-title">Investment</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="investment-overview padding-large">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full md:w-1/2 mb-4">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-wallet"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{investmentStats.totalNfts}</h3>
                  <p className="stat-label">Total NFTs</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 mb-4">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{investmentStats.totalMyNfts}</h3>
                  <p className="stat-label">Total My NFTs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Investment Stats */}
      {isWalletConnected && (
        <section className="personal-stats padding-large bg-gradient">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full">
                <h2 className="section-title text-center mb-5">
                  Your Investment Summary
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                <div className="stat-card personal">
                  <div className="stat-icon">
                    <i className="fas fa-wallet"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{personalStats.totalStaked}</h3>
                    <p className="stat-label">Your Total Staked</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                <div className="stat-card personal">
                  <div className="stat-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{personalStats.totalEarned}</h3>
                    <p className="stat-label">Your Total Earned</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                <div className="stat-card personal">
                  <div className="stat-icon">
                    <i className="fas fa-percentage"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{personalStats.apy}%</h3>
                    <p className="stat-label">Your Average APY</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                <div className="stat-card personal">
                  <div className="stat-icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">0</h3>
                    <p className="stat-label">Available Balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Staking Pools */}
      <section className="staking-pools padding-large bg-dark">
        <div className="container mx-auto relative">
          <div className="flex justify-end md:mb-[-80px]">
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg z-10"
              onClick={() => setShowMysteryBox(true)}
            >
              Invest
            </button>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <h2 className="section-title text-center mb-5">My NFTs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {/* Example card */}
                <InvestNFTCard nft={{}} onClaimed={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mystery Box */}
      {/* <Dialog open={showMysteryBox} onClose={() => setShowMysteryBox(false)}>
        <MysteryBox onMinted={() => {}} />
      </Dialog> */}

      <Footer />
    </div>
  );
}
