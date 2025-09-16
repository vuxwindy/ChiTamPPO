'use client'
import Marquee from 'react-fast-marquee'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaCrosshairs,
  FaShieldAlt,
  FaBolt,
  FaCopy
} from 'react-icons/fa'
import {
  FaCalendarCheck,
  FaTelegramPlane,
  FaTwitter,
  FaUserPlus,
  FaShareAlt,
  FaShare,
  FaGift,
  FaDownload,
  FaWallet,
  FaUserFriends
} from 'react-icons/fa'
import Link from 'next/link'
import Header from '@/components/Header'
import { BiRocket } from 'react-icons/bi'
import {
  FaChartLine,
  FaEthereum,
  FaGamepad,
  FaRocket,
  FaTrophy,
  FaUsers
} from 'react-icons/fa'
import { FaBitcoinSign, FaSackDollar } from 'react-icons/fa6'
import planetArrow from '@/app/access/image/planet-arrow-BTo6e6jt.png'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Binance from '@/app/access/image/Binance.png'
import Coinbase from '@/app/access/image/Coinbase.png'
import KuCoin from '@/app/access/image/KuCoin.png'
// import blockfiLogo from '@/app/access/image/Binance.png'
import okxLogo from '@/app/access/image/okx-logo.png'
import coingeckoLogo from '@/app/access/image/coingecko-logo.png'
import injectiveInjCoinLogo from '@/app/access/image/injective-inj-coin-logo.png'
// import pancakeswapLogo from '@/app/access/image/image-removebg-preview.png'
import sushiswapLogo from '@/app/access/image/sushiswap-logo.png'
import uniswapLogo from '@/app/access/image/uniswap-logo.png'
import imageRemovebgPreview from '@/app/access/image/image-removebg-preview.png'
import { toast } from 'react-toastify'
import { useAccount, useBalance } from 'wagmi'
import { useEffect, useMemo, useState } from 'react'
import { Task, TaskKey, User, UserTask } from '@/hooks/type'
import { useInvestment } from '@/hooks/useInvestment'
import { useTask } from '@/hooks/useTask'
import { ReferralComponent } from '@/components/Referral'
import { usePpoBalance } from '@/hooks/usePpoBalance'
import { formatUnits } from 'viem'
import { AiOutlineLineChart } from "react-icons/ai";
export default function Home() {
  const [user, setUser] = useState<User>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userTask, setUserTask] = useState<UserTask>()
  const [task, setTask] = useState<Task>()
  const { address, chainId } = useAccount()
  const { onGetUser } = useInvestment()
  const [refreshTask, setRefreshTask] = useState<boolean>(false)
  const {
    onGetAllTasks,
    onCompleteTask,
    onGetUser: onGetUserTask,
    onClaimReward,
    linkTelegram,
    linkX,
    linkYoutube,
    checkTaskX,
    checkTaskTele
  } = useTask()
  const { data: balance } = useBalance({
    address,
    token: '0x1F9bfDc9839dbe0C01B6B56a959974d22b38C29A'
  })
 const { balance: balancePpo } = usePpoBalance()
  // Lấy query từ URL hiện tại
  const [myRefLink, setMyRefLink] = useState<string>()

  useEffect(() => {
    if (typeof window !== 'undefined' && address) {
      setMyRefLink(`${window.location.origin}/investment?ref=${address}`)
    } else {
      setMyRefLink(undefined)
    }
  }, [address])


  const formatBalance = (balance?: string) => {
    if (!balance) return '0.00'
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(parseFloat(balance))
  }

  useEffect(() => {
    if (!address || !chainId) return
    onGetUser(address, chainId).then((res) => {
      setUser(res)
    })

    onGetAllTasks(address, chainId).then((res) => {
      const isDaily = res.find((t) => t.task === TaskKey.Daily)
      const isJoinTeleGroup = res.find((t) => t.task === TaskKey.JoinTeleGroup)
      const isFollowX = res.find((t) => t.task === TaskKey.FollowX)
      const isShare = res.find((t) => t.task === TaskKey.Share)

      setTask({
        address: address ?? '',
        chainId: chainId ?? 0,
        daily: isDaily ? isDaily.createdAt : 0,
        joinTeleGroup: isJoinTeleGroup ? isJoinTeleGroup.createdAt : 0,
        followX: isFollowX ? isFollowX.createdAt : 0,
        share: isShare ? isShare.createdAt : 0
      })
    })

    onGetUserTask(address, chainId).then((res) => {
      setUserTask(res)
    })
  }, [address, chainId, refreshTask])

  const level = useMemo(() => {
    if (!user) return 0
    const ref = Number(user.totalRef)
    return `Level ${ref >= 45 ? 3 : ref >= 35 ? 2 : ref >= 15 ? 1 : 0}`
  }, [user])

  const day = 24 * 60 * 60

  const [isDaily, isJoinTeleGroup, isFollowX, isShare, progressTask] =
    useMemo(() => {
      if (!task) return [false, false, false, false, '0/4']
      const now = Math.floor(Date.now() / 1000)
      const today = Math.floor(now / day)
      const isDaily = Math.floor(task.daily / day) !== today
      const isJoinTeleGroup = Math.floor(task.joinTeleGroup / day) !== today
      const isFollowX = Math.floor(task.followX / day) !== today
      const isShare = Math.floor(task.share / day) !== today
      const completed = [isDaily, isJoinTeleGroup, isFollowX, isShare].filter(
        (v) => v === false
      ).length

      return [isDaily, isJoinTeleGroup, isFollowX, isShare, `${completed}/4`]
    }, [task])

 
  const handleTask = async (taskKey: TaskKey) => {
    try {
      if (taskKey === TaskKey.JoinTeleGroup && !checkTaskTele()) {
        window.open(linkTelegram, '_blank')
      }
      if (taskKey === TaskKey.FollowX && !checkTaskX()) {
        window.open(linkX, '_blank')
      }
      if (taskKey === TaskKey.Share) {
        window.open(linkYoutube, '_blank')
      }
      if (!address || !chainId) return
      setIsLoading(true)
      await onCompleteTask(address, chainId, taskKey)
      setTask((prev) => {
        if (!prev) return prev
        return {
          ...prev,
          [taskKey]: Math.round(Date.now() / 1000)
        }
      })
      setRefreshTask((prev) => !prev)
      setIsLoading(false)
    } catch (error) {
      console.log('error handleTask', error)
    }
  }

  const handleClaimReward = async () => {
    if (!address || !chainId) return
    setIsLoading(true)
    await onClaimReward(address, chainId)
    setIsLoading(false)
  }

  const copyRef = async () => {
    try {
      if (myRefLink) {
        await navigator.clipboard.writeText(myRefLink)
        toast.success('Ref copied!')
      }
    } catch {
      toast.error('Failed to copy code')
    }
  }

  return (
    <>
      <div id='app'>
        <div id='app'>
          <div className='home'>
            <Header />

            <section className='hero-section'>
              <div className='hero-background'>
                <div className='floating-elements'>
                  <div className='floating-icon floating-icon-1'>
                    <FaGamepad />
                  </div>
                  <div className='floating-icon floating-icon-2'>
                    <FaBitcoinSign />
                  </div>
                  <div className='floating-icon floating-icon-3'>
                    <FaEthereum />
                  </div>
                  <div className='floating-icon floating-icon-4'>
                    <FaTrophy />
                  </div>
                </div>
              </div>
              <div className='container'>
                <div className='row align-items-center min-vh-100'>
                  <div className='col-lg-6 col-md-12'>
                    <div className='hero-content my-4'>
                      <div className='hero-badge gap-2 '>
                        <FaRocket />
                        <span>Play-to-Earn Gaming Platform</span>
                      </div>
                      <h1 className='hero-title'>
                        <span className='gradient-text'>PixelPayot</span>
                        <br />
                        <span className='typewriter'>Modern GameFi</span>
                        <br />
                        <span className='highlight-text'>Experience</span>
                      </h1>
                      <p className='hero-description'>
                        Dive into the ultimate play-to-earn gaming ecosystem
                        where every shot counts, every victory rewards you, and
                        every moment brings you closer to legendary status.
                      </p>
                      <div className='hero-stats'>
                        <div className='stat-card'>
                          <div className='stat-icon'>
                            <svg
                              width='32px'
                              height='32px'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g
                                id='SVGRepo_bgCarrier'
                                strokeWidth={0}
                              />
                              <g
                                id='SVGRepo_tracerCarrier'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <g id='SVGRepo_iconCarrier'>
                                <path
                                  d='M20 18L17 18M17 18L14 18M17 18V15M17 18V21M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z'
                                  stroke='#fb00ff'
                                  strokeWidth={2}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </g>
                            </svg>
                          </div>
                          <div className='stat-content'>
                            <h4>10K+</h4>
                            <span>Active Players</span>
                          </div>
                        </div>
                        <div className='stat-card'>
                          <div className='stat-icon'>
                            <svg
                              width='32px'
                              height='32px'
                              viewBox='-2 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='#000000'
                            >
                              <g
                                id='SVGRepo_bgCarrier'
                                strokeWidth={0}
                              />
                              <g
                                id='SVGRepo_tracerCarrier'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <g id='SVGRepo_iconCarrier'>
                                <g
                                  id='reward-4'
                                  transform='translate(-4 -2)'
                                >
                                  <path
                                    id='secondary'
                                    fill='#fb00ff'
                                    d='M12,3a7,7,0,1,0,7,7,7,7,0,0,0-7-7Zm1.24,8.75L12,11.15l-1.24.6L11,10.48l-1-.89,1.38-.19L12,8.25l.62,1.15L14,9.59l-1,.89Z'
                                  />
                                  <path
                                    id='primary'
                                    d='M16.11,15.66,17,21l-5-1L7,21l.89-5.34'
                                    fill='none'
                                    stroke='#ffffff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                  />
                                  <path
                                    id='primary-2'
                                    data-name='primary'
                                    d='M12.62,9.4,14,9.59l-1,.89.24,1.27L12,11.15l-1.24.6L11,10.48l-1-.89,1.38-.19L12,8.25ZM12,3a7,7,0,1,0,7,7,7,7,0,0,0-7-7Z'
                                    fill='none'
                                    stroke='#ffffff'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className='stat-content'>
                            <h4>$1.5M</h4>
                            <span>Total Rewards</span>
                          </div>
                        </div>
                        <div className='stat-card'>
                          <div className='stat-icon'>
                            <svg
                              width='32px'
                              height='32px'
                              viewBox='0 0 48 48'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g
                                id='SVGRepo_bgCarrier'
                                strokeWidth={0}
                              />
                              <g
                                id='SVGRepo_tracerCarrier'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <g id='SVGRepo_iconCarrier'>
                                <rect
                                  width={48}
                                  height={48}
                                  fill='white'
                                  fillOpacity='0.01'
                                />
                                <path
                                  d='M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z'
                                  fill='#fb00ff'
                                  stroke='#ffffff'
                                  strokeWidth={4}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M17 24L22 29L32 19'
                                  stroke='white'
                                  strokeWidth={4}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </g>
                            </svg>
                          </div>
                          <div className='stat-content'>
                            <h4>95%</h4>
                            <span>Success Rate</span>
                          </div>
                        </div>
                      </div>
                      <div className='hero-actions'>
                        <Link
                          href='/arrow-game'
                          onClick={(e) => {
                            e.preventDefault()
                            toast.info('Coming soon')
                          }}
                          className='btn btn-hero-primary !flex gap-1 items-center !rounded-md hover:!text-[#d42aff] transition-colors'
                        >
                          <FaCrosshairs className='me-2' /> Play Archery
                        </Link>
                        <Link
                          href='/arrow-game-modern'
                          onClick={(e) => {
                            e.preventDefault()
                            toast.info('Coming soon')
                          }}
                          className='btn btn-hero-primary !flex gap-1 items-center !rounded-md hover:!text-[#d42aff] transition-colors'
                        >
                          <FaGamepad className='me-2' /> Modern Archery
                        </Link>
                        <Link
                          href='https://www.coinstore.com/spot/PPOUSDT?ts=1758016987854'
                          target='_blank'
                          className='btn btn-hero-primary !flex gap-1 items-center !rounded-md hover:!text-[#d42aff] transition-colors'
                        >
                          <AiOutlineLineChart className='me-2' /> Buy $PPO
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='hero-visual'>
                      <div className='hero-image-container'>
                        <Image
                          src={planetArrow}
                          alt='PixelPayot Gaming'
                          className='hero-image'
                        />
                        {/* <div className='floating-cards'>
                          <div className='game-card card-1'>
                            <FaTrophy />
                            <span>Win Rewards</span>
                          </div>
                          <div className='game-card card-2'>
                            <FaChartLine />
                            <span>Earn PPO</span>
                          </div>
                          <div className='game-card card-3'>
                            <FaUsers />
                            <span>Join Community</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id='daily-tasks'
              className='daily-tasks-section'
            >
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <div className='section-badge'>
                    <i className='fas fa-tasks me-2' />
                    <span>Daily Missions</span>
                  </div>
                  <h2 className='section-title max-md:text-[24px] '>
                    Complete Tasks &amp; Earn Rewards
                  </h2>
                  <p className='section-description'>
                    {' '}
                    Join thousands of players earning $PPO tokens daily through
                    engaging missions{' '}
                  </p>
                </div>
                <div className='row g-4'>
                  <div className='col-lg-6 col-md-12'>
                    <div className='tasks-card'>
                      <div className='card-header max-md:gap-2'>
                        <div className='header-icon'>
                          <svg
                            width='32px'
                            height='32px'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g
                              id='SVGRepo_bgCarrier'
                              strokeWidth={0}
                            />
                            <g
                              id='SVGRepo_tracerCarrier'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <g id='SVGRepo_iconCarrier'>
                              <path
                                d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z'
                                fill='#fb00ff'
                              />
                            </g>
                          </svg>
                        </div>
                        <div className='header-content'>
                          <h3 className='max-md:!text-xl'>Daily Tasks</h3>
                          <p>Complete tasks to earn $PPO tokens</p>
                        </div>
                        <div className='progress-indicator'>
                          <span className='progress-text'>{progressTask}</span>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div className='task-list'>
                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <FaCalendarCheck />
                            </div>
                            <div className='task-content'>
                              <h5>Daily Check-in</h5>
                              {/* <p className='task-reward'>+0.25 PPO</p> */}
                            </div>
                            <button
                              className='btn btn-task'
                              onClick={() => handleTask(TaskKey.Daily)}
                              disabled={!isDaily || isLoading}
                            >
                              <FaCalendarCheck />
                            </button>
                          </div>

                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <FaTelegramPlane />
                            </div>
                            <div className='task-content'>
                              <h5>Join Telegram Group</h5>
                              {/* <p className='task-reward'>+0.25 PPO</p> */}
                            </div>
                            <button
                              className='btn btn-task'
                              onClick={() => handleTask(TaskKey.JoinTeleGroup)}
                              disabled={!isJoinTeleGroup || isLoading}
                            >
                              <FaUsers />
                            </button>
                          </div>

                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <FaTwitter />
                            </div>
                            <div className='task-content'>
                              <h5>Follow on X</h5>
                              {/* <p className='task-reward'>+0.25 PPO</p> */}
                            </div>
                            <button
                              className='btn btn-task'
                              onClick={() => handleTask(TaskKey.FollowX)}
                              disabled={!isFollowX || isLoading}
                            >
                              <FaUserPlus />
                            </button>
                          </div>

                          <div className='modern-task-item special'>
                            <div className='task-icon'>
                              <FaShareAlt />
                            </div>
                            <div className='task-content'>
                              <h5>Share &amp; Earn</h5>
                              {/* <p className='task-reward'>+0.25 PPO</p> */}
                              <small className='task-note'>
                                Share about PixelPayot
                              </small>
                            </div>
                            <button
                              className='btn btn-task'
                              onClick={() => handleTask(TaskKey.Share)}
                              disabled={!isShare || isLoading}
                            >
                              <FaShare />
                            </button>
                          </div>
                        </div>

                        <div className='claim-section'>
                          <div className='rewards-summary'>
                            <div className='rewards-icon'>
                              <FaGift />
                            </div>
                            <div className='rewards-content'>
                              <h4>Available Rewards</h4>
                              <span className='rewards-amount'>
                                {userTask ? userTask.reward : 0} PPO
                              </span>
                              <small className='rewards-info'>
                                ⏳ Need 200 more PPO
                              </small>
                            </div>
                            <button
                              className='btn btn-claim-rewards !flex gap-1 text-white items-center'
                              onClick={handleClaimReward}
                            >
                              <FaDownload /> Claim
                            </button>
                          </div>

                          <div className='rewards-details'>
                            {/* <div className='reward-stat'>
                              <span className='stat-label'>Total Earned:</span>
                              <span className='stat-value max-md:!text-base'>
                                {userTask ? userTask.totalEarned : 0} PPO
                              </span>
                            </div> */}
                            <div className='reward-stat'>
                              <span className='stat-label'>
                                Already Claimed:
                              </span>
                              <span className='stat-value max-md:!text-base'>
                                {userTask ? userTask.totalEarned : 0} PPO
                              </span>
                            </div>
                            {/* <div className='reward-stat'>
                              <span className='stat-label'>Pending:</span>
                              <span className='stat-value max-md:!text-base'>
                                0 PPO
                              </span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='stats-card'>
                      <div className='card-header max-md:gap-2'>
                        <div className='header-icon'>
                          <FaChartLine />
                        </div>
                        <div className='header-content'>
                          <h3 className='max-md:!text-xl'>Your Statistics</h3>
                          <p>Track your progress and earnings</p>
                        </div>
                        <div className='level-badge'>
                          <span className='level-text'>{level}</span>
                        </div>
                      </div>

                      <div className='card-body'>
                        <div className='stats-grid max-md:!flex max-md:!flex-col'>
                          <div className='stat-item md:!flex-col'>
                            <div className='stat-icon wallet !mb-0'>
                              <FaWallet />
                            </div>
                            <div className='stat-content'>
                              <span className='stat-value max-md:!text-base'>
                                {balancePpo ? formatUnits(balancePpo, 18) : 0}
                              </span>
                              <span className='stat-label'>PPO Balance</span>
                            </div>
                          </div>
                          <div className='stat-item md:!flex-col'>
                            <div className='stat-icon referral !mb-0'>
                              <FaUsers />
                            </div>
                            <div className='stat-content'>
                              <span className='stat-value max-md:!text-base'>
                                {user ? user.totalRef.toString() : 0}
                              </span>
                              <span className='stat-label'>Referrals</span>
                            </div>
                          </div>
                          <div className='stat-item md:!flex-col'>
                            <div className='stat-icon referral !mb-0 !bg-[linear-gradient(135deg,#ae5c43,#eea142)]'>
                              <FaSackDollar />
                            </div>
                            <div className='stat-content'>
                              <span className='stat-value max-md:!text-base'>
                                {user ? user.refEarned.toString() : 0}
                              </span>
                              <span className='stat-label'>Total Earnings</span>
                            </div>
                          </div>
                        </div>

                        <div className='referral-section wallet-required'>
                          <div className='referral-header'>
                            <div className='referral-icon'>
                              <FaUserFriends />
                            </div>
                            <div className='referral-content'>
                              <h4>Invite Friends</h4>
                              <p>
                                Connect your wallet to get your referral link
                                and start earning PPO!
                              </p>
                            </div>
                          </div>

                          <div className='referral-connect'>
                            <div className='code-input'>
                              <input
                                type='text'
                                className='form-control text-white !mb-0'
                                readOnly
                                value={myRefLink ?? 'Please connect wallet!'}
                              />
                              <button
                                className='btn btn-primary  !flex items-center gap-1 !mb-0'
                                onClick={copyRef}
                                disabled={!myRefLink}
                              >
                                <FaCopy /> Copy Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='games-section'>
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <div className='section-badge'>
                    <i className='fas fa-gamepad me-2' />
                    <span>Play &amp; Earn Games</span>
                  </div>
                  <h2 className='section-title max-md:text-[24px] '>
                    Choose Your Adventure
                  </h2>
                  <p className='section-description'>
                    {' '}
                    Play exciting games and earn PPO tokens while having
                    fun{' '}
                  </p>
                </div>
                <div className='games-grid'>
                  <div className='game-card flex-col flex-1 items-center justify-center text-center bg-gradient-to-b from-blue-600 to-purple-600 rounded-2xl p-6 relative'>
                    <div className='game-content flex-col items-center justify-center text-center p-4'>
                      {/* Icon */}
                      <FaCrosshairs
                        size={48}
                        className='mb-4 text-white'
                      />

                      {/* Tiêu đề */}
                      <h3 className='text-3xl font-bold text-white mb-2'>
                        PPO Archery
                      </h3>

                      {/* Mô tả */}
                      <p className='text-gray-200 mb-6 max-w-md'>
                        Test your aim and precision in this classic archery
                        game. Hit targets to earn PPO tokens!
                      </p>

                      {/* Features */}
                      <div className='flex flex-col gap-3 items-start text-left mx-auto w-fit'>
                        <span className='flex items-center gap-2 text-lg text-white'>
                          🎯 <span>Precision Aiming</span>
                        </span>
                        <span className='flex items-center gap-2 text-lg text-white'>
                          💰 <span>Earn PPO Tokens</span>
                        </span>
                        <span className='flex items-center gap-2 text-lg text-white'>
                          🏆 <span>Leaderboards</span>
                        </span>
                      </div>

                      {/* Nút Play */}
                      <Link
                        href='/arrow-game'
                        onClick={(e) => {
                          e.preventDefault()
                          toast.info('Coming Soon')
                        }}
                        className='mt-8 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white font-bold text-lg shadow-lg hover:from-yellow-400 hover:to-yellow-300 hover:text-black transition'
                      >
                        <i className='fas fa-play mr-2' /> Play Now
                      </Link>
                    </div>
                    <div className='game-glow' />
                  </div>

                  <div className='game-card flex-col flex-1 items-center justify-center text-center bg-gradient-to-b from-blue-600 to-purple-600 rounded-2xl p-6 relative'>
                    <div className='game-content flex-col items-center justify-center text-center  p-4'>
                      {/* Icon */}
                      <FaGamepad
                        size={48}
                        className='mb-4 text-white'
                      />

                      {/* Tiêu đề */}
                      <h3 className='text-3xl font-bold text-white mb-2'>
                        Modern Archery
                      </h3>

                      {/* Mô tả */}
                      <p className='text-gray-200 mb-6 max-w-md'>
                        Experience the next generation of archery with enhanced
                        graphics and gameplay mechanics.
                      </p>

                      {/* Features */}
                      <div className='flex flex-col gap-3 items-start text-left mx-auto w-fit'>
                        <span className='flex items-center gap-2 text-lg text-white'>
                          🎨 <span>Modern Graphics</span>
                        </span>
                        <span className='flex items-center gap-2 text-lg text-white'>
                          ⚡ <span>Enhanced Gameplay</span>
                        </span>
                        <span className='flex items-center gap-2 text-lg text-white'>
                          🎮 <span>Mobile Optimized</span>
                        </span>
                      </div>

                      {/* Nút Play */}
                      <Link
                        href='/arrow-game-modern'
                        onClick={(e) => {
                          e.preventDefault()
                          toast.info('Coming Soon')
                        }}
                        className='mt-8 inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white font-bold text-lg shadow-lg hover:from-yellow-400 hover:to-yellow-300 hover:text-black transition'
                      >
                        <i className='fas fa-play mr-2' /> Play Now
                      </Link>
                    </div>
                    <div className='game-glow' />
                  </div>
                </div>
              </div>
            </section>
            <section className='features-section'>
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <div className='section-badge'>
                    <i className='fas fa-star me-2' />
                    <span>Platform Features</span>
                  </div>
                  <h2 className='section-title max-md:text-[24px] '>
                    Experience Next-Gen Gaming
                  </h2>
                  <p className='section-description'>
                    {' '}
                    Discover powerful features that make PixelPayot the ultimate
                    GameFi destination{' '}
                  </p>
                </div>
                <div className='flex gap-8 max-md:flex-col'>
                  <div className='feature-card !animate-none game-card flex flex-1 flex-col items-center justify-center text-center bg-gradient-to-b from-purple-900 to-indigo-950 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/40 transition relative overflow-hidden'>
                    <div className='feature-content flex flex-col items-center'>
                      {/* Icon */}
                      <div className='feature-icon w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md mb-4'>
                        <FaBolt size={28} />
                      </div>

                      {/* Title */}
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        Lightning Fast
                      </h3>

                      {/* Description */}
                      <p className='text-gray-300 leading-relaxed mb-6 max-w-sm'>
                        Experience instant transactions with our optimized
                        blockchain integration
                      </p>

                      {/* Stats */}
                      <div className='feature-stats flex flex-col items-center'>
                        <span className='text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                          0.1s
                        </span>
                        <span className='stat-label text-sm text-gray-400 mt-1'>
                          Transaction Time
                        </span>
                      </div>
                    </div>

                    <div className='feature-glow' />
                  </div>

                  {/* Secure & Safe */}
                  <div className='feature-card !animate-none game-card flex flex-col items-center justify-center text-center bg-gradient-to-b from-purple-900 to-indigo-950 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/40 transition relative overflow-hidden flex-1'>
                    <div className='feature-content flex flex-col items-center'>
                      {/* Icon */}
                      <div className='feature-icon w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-md mb-4'>
                        <FaShieldAlt size={28} />
                      </div>

                      {/* Title */}
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        Secure &amp; Safe
                      </h3>

                      {/* Description */}
                      <p className='text-gray-300 leading-relaxed mb-6 max-w-sm'>
                        Bank-grade security with multi-signature wallet
                        protection
                      </p>

                      {/* Stats */}
                      <div className='feature-stats flex flex-col items-center'>
                        <span className='text-3xl font-extrabold bg-gradient-to-r from-green-300 to-lime-400 bg-clip-text text-transparent'>
                          99.9%
                        </span>
                        <span className='stat-label text-sm text-gray-400 mt-1'>
                          Uptime
                        </span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>

                  {/* Community Driven */}
                  <div className='feature-card !animate-none game-card flex flex-col items-center justify-center text-center bg-gradient-to-b from-purple-900 to-indigo-950 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/40 transition relative overflow-hidden flex-1'>
                    <div className='feature-content flex flex-col items-center'>
                      {/* Icon */}
                      <div className='feature-icon w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-md mb-4'>
                        <FaUsers size={28} />
                      </div>

                      {/* Title */}
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        Community Driven
                      </h3>

                      {/* Description */}
                      <p className='text-gray-300 leading-relaxed mb-6 max-w-sm'>
                        Join a thriving community of gamers and earn together
                      </p>

                      {/* Stats */}
                      <div className='feature-stats flex flex-col items-center'>
                        <span className='text-3xl font-extrabold bg-gradient-to-r from-pink-300 to-red-400 bg-clip-text text-transparent'>
                          24/7
                        </span>
                        <span className='stat-label text-sm text-gray-400 mt-1'>
                          Support
                        </span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>
                </div>
              </div>
            </section>
            <section
              id='association-with'
              className='padding-large pt-5 pattern-blur'
            >
              <div className='pattern-overlay left-side-pattern'>
                <img
                  src='https://pixelpayot.com/assets/pattern-blur-left-BLI5Zzee.png'
                  alt=''
                />
              </div>
              <div className='container !mt-16 '>
                <Marquee
                  direction='right'
                  speed={100}
                  delay={5}
                >
                  <div className='flex items-center justify-center'>
                    <a
                      href='https://www.binance.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={Binance}
                        alt='Binance'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>

                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.coinbase.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={KuCoin}
                        alt='KuCoin'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.kucoin.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={Coinbase}
                        alt='Coinbase'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                  {/* <div className='flex items-center justify-center !mx-4'>
                    <Image
                      src={blockfiLogo}
                      alt='BlockFi'
                      className='img-fluid object-contain w-auto !h-[120px]'
                    />
                  </div> */}
                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.okx.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={okxLogo}
                        alt='OKX'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.coingecko.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={coingeckoLogo}
                        alt='Coin Gecko'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.coinmarketcap.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={injectiveInjCoinLogo}
                        alt='Injective'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                  {/* <div className='flex items-center justify-center !mx-4'>
                    <Image
                      src={pancakeswapLogo}
                      alt='PancakeSwap'
                      className='img-fluid object-contain w-auto !h-[120px]'
                    />
                  </div> */}
                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.sushi.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={sushiswapLogo}
                        alt='SushiSwap'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                  <div className='flex items-center justify-center !mx-4'>
                    <a
                      href='https://www.uniswap.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        src={uniswapLogo}
                        alt='Uniswap'
                        className='img-fluid object-contain w-auto !h-[120px]'
                      />
                    </a>
                  </div>
                </Marquee>
                {/* <div className='grid grid-cols-5 gap-4'>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={Binance}
                      alt='Binance'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={Coinbase}
                      alt='Coinbase'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={KuCoin}
                      alt='KuCoin'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={blockfiLogo}
                      alt='BlockFi'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={okxLogo}
                      alt='OKX'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={coingeckoLogo}
                      alt='Coin Gecko'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={injectiveInjCoinLogo}
                      alt='Injective'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={pancakeswapLogo}
                      alt='PancakeSwap'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={sushiswapLogo}
                      alt='SushiSwap'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                  <div className='flex items-center justify-center'>
                    <Image
                      src={uniswapLogo}
                      alt='Uniswap'
                      className='img-fluid w-[120px]'
                    />
                  </div>
                </div> */}
              </div>
            </section>
            {/* <ReferralComponent /> */}

            {/* <section className='nft-investment-section'>
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <div className='section-badge'>
                    <i className='fas fa-chart-line me-2' />
                    <span>NFT Investment</span>
                  </div>
                  <h2 className='section-title max-md:text-[24px] '>
                    Invest in Premium NFTs
                  </h2>
                  <p className='section-description'>
                    {' '}
                    Discover high-value NFTs with potential for significant
                    returns{' '}
                  </p>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <Image
                    src={imageRemovebgPreview}
                    alt='comming soon'
                  />
                </div>
              </div>
            </section> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
