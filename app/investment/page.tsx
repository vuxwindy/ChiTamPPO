'use client'
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import React, { useState, useMemo, useEffect, use } from 'react'
import '@/app/style/inves.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InvestNFTCard from './InvestNFTCard'
import { FaWallet } from 'react-icons/fa'
import logo from '@/app/access/image/logo-123.png'
import bac from '@/app/access/image/image-bac.png'
import dong from '@/app/access/image/image-dong.png'
import vang from '@/app/access/image/image-vang.png'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useAccount } from 'wagmi'
import { Order, useInvestment } from '@/hooks/useInvestment'
import { NativeAddress } from '@/config/contracts/addresses'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { on } from 'events'
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default function InvestmentPage(props: { searchParams: SearchParams }) {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [bnbAmount, setBnbAmount] = useState<number>()
  const [mintedNFTs, setMintedNFTs] = useState<Order[]>([])
  const [ppoRewards, setPpoRewards] = useState<Record<any, any>>({})
  const { address, chainId } = useAccount()
  const { onInvest, onClaim, onGetOrder } = useInvestment()

  const searchParams = use(props.searchParams)

  const ref = searchParams.ref as string

  const investmentStats = useMemo(
    () => ({
      totalNfts: '-',
      totalMyNfts: '-',
      totalEarned: '125,000',
      apy: '15.8',
      totalStakers: '12,450'
    }),
    []
  )

  const personalStats = useMemo(() => {
    if (!isWalletConnected) {
      return {
        totalStaked: '0',
        totalEarned: '0',
        apy: '0',
        totalStakers: '0'
      }
    }
    return {
      totalStaked: '45,000',
      totalEarned: '2,500',
      apy: '15.8',
      totalStakers: '1'
    }
  }, [isWalletConnected])

  const nftImages = {
    copper: dong,
    silver: bac,
    gold: vang
  }

  const handleMint = async () => {
    if (!address || !chainId) {
      return toast.warning('Please connect your wallet first')
    }
    if (!bnbAmount || isNaN(bnbAmount))
      return toast.warning('Nhập số BNB hợp lệ')

    if (bnbAmount < 0.01) {
      return toast.warning('BNB amount must be greater than 0.01')
    }
    let nftType: keyof typeof nftImages = 'copper'
    if (bnbAmount >= 0.05 && bnbAmount < 0.1) nftType = 'silver'
    if (bnbAmount >= 0.1) nftType = 'gold'

    const token = NativeAddress[chainId]
    const packageId = nftType === 'copper' ? 0 : nftType === 'silver' ? 1 : 2
    const amountBN = ethers.parseUnits(bnbAmount.toString(), 18)
    const referrer = ref || ethers.ZeroAddress

    await onInvest(token, address, packageId, amountBN, referrer, chainId)
  }

  useEffect(() => {
    if (!address || !chainId) return
    onGetOrder(address, chainId).then((orders) => {
      setMintedNFTs(orders)
    })
  }, [address, chainId])

  // Giả lập cộng PPO mỗi ngày (demo: mỗi 5 giây cộng 1 PPO)
  useEffect(() => {
    const interval = setInterval(() => {
      setPpoRewards((prev) => {
        const updated: Record<string, number> = { ...prev }
        Object.keys(updated).forEach((id) => {
          updated[id] += 20
        })
        return updated
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleClaim = async (id: any) => {
    if (!chainId) return
    await onClaim(id, chainId)
    alert(`Bạn đã +${ppoRewards[id]} PPO về ví!`)
    setPpoRewards((prev) => ({ ...prev, [id]: 0 }))
  }

  const calculateInterest = (order: Order) => {
    const now = BigInt(Math.floor(Date.now() / 1000))
    console.log('order', now, order, order.interestPerDay)
    const interest =
      ((now - order.lastUpdatedAt) / BigInt(86400)) * order.interestPerDay
    return ethers.formatUnits(interest, 18)
  }

  const nftInfo = (nft: Order) => {
    const [image, name, type] =
      nft.packageId === BigInt(0)
        ? [nftImages.copper, 'Copper NFT', 'copper']
        : nft.packageId === BigInt(1)
          ? [nftImages.silver, 'Silver NFT', 'silver']
          : [nftImages.gold, 'Gold NFT', 'gold']
    return {
      id: nft.id,
      name: name,
      image: image,
      type: type,
      interest: calculateInterest(nft)
    }
  }

  return (
    <div className='investment-page'>
      <Header />

      {/* Investment Hero Section */}
      <section className='investment-hero padding-large'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap'>
            <div className='w-full'>
              <div className='investment-header text-center'>
                <h1 className='investment-title'>Investment</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className='investment-overview padding-large'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='w-full max-md:w-1/2 mb-4'>
              <div className='stat-card'>
                <div className='stat-icon'>
                  <FaWallet />
                </div>
                <div className='stat-content'>
                  <h3 className='max-md:!text-xl stat-value'>
                    {investmentStats.totalNfts}
                  </h3>
                  <p className='stat-label'>Total NFTs</p>
                </div>
              </div>
            </div>

            <div className='w-full max-md:w-1/2 mb-4'>
              <div className='stat-card'>
                <div className='stat-icon'>
                  <i className='fas fa-chart-line'></i>
                </div>
                <div className='stat-content'>
                  <h3 className='max-md:!text-xl stat-value'>
                    {investmentStats.totalMyNfts}
                  </h3>
                  <p className='stat-label'>Total My NFTs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Investment Stats */}
      {isWalletConnected && (
        <section className='personal-stats padding-large bg-gradient'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap'>
              <div className='w-full'>
                <h2 className='section-title max-md:text-[24px]  text-center mb-5'>
                  Your Investment Summary
                </h2>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/2 lg:w-1/4 mb-4'>
                <div className='stat-card personal'>
                  <div className='stat-icon'>
                    <FaWallet />
                  </div>
                  <div className='stat-content'>
                    <h3 className='max-md:!text-xl stat-value'>
                      {personalStats.totalStaked}
                    </h3>
                    <p className='stat-label'>Your Total Staked</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 mb-4'>
                <div className='stat-card personal'>
                  <div className='stat-icon'>
                    <i className='fas fa-chart-line'></i>
                  </div>
                  <div className='stat-content'>
                    <h3 className='max-md:!text-xl stat-value'>
                      {personalStats.totalEarned}
                    </h3>
                    <p className='stat-label'>Your Total Earned</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 mb-4'>
                <div className='stat-card personal'>
                  <div className='stat-icon'>
                    <i className='fas fa-percentage'></i>
                  </div>
                  <div className='stat-content'>
                    <h3 className='max-md:!text-xl stat-value'>
                      {personalStats.apy}%
                    </h3>
                    <p className='stat-label'>Your Average APY</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 mb-4'>
                <div className='stat-card personal'>
                  <div className='stat-icon'>
                    <i className='fas fa-coins'></i>
                  </div>
                  <div className='stat-content'>
                    <h3 className='max-md:!text-xl stat-value'>0</h3>
                    <p className='stat-label'>Available Balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Staking Pools */}
      <section className='staking-pools padding-large bg-dark'>
        <div className='container mx-auto relative'>
          <div className=' p-6 text-white'>
            <h1 className='text-2xl font-bold mb-6 text-center text-white'>
              PPO NFT Mint Demo
            </h1>

            <div className='investment-header mt-4 !p-8 rounded-2xl shadow-md max-w-md mx-auto'>
              <h2 className='!text-lg font-semibold mb-4 text-white'>
                Mint NFT
              </h2>
              <input
                type='number'
                value={bnbAmount}
                onChange={(e) => setBnbAmount(e.target.value as any)}
                placeholder='Nhập số BNB'
                className='w-full p-2 mb-4 rounded-lg bg-purple-800/50 border border-purple-400/40 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400'
              />
              <Button
                onClick={handleMint}
                className='w-full'
              >
                Mint NFT
              </Button>
            </div>

            {mintedNFTs.length > 0 && (
              <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {mintedNFTs.map((nft: Order) => {
                  const { image, name, type, interest } = nftInfo(nft)
                  return (
                    <Card
                      key={nft.id}
                      className='shadow-xl rounded-2xl bg-gradient-to-br from-purple-800/80 to-indigo-900/80 border border-white/10'
                    >
                      <CardContent className='!p-4 text-center text-white'>
                        <Image
                          src={image}
                          alt={name}
                          className='w-full !h-32 object-contain rounded-xl mb-0 drop-shadow-lg'
                        />
                        <h2 className='text-lg font-semibold'>{name}</h2>
                        <p className='text-sm text-yellow-300 mt-1'>
                          Personal NFT Code: {nft.id}
                        </p>

                        <div className='mt-4 bg-white/10 backdrop-blur-md !p-4 rounded-xl border border-white/20'>
                          <p className='text-sm text-gray-200'>
                            PPO thưởng tích luỹ
                          </p>
                          <p className='text-2xl font-bold text-green-400 !mb-0'>
                            +{interest} PPO
                          </p>
                          <Button
                            onClick={() => handleClaim(nft.id)}
                            className='mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600'
                          >
                            Claim PPO
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>

          {/* <div className='flex justify-end md:mb-[-80px]'>
            <button
              className='bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 !rounded-lg shadow-lg z-10'
              onClick={() => setIsOpen(true)}
            >
              Invest
            </button>
          </div>
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              <DialogPanel className='max-w-xl space-y-4 p-6 border w-full shadow-2xl rounded-2xl border-purple-500! bg-purple-800 mx-auto'>
                <div className='flex justify-end'>
                  <button
                    onClick={() => setIsOpen(false)}
                    className='absolute top-4 right-4 bg-purple-600 hover:bg-purple-800 text-white rounded-lg! px-4 font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer'
                  >
                    X
                  </button>
                </div>
                <FormMint />
              </DialogPanel>
            </div>
          </Dialog> */}
          {/* <div className='flex flex-wrap'>
            <div className='w-full'>
              <h2 className='section-title max-md:text-[24px]  text-center mb-5'>
                My NFTs
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                <InvestNFTCard nft={{ tier: 1 }} onClaimed={() => {}} />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  )
}

const FormMint = () => {
  const [value, setValue] = useState(0)
  const handleOpenBox = () => {}
  return (
    <>
      <div
        data-v-06e0a41a=''
        className='flex flex-col items-center sm:p-8 space-y-4'
      >
        <div
          data-v-06e0a41a=''
          className='w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl shadow-lg flex items-center justify-center'
        >
          <Image
            data-v-06e0a41a=''
            src={logo}
            alt='Bronze NFT'
            className='w-full h-full object-cover rounded-full scale-[1.7]'
          />
        </div>
        <h2
          data-v-06e0a41a=''
          className='!text-white text-xl sm:text-2xl font-bold text-center'
        >
          Mystery Box
        </h2>
        <p
          data-v-06e0a41a=''
          className='!mb-[16px] text-purple-200 text-center !text-[16px]'
        >
          Enter BNB amount to open the box and receive NFT &amp; PPO instantly
        </p>
        <input
          data-v-06e0a41a=''
          type='number'
          value={value}
          onChange={(e) => setValue(e.target.value as any)}
          placeholder='Enter BNB amount'
          className='w-full px-4 py-2 sm:px-5 sm:py-3 rounded-2xl border-2 border-purple-400 bg-white text-purple-900 text-base sm:text-lg font-semibold shadow focus:border-purple-600 focus:shadow-lg transition duration-200 outline-none'
        />
        <button
          data-v-06e0a41a=''
          className='w-full py-3 sm:py-4 rounded-2xl! bg-gradient-to-r from-purple-400 to-purple-700 text-white text-base sm:text-lg font-bold shadow hover:from-purple-700 hover:to-purple-400 hover:shadow-xl transition duration-200 flex items-center justify-center'
        >
          {/**/} Open Box
        </button>
        {/**/}
      </div>
    </>
  )
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-600 bg-gray-800 shadow-md ${className}`}
      {...props}
    />
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={`p-4 ${className}`}
      {...props}
    />
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center !rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-medium text-white shadow-lg transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    )
  }
)
