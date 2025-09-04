
// app/referral/page.tsx  (Next.js 13 App Router)
"use client";
import "@/app/style/referral.css";
import { useState, useEffect } from "react";
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
export const ReferralComponent = () => {
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


    return <>
    
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
            </>
          )}
     
    </>
}

function shortenAddress(address?: string) {
  if (!address) return "";
  return address.slice(0, 5) + "..." + address.slice(-3);
}
