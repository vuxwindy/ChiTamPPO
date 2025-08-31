import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaCrosshairs, FaShieldAlt, FaBolt } from "react-icons/fa";
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
  FaUserFriends,
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/Header";
import { BiRocket } from "react-icons/bi";
import { FaChartLine, FaEthereum, FaGamepad, FaRocket, FaTrophy, FaUsers } from "react-icons/fa";
import { FaBitcoinSign } from "react-icons/fa6";
import planetArrow from "@/app/access/image/planet-arrow-BTo6e6jt.png";
import Image from "next/image";
export default function Home() {
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
                        {" "}
                        Dive into the ultimate play-to-earn gaming ecosystem where every shot counts, every victory rewards you, and every moment
                        brings you closer to legendary status.{" "}
                      </p>
                      <div className='hero-stats'>
                        <div className='stat-card'>
                          <div className='stat-icon'>
                            <svg width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
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
                            <svg width='32px' height='32px' viewBox='-2 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='#000000'>
                              <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                              <g id='SVGRepo_iconCarrier'>
                                <g id='reward-4' transform='translate(-4 -2)'>
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
                            <svg width='32px' height='32px' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                              <g id='SVGRepo_iconCarrier'>
                                <rect width={48} height={48} fill='white' fillOpacity='0.01' />
                                <path
                                  d='M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z'
                                  fill='#fb00ff'
                                  stroke='#ffffff'
                                  strokeWidth={4}
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path d='M17 24L22 29L32 19' stroke='white' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' />
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
                        <Link href='/arrow-game' className='btn btn-hero-primary !rounded-md'>
                          <i className='fas fa-crosshairs me-2' /> Play Archery{" "}
                        </Link>
                        <Link href='/arrow-game-modern' className='btn btn-hero-primary !rounded-md'>
                          <i className='fas fa-gamepad me-2' /> Modern Archery{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='hero-visual'>
                      <div className='hero-image-container'>
                        <Image src={planetArrow} alt='PixelPayot Gaming' className='hero-image' />
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
            <section id='daily-tasks' className='daily-tasks-section'>
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <div className='section-badge'>
                    <i className='fas fa-tasks me-2' />
                    <span>Daily Missions</span>
                  </div>
                  <h2 className='section-title'>Complete Tasks &amp; Earn Rewards</h2>
                  <p className='section-description'> Join thousands of players earning $PPO tokens daily through engaging missions </p>
                </div>
                <div className='row g-4'>
                  <div className='col-lg-6 col-md-12'>
                    <div className='tasks-card'>
                      <div className='card-header'>
                        <div className='header-icon'>
                          <svg width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
                            <g id='SVGRepo_iconCarrier'>
                              <path
                                d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z'
                                fill='#fb00ff'
                              />
                            </g>
                          </svg>
                        </div>
                        <div className='header-content'>
                          <h3>Daily Tasks</h3>
                          <p>Complete tasks to earn $PPO tokens</p>
                        </div>
                        <div className='progress-indicator'>
                          <span className='progress-text'>1/6</span>
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
                              <p className='task-reward'>+0.25 PPO</p>
                            </div>
                            <button className='btn btn-task'>
                              <FaCalendarCheck />
                            </button>
                          </div>

                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <FaTelegramPlane />
                            </div>
                            <div className='task-content'>
                              <h5>Join Telegram Group</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                            </div>
                            <button className='btn btn-task'>
                              <FaUsers />
                            </button>
                          </div>

                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <FaTwitter />
                            </div>
                            <div className='task-content'>
                              <h5>Follow on X</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                            </div>
                            <button className='btn btn-task'>
                              <FaUserPlus />
                            </button>
                          </div>

                          <div className='modern-task-item special'>
                            <div className='task-icon'>
                              <FaShareAlt />
                            </div>
                            <div className='task-content'>
                              <h5>Share &amp; Earn</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                              <small className='task-note'>Share about PixelPayot</small>
                            </div>
                            <button className='btn btn-task'>
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
                              <span className='rewards-amount'>0 PPO</span>
                              <small className='rewards-info'>⏳ Need 200 more PPO</small>
                            </div>
                            <button className='btn btn-claim-rewards !flex gap-1 text-white items-center'>
                              <FaDownload /> Claim
                            </button>
                          </div>

                          <div className='rewards-details'>
                            <div className='reward-stat'>
                              <span className='stat-label'>Total Earned:</span>
                              <span className='stat-value'>0 PPO</span>
                            </div>
                            <div className='reward-stat'>
                              <span className='stat-label'>Already Claimed:</span>
                              <span className='stat-value'>0 PPO</span>
                            </div>
                            <div className='reward-stat'>
                              <span className='stat-label'>Pending:</span>
                              <span className='stat-value'>0 PPO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='stats-card'>
                      <div className='card-header'>
                        <div className='header-icon'>
                          <FaChartLine />
                        </div>
                        <div className='header-content'>
                          <h3>Your Statistics</h3>
                          <p>Track your progress and earnings</p>
                        </div>
                        <div className='level-badge'>
                          <span className='level-text'>Level 0</span>
                        </div>
                      </div>

                      <div className='card-body'>
                        <div className='stats-grid'>
                          <div className='stat-item'>
                            <div className='stat-icon wallet'>
                              <FaWallet />
                            </div>
                            <div className='stat-content'>
                              <span className='stat-value'>0.00</span>
                              <span className='stat-label'>PPO Balance</span>
                            </div>
                          </div>

                          <div className='stat-item'>
                            <div className='stat-icon referral'>
                              <FaUsers />
                            </div>
                            <div className='stat-content'>
                              <span className='stat-value'>0</span>
                              <span className='stat-label'>Referrals</span>
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
                              <p>Connect your wallet to get your referral link and start earning PPO!</p>
                            </div>
                          </div>

                          <div className='referral-connect'>{/* <Linkppkit-button features='[object Object]' /> */}</div>
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
                  <h2 className='section-title'>Choose Your Adventure</h2>
                  <p className='section-description'> Play exciting games and earn PPO tokens while having fun </p>
                </div>
                <div className='games-grid'>
                  <div className='game-card flex-col'>
                    <div className='game-content flex-col text-center p-4'>
                      <FaCrosshairs size={40} className='mb-4' />
                      <h3>PPO Archery</h3>
                      <p> Test your aim and precision in this classic archery game. Hit targets to earn PPO tokens! </p>
                      <div className='game-features'>
                        <span className='feature'>🎯 Precision Aiming</span>
                        <span className='feature'>💰 Earn PPO Tokens</span>
                        <span className='feature'>🏆 Leaderboards</span>
                      </div>
                      <Link href='/arrow-game' className='btn btn-game mt-4'>
                        <i className='fas fa-play me-2' /> Play Now{" "}
                      </Link>
                    </div>
                    <div className='game-glow' />
                  </div>
                  <div className='game-card flex-col'>
                    <div className='game-content flex-col text-center p-4'>
                      <FaGamepad size={40} className='mb-4' />
                      <h3>Modern Archery</h3>
                      <p> Experience the next generation of archery with enhanced graphics and gameplay mechanics. </p>
                      <div className='game-features'>
                        <span className='feature'>🎨 Modern Graphics</span>
                        <span className='feature'>⚡ Enhanced Gameplay</span>
                        <span className='feature'>🎮 Mobile Optimized</span>
                      </div>
                      <Link href='/arrow-game-modern' className='btn btn-game mt-4 '>
                        <i className='fas fa-play me-2' /> Play Now{" "}
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
                  <h2 className='section-title'>Experience Next-Gen Gaming</h2>
                  <p className='section-description'> Discover powerful features that make PixelPayot the ultimate GameFi destination </p>
                </div>
                <div className='flex gap-8 max-md:flex-col'>
                  <div className='feature-card game-card flex flex-row items-center !animate-none flex-1'>
                    <div className='feature-content text-center flex flex-col items-center'>
                      <div className='feature-icon mx-auto'>
                        <FaBolt size={32} />
                      </div>
                      <h3 className='text-white'>Lightning Fast</h3>
                      <p className='opacity-70'> Experience instant transactions with our optimized blockchain integration </p>
                      <div className='feature-stats'>
                        <span className='stat'>0.1s</span>
                        <span className='stat-label'>Transaction Time</span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>
                  <div className='feature-card game-card flex flex-row items-center !animate-none flex-1'>
                    <div className='feature-content text-center flex flex-col items-center'>
                      <div className='feature-icon mx-auto'>
                        <FaShieldAlt size={32} />
                      </div>
                      <h3 className='text-white'>Secure &amp; Safe</h3>
                      <p className='opacity-70'>Bank-grade security with multi-signature wallet protection</p>
                      <div className='feature-stats'>
                        <span className='stat'>99.9%</span>
                        <span className='stat-label'>Uptime</span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>
                  <div className='feature-card game-card flex flex-row items-center !animate-none flex-1'>
                    <div className='feature-content text-center flex flex-col items-center'>
                      <div className='feature-icon mx-auto'>
                        <FaUsers size={32} />
                      </div>
                      <h3 className='text-white'>Community Driven</h3>
                      <p className='opacity-70'>Join a thriving community of gamers and earn together</p>
                      <div className='feature-stats'>
                        <span className='stat'>24/7</span>
                        <span className='stat-label'>Support</span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>
                </div>
              </div>
            </section>
            <section id='association-with' className='padding-large pt-5 pattern-blur'>
              <div className='pattern-overlay left-side-pattern'>
                <img src='https://pixelpayot.com/assets/pattern-blur-left-BLI5Zzee.png' />
              </div>
              <div className='container'>
                <div className='grid grid-cols-5 gap-4'>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/Binance.png' alt='Binance' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/Coinbase.png' alt='Coinbase' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/KuCoin.png' alt='KuCoin' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/blockfi-logo.png' alt='BlockFi' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/okx-logo.png' alt='OKX' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/coingecko-logo.png' alt='Coin Gecko' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/injective-inj-coin-logo.png' alt='Injective' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/pancakeswap-logo.png' alt='PancakeSwap' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/sushiswap-logo.png' alt='SushiSwap' className='img-fluid w-[120px]' />
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src='https://pixelpayot.com/platform/uniswap-logo.png' alt='Uniswap' className='img-fluid w-[120px]' />
                  </div>
                </div>
              </div>
            </section>
            <section className='nft-investment-section'>
              <div className='container'>
                <div className='section-header text-center mb-5'>
                  <div className='section-badge'>
                    <i className='fas fa-chart-line me-2' />
                    <span>NFT Investment</span>
                  </div>
                  <h2 className='section-title'>Invest in Premium NFTs</h2>
                  <p className='section-description'> Discover high-value NFTs with potential for significant returns </p>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <img src='https://pixelpayot.com/image-removebg-preview.png' alt='comming soon' />
                </div>
              </div>
            </section>
            {/**/}
            <footer id='footer' className='padding-large pattern-blur'>
              <div className='pattern-overlay pattern-blur-footer right-side-pattern'>
                <img src='https://pixelpayot.com/assets/footer-pattern-BU5Dn35q.png' />
              </div>
              <div className='container'>
                <div className='row d-flex flex-wrap justify-content-between'>
                  <div className='col-lg-4 col-md-6'>
                    <div className='footer-item md:item-001'>
                      <img src='https://pixelpayot.com/assets/header-icon-DThv0V1b.png' alt='logo' />
                      <p> PixelPayot is a platform that allows you to earn money by playing games. </p>
                      <div className='social-media'>
                        <ul className='d-flex list-unstyled'>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#' className='flex justify-center items-center w-full h-full'>
                              <FaFacebookF />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#' className='flex justify-center items-center w-full h-full'>
                              <FaTwitter />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#' className='flex justify-center items-center w-full h-full'>
                              <FaInstagram />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#' className='flex justify-center items-center w-full h-full'>
                              <FaYoutube />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#' className='flex justify-center items-center w-full h-full'>
                              <FaLinkedinIn />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='footer-item item-002 content-light'>
                      <h4>Marketplace</h4>
                      <ul className='footer-menu list-unstyled'>
                        <li>
                          <Link href='/marketplace' className=''>
                            NFTs
                          </Link>
                        </li>
                        <li>
                          <Link href='/collection' className=''>
                            Art
                          </Link>
                        </li>
                        <li>
                          <Link href='/blindbox' className=''>
                            Collectibles
                          </Link>
                        </li>
                        <li>
                          <Link href='#'>Virtual world</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='footer-item item-003 content-light'>
                      <h4>Info</h4>
                      <ul className='footer-menu list-unstyled'>
                        <li>
                          <Link href='/dashboard' className=''>
                            Activity
                          </Link>
                        </li>
                        <li>
                          <Link href='/profile' className=''>
                            Stats
                          </Link>
                        </li>
                        <li>
                          <Link href='#leaderboard'>Rankings</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='footer-item item-004 content-light'>
                      <h4>Company</h4>
                      <ul className='footer-menu list-unstyled'>
                        <li>
                          <Link href='/whitepaper' className=''>
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href='#support'>Support</Link>
                        </li>
                        <li>
                          <Link href='#features'>Features</Link>
                        </li>
                        <li>
                          <Link href='/creators' className=''>
                            Top Creators
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='footer-item item-005 content-light'>
                      <h4>Resources</h4>
                      <ul className='footer-menu list-unstyled'>
                        <li>
                          <Link href='/whitepaper' className=''>
                            Info
                          </Link>
                        </li>
                        <li>
                          <Link href='/referral' className=''>
                            Affiliates
                          </Link>
                        </li>
                        <li>
                          <Link href='#association'>Associated</Link>
                        </li>
                        <li>
                          <Link href='#blog'>Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <hr />
            <div id='footer-bottom'>
              <div className='container'>
                <div className='row text-center'>
                  <p>© 2025 Copyright PixelPayot. All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
