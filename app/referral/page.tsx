// app/referral/page.tsx  (Next.js 13 App Router)
"use client";
import "@/app/style/referral.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaCopy, FaTwitter, FaTelegram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import CustomConnectButton from "@/components/ConnectButtonCustom";

type Referral = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  joinedDate: Date;
  status: string;
  reward: number;
  referrer?: any
  address?: string
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
  const [userReferralCode, setUserReferralCode] = useState<any>();
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
      avatar: "",
      referrals: 25,
      totalEarnings: 125,
    },
    {
      id: 2,
      name: "NFTQueen",
      avatar: "",
      referrals: 18,
      totalEarnings: 90,
    },
    {
      id: 3,
      name: "BlockchainPro",
      avatar: "",
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
      <section className='referral-hero padding-large' data-v-422bf7a9=''>
        <div className='container' data-v-422bf7a9=''>
          <div className='row' data-v-422bf7a9=''>
            <div className='col-12' data-v-422bf7a9=''>
              <div className='referral-header text-center flex-col' data-v-422bf7a9=''>
                <h1 className='referral-title' data-v-422bf7a9=''>
                  Referral Program
                </h1>
                <p className='referral-subtitle' data-v-422bf7a9=''>
                  Invite friends and earn rewards together!
                </p>
                <div className='referral-banner' data-v-422bf7a9=''>
                  <div className='banner-content' data-v-422bf7a9=''>
                    <h2 data-v-422bf7a9=''>Referral bonuses are no longer available.</h2>
                    <p data-v-422bf7a9=''>New promotions will be announced soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Notice */}
      {!isWalletConnected && (
        <section className='wallet-notice-section py-16 flex justify-center max-md:!px-4'>
          <div className='bg-white/10 p-8 rounded-xl text-center'>
            <div className='text-3xl mb-4'>👛</div>
            <h3 className='max-md:!text-xl text-2xl font-bold'>Connect Your Wallet</h3>
            <p className='text-gray-400 mt-2'>Please connect your wallet to view your referral data and start earning rewards.</p>
            <div className='mt-4 flex justify-center'>
              <CustomConnectButton />
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
          <section className='referral-stats py-12 flex gap-6 max-md:!px-3 !px-8'>
            <div className='stat-card bg-white/10 p-6 flex-1 rounded-lg text-center'>
              <div className='text-3xl'>👥</div>
              <h3 className='max-md:!text-xl text-2xl'>{referralStats.totalReferrals}</h3>
              <p>Total Referrals</p>
            </div>
            <div className='stat-card bg-white/10 p-6 flex-1 rounded-lg text-center'>
              <div className='text-3xl'>💰</div>
              <h3 className='max-md:!text-xl text-2xl'>{referralStats.totalEarnings}</h3>
              <p>Total Earnings ($PPO)</p>
            </div>
          </section>

          {/* Referral Code */}

          {/* <div className='referral-code-card max-w-xl mx-auto mb-4 max-md:mx-3 max-md:!p-3'>
            <h2 className='section-title text-center !mb-4'>Invite Your Friends</h2>
            <p className='text-center text-[#b0b0b0] mb-2'>Share your referral code or link and earn rewards!</p>
            <div className='code-display'>
              <label className='block text-white font-medium mb-2'>Referral Code</label>

              <div className='code-input'>
                <input type='text' className='form-control text-white' readOnly defaultValue='' />
                <button className='btn btn-primary  !flex items-center gap-1' onClick={copyReferralCode}>
                  <FaCopy /> Copy Code
                </button>
              </div>
              <label className='block text-white font-medium mb-2'>Referral Link</label>
              <div className='code-input'>
                <input type='text' className='form-control text-white' readOnly defaultValue='' />
                <button className='btn btn-primary  !flex items-center gap-1' onClick={copyReferralLink}>
                  <FaCopy /> Copy Link
                </button>
              </div>
            </div>
          </div> */}

          {/* Referral List */}
          <section className='referral-list py-12 !px-8'>
            <h2 className='text-2xl !font-bold text-center !mb-6 !text-[#d429ff]'>Your Referrals</h2>
            {referrals.length === 0 ? (
              <div className='text-center text-gray-400'>No referrals yet. Share your code!</div>
            ) : (

              
              <div className='space-y-4'>
                {referrals.map((r) => (
                  <div key={r.id} className='flex justify-between bg-white/5 p-4 rounded-lg items-center'>
                     <h5 className="text-white !mb-0 md:hidden">{shortenAddress(r.address || "0xe8aD8EAdBF87d116a4358272e3cB3988081066a0")}</h5>
                     <h5 className="text-white">{r.address || "0xe8aD8EAdBF87d116a4358272e3cB3988081066a0"}</h5>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Leaderboard */}
          {/* <section className='referral-leaderboard py-12 bg-purple-900/30'>
            <h2 className='text-2xl font-bold text-center mb-6'>Top Referrers</h2>
            <div className='space-y-4'>
              {topReferrers.map((leader, index) => (
                <div key={leader.id} className='flex items-center justify-between bg-white/5 p-4 rounded'>
                  <span className='font-bold'>#{index + 1}</span>
                  <div className='flex items-center space-x-3'>
                    <img
                      src={leader.avatar || "https://www.gravatar.com/avatar/?d=mp"}
                      alt={leader.name}
                      width={40}
                      height={40}
                      className='rounded-full'
                    />

                    <div>
                      <h5>{leader.name}</h5>
                      <small>{leader.referrals} referrals</small>
                    </div>
                  </div>
                  <div>{leader.totalEarnings} $PPO</div>
                </div>
              ))}
            </div>
          </section> */}
        </>
      )}

      <Footer />
    </div>
  );
}


function shortenAddress(address?: string) {
  if (!address) return "";
  return address.slice(0, 5) + "..." + address.slice(-3);
}
