// app/referral/page.tsx  (Next.js 13 App Router)
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReownWalletButton from "@/components/ReownWalletButton";
import Image from "next/image";

type Referral = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  joinedDate: Date;
  status: string;
  reward: number;
};

type Leader = {
  id: number;
  name: string;
  avatar: string;
  referrals: number;
  totalEarnings: number;
};

export default function ReferralPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userReferralCode, setUserReferralCode] = useState("");
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 0,
    totalEarnings: 0,
    activeReferrals: 0,
    conversionRate: 0,
  });
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [topReferrers, setTopReferrers] = useState<Leader[]>([
    {
      id: 1,
      name: "CryptoKing",
      avatar: "/images/clients-item1.jpg",
      referrals: 25,
      totalEarnings: 125,
    },
    {
      id: 2,
      name: "NFTQueen",
      avatar: "/images/clients-item2.jpg",
      referrals: 18,
      totalEarnings: 90,
    },
    {
      id: 3,
      name: "BlockchainPro",
      avatar: "/images/clients-item3.jpg",
      referrals: 15,
      totalEarnings: 75,
    },
  ]);

  // Generate referral code
  const generateReferralCode = (address: string) => {
    const shortAddress = address.slice(2, 8).toUpperCase();
    const timestamp = Date.now().toString(36).toUpperCase();
    return `PPO${shortAddress}${timestamp}`;
  };

  const generateReferralLink = (code: string) => `https://pixelpayot.com/signup?ref=${code}`;

  const copyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(userReferralCode);
      alert("Referral code copied!");
    } catch {
      alert("Failed to copy code");
    }
  };

  const copyReferralLink = async () => {
    try {
      const link = generateReferralLink(userReferralCode);
      await navigator.clipboard.writeText(link);
      alert("Referral link copied!");
    } catch {
      alert("Failed to copy link");
    }
  };

  const shareOnTwitter = () => {
    const text = `Join me on PixelPayot! Use my referral link and get 2 $PPO bonus!`;
    const link = generateReferralLink(userReferralCode);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`);
  };

  // Simulate loading referral stats
  useEffect(() => {
    if (isWalletConnected) {
      if (!userReferralCode) {
        setUserReferralCode(generateReferralCode("0x1234567890abcdef"));
      }
      setReferralStats({
        totalReferrals: 12,
        totalEarnings: 85,
        activeReferrals: 8,
        conversionRate: 67,
      });
      setReferrals([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          avatar: "/images/clients-item1.jpg",
          joinedDate: new Date("2024-01-15"),
          status: "active",
          reward: 5,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          avatar: "/images/clients-item2.jpg",
          joinedDate: new Date("2024-01-12"),
          status: "active",
          reward: 5,
        },
      ]);
    }
  }, [isWalletConnected]);

  return (
    <div className='referral-page min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white'>
      <Header />

      {/* Referral Hero */}
      <section className='referral-hero py-20 text-center'>
        <h1 className='text-5xl font-extrabold text-purple-400'>Referral Program</h1>
        <p className='mt-4 text-gray-300'>Invite friends and earn rewards together!</p>
        <div className='mt-6 bg-purple-900/40 p-6 rounded-lg'>
          <h2 className='text-xl font-bold'>Earn 5 $PPO for each friend who joins!</h2>
          <p className='text-gray-400'>Plus, your friends get 2 $PPO bonus when they sign up with your code</p>
        </div>
      </section>

      {/* Wallet Notice */}
      {!isWalletConnected && (
        <section className='wallet-notice-section py-16 flex justify-center'>
          <div className='bg-white/10 p-8 rounded-xl text-center'>
            <div className='text-3xl mb-4'>👛</div>
            <h3 className='text-2xl font-bold'>Connect Your Wallet</h3>
            <p className='text-gray-400 mt-2'>Please connect your wallet to view your referral data and start earning rewards.</p>
            <div className='mt-4'>
              <ReownWalletButton />
            </div>
            <button className='mt-4 px-4 py-2 bg-purple-600 rounded' onClick={() => setIsWalletConnected(true)}>
              Simulate Wallet Connect
            </button>
          </div>
        </section>
      )}

      {/* Referral Content */}
      {isWalletConnected && (
        <>
          {/* Stats */}
          <section className='referral-stats py-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-8'>
            <div className='stat-card bg-white/10 p-6 rounded-lg text-center'>
              <div className='text-3xl'>👥</div>
              <h3 className='text-2xl'>{referralStats.totalReferrals}</h3>
              <p>Total Referrals</p>
            </div>
            <div className='stat-card bg-white/10 p-6 rounded-lg text-center'>
              <div className='text-3xl'>💰</div>
              <h3 className='text-2xl'>{referralStats.totalEarnings}</h3>
              <p>Total Earnings ($PPO)</p>
            </div>
          </section>

          {/* Referral Code */}
          <section className='referral-code-section py-12 bg-purple-950 text-center'>
            <h2 className='text-3xl font-bold'>Your Referral Code</h2>
            <div className='mt-4 flex justify-center space-x-2'>
              <input value={userReferralCode} readOnly className='px-3 py-2 text-black rounded' />
              <button onClick={copyReferralCode} className='px-4 py-2 bg-purple-600 rounded'>
                Copy
              </button>
            </div>
            <div className='mt-6'>
              <h4>Your Referral Link</h4>
              <div className='mt-2 flex justify-center space-x-2'>
                <input value={generateReferralLink(userReferralCode)} readOnly className='px-3 py-2 text-black rounded w-96' />
                <button onClick={copyReferralLink} className='px-4 py-2 bg-purple-500 rounded'>
                  Copy Link
                </button>
              </div>
            </div>
          </section>

          {/* Referral List */}
          <section className='referral-list py-12 px-8'>
            <h2 className='text-2xl font-bold text-center mb-6'>Your Referrals</h2>
            {referrals.length === 0 ? (
              <div className='text-center text-gray-400'>No referrals yet. Share your code!</div>
            ) : (
              <div className='space-y-4'>
                {referrals.map((r) => (
                  <div key={r.id} className='flex justify-between bg-white/5 p-4 rounded'>
                    <div className='flex items-center space-x-3'>
                      <Image src={r.avatar} alt={r.name} width={40} height={40} className='rounded-full' />
                      <div>
                        <h5>{r.name}</h5>
                        <small>{r.email}</small>
                      </div>
                    </div>
                    <div>{r.status}</div>
                    <div className='text-green-400'>+{r.reward} $PPO</div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Leaderboard */}
          <section className='referral-leaderboard py-12 bg-purple-900/30'>
            <h2 className='text-2xl font-bold text-center mb-6'>Top Referrers</h2>
            <div className='space-y-4'>
              {topReferrers.map((leader, index) => (
                <div key={leader.id} className='flex items-center justify-between bg-white/5 p-4 rounded'>
                  <span className='font-bold'>#{index + 1}</span>
                  <div className='flex items-center space-x-3'>
                    <Image src={leader.avatar} alt={leader.name} width={40} height={40} className='rounded-full' />
                    <div>
                      <h5>{leader.name}</h5>
                      <small>{leader.referrals} referrals</small>
                    </div>
                  </div>
                  <div>{leader.totalEarnings} $PPO</div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
