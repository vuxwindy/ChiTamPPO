import Link from "next/link";
export default function Home() {
  return (
    <>
      <div id='app'>
        <div id='app'>
          <div className='home'>
            <header className='header'>
              <nav className='navbar'>
                <div className='nav-container'>
                  <div className='nav-logo'>
                    <div className='logo'>
                      <img src='https://pixelpayot.com/assets/header-icon-DThv0V1b.png' alt='PixelPayot' className='logo-img' />
                      <span className='logo-text'>PixelPayot</span>
                    </div>
                  </div>
                  <div className='nav-menu desktop-menu'>
                    <ul className='nav-list'>
                      <li className='nav-item'>
                        <Link href={"/referral"} className='nav-link'>
                          <i className='fas fa-users' />
                          <span>Referral</span>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={"/game"} className='nav-link'>
                          <i className='fas fa-gamepad' />
                          <span>Game</span>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={"/investment"} className='nav-link'>
                          <i className='fas fa-chart-pie' />
                          <span>Investment</span>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={"/swap"} className='nav-link'>
                          <i className='fas fa-exchange-alt' />
                          <span>Swap</span>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <div className='nav-dropdown'>
                          <div className='nav-link dropdown-toggle'>
                            <i className='fas fa-ellipsis-h' />
                            <span>More</span>
                            <i className='fas fa-chevron-down' />
                          </div>
                          <ul className='dropdown-menu'>
                            <li>
                              <div className='dropdown-item'>
                                <i className='fas fa-file-alt' />
                                <span>Whitepaper</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='nav-actions'>
                    <div className='wallet-section'>{/* <Linkppkit-button features='[object Object]' /> */}</div>
                    <div className='signup-section'>
                      <Link href='/signup' className='btn-signup'>
                        <i className='fas fa-user-plus me-2' /> Sign Up{" "}
                      </Link>
                    </div>
                    {/**/}
                  </div>
                  <div className='mobile-menu-toggle'>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className='mobile-menu'>
                  <div className='flex flex-col p-5 h-[calc(100vh-70px)] overflow-y-auto pb-[80px]'>
                    <ul className='mobile-nav-list list-none m-0 p-0 flex-1'>
                      <li className='mobile-nav-item mb-2'>
                        <Link
                          href='/referral'
                          className='mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium bg-white/5 border border-white/10 transition-all text-base hover:bg-pink-100/20 hover:text-pink-600'
                        >
                          <i className='fas fa-users' />
                          <span>Referral</span>
                        </Link>
                      </li>
                      <li className='mobile-nav-item mb-2'>
                        <Link
                          href='/game'
                          className='mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium bg-white/5 border border-white/10 transition-all text-base hover:bg-pink-100/20 hover:text-pink-600'
                        >
                          <i className='fas fa-gamepad' />
                          <span>Game</span>
                        </Link>
                      </li>
                      <li className='mobile-nav-item mb-2'>
                        <Link
                          href='/investment'
                          className='mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium bg-white/5 border border-white/10 transition-all text-base hover:bg-pink-100/20 hover:text-pink-600'
                        >
                          <i className='fas fa-chart-pie' />
                          <span>Investment</span>
                        </Link>
                      </li>
                      <li className='mobile-nav-item mb-2'>
                        <Link
                          href='/swap'
                          className='mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium bg-white/5 border border-white/10 transition-all text-base hover:bg-pink-100/20 hover:text-pink-600'
                        >
                          <i className='fas fa-exchange-alt' />
                          <span>Swap</span>
                        </Link>
                      </li>
                      <li className='mobile-nav-item mb-2'>
                        <div className='mobile-dropdown'>
                          <Link
                            className='mobile-nav-link flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium bg-white/5 border border-white/10 transition-all text-base hover:bg-pink-100/20 hover:text-pink-600'
                            href='#'
                          >
                            <i className='fas fa-ellipsis-h' />
                            <span>More</span>
                            <i className='fas fa-chevron-down' />
                          </Link>
                          <ul className='mobile-dropdown-menu'>
                            <li>
                              <Link
                                href='/whitepaper'
                                className='mobile-dropdown-item flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-pink-100/20 hover:text-pink-600'
                              >
                                <i className='fas fa-file-alt' />
                                <span>Whitepaper</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className='mobile-actions'>
                      <div className='mobile-wallet-section'>{/* <Linkppkit-button features='[object Object]' /> */}</div>
                      <div className='mobile-signup-section'>
                        <Link href='/signup' className='mobile-btn-signup'>
                          <i className='fas fa-user-plus me-2' /> Sign Up{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
            <section className='hero-section'>
              <div className='hero-background'>
                <div className='floating-elements'>
                  <div className='floating-icon floating-icon-1'>
                    <i className='fas fa-gamepad' />
                  </div>
                  <div className='floating-icon floating-icon-2'>
                    <i className='fas fa-coins' />
                  </div>
                  <div className='floating-icon floating-icon-3'>
                    <i className='fab fa-ethereum' />
                  </div>
                  <div className='floating-icon floating-icon-4'>
                    <i className='fas fa-trophy' />
                  </div>
                </div>
              </div>
              <div className='container'>
                <div className='row align-items-center min-vh-100'>
                  <div className='col-lg-6 col-md-12'>
                    <div className='hero-content'>
                      <div className='hero-badge'>
                        <i className='fas fa-rocket me-2' />
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
                        <Link href='/arrow-game' className='btn btn-hero-primary'>
                          <i className='fas fa-crosshairs me-2' /> Play Archery{" "}
                        </Link>
                        <Link href='/arrow-game-modern' className='btn btn-hero-secondary'>
                          <i className='fas fa-gamepad me-2' /> Modern Archery{" "}
                        </Link>
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
                              <i className='fas fa-calendar-check' />
                            </div>
                            <div className='task-content'>
                              <h5>Daily Check-in</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                            </div>
                            <button className='btn btn-task'>
                              <i className='fas fa-calendar-check' />
                            </button>
                          </div>
                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <i className='fab fa-telegram' />
                            </div>
                            <div className='task-content'>
                              <h5>Join Telegram Group</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                            </div>
                            <button className='btn btn-task'>
                              <i className='fas fa-users' />
                            </button>
                          </div>
                          <div className='modern-task-item'>
                            <div className='task-icon'>
                              <i className='fab fa-twitter' />
                            </div>
                            <div className='task-content'>
                              <h5>Follow on X</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                            </div>
                            <button className='btn btn-task'>
                              <i className='fas fa-user-plus' />
                            </button>
                          </div>
                          <div className='modern-task-item special'>
                            <div className='task-icon'>
                              <i className='fas fa-share-alt' />
                            </div>
                            <div className='task-content'>
                              <h5>Share &amp; Earn</h5>
                              <p className='task-reward'>+0.25 PPO</p>
                              <small className='task-note'>Share about PixelPayot</small>
                            </div>
                            <button className='btn btn-task'>
                              <i className='fas fa-share' />
                            </button>
                          </div>
                        </div>
                        <div className='claim-section'>
                          <div className='rewards-summary'>
                            <div className='rewards-icon'>
                              <i className='fas fa-gift' />
                            </div>
                            <div className='rewards-content'>
                              <h4>Available Rewards</h4>
                              <span className='rewards-amount'>0 PPO</span>
                              <small className='rewards-info'>⏳ Need 200 more PPO</small>
                            </div>
                            <button className='btn btn-claim-rewards'>
                              <i className='fas fa-download' /> Claim{" "}
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
                          <i className='fas fa-chart-line' />
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
                              <i className='fas fa-wallet' />
                            </div>
                            <div className='stat-content'>
                              <span className='stat-value'>0.00</span>
                              <span className='stat-label'>PPO Balance</span>
                            </div>
                          </div>
                          <div className='stat-item'>
                            <div className='stat-icon referral'>
                              <i className='fas fa-users' />
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
                              <i className='fas fa-user-friends' />
                            </div>
                            <div className='referral-content'>
                              <h4>Invite Friends</h4>
                              <p> Connect your wallet to get your referral link and start earning PPO! </p>
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
                  <div className='game-card'>
                    <div className='game-icon'>
                      <i className='fas fa-crosshairs' />
                    </div>
                    <div className='game-content'>
                      <h3>PPO Archery</h3>
                      <p> Test your aim and precision in this classic archery game. Hit targets to earn PPO tokens! </p>
                      <div className='game-features'>
                        <span className='feature'>🎯 Precision Aiming</span>
                        <span className='feature'>💰 Earn PPO Tokens</span>
                        <span className='feature'>🏆 Leaderboards</span>
                      </div>
                      <Link href='/arrow-game' className='btn btn-game'>
                        <i className='fas fa-play me-2' /> Play Now{" "}
                      </Link>
                    </div>
                    <div className='game-glow' />
                  </div>
                  <div className='game-card'>
                    <div className='game-icon'>
                      <i className='fas fa-gamepad' />
                    </div>
                    <div className='game-content'>
                      <h3>Modern Archery</h3>
                      <p> Experience the next generation of archery with enhanced graphics and gameplay mechanics. </p>
                      <div className='game-features'>
                        <span className='feature'>🎨 Modern Graphics</span>
                        <span className='feature'>⚡ Enhanced Gameplay</span>
                        <span className='feature'>🎮 Mobile Optimized</span>
                      </div>
                      <Link href='/arrow-game-modern' className='btn btn-game'>
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
                <div className='features-grid'>
                  <div className='feature-card'>
                    <div className='feature-icon'>
                      <i className='fas fa-bolt' />
                    </div>
                    <div className='feature-content'>
                      <h3>Lightning Fast</h3>
                      <p> Experience instant transactions with our optimized blockchain integration </p>
                      <div className='feature-stats'>
                        <span className='stat'>0.1s</span>
                        <span className='stat-label'>Transaction Time</span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>
                  <div className='feature-card'>
                    <div className='feature-icon'>
                      <i className='fas fa-shield-alt' />
                    </div>
                    <div className='feature-content'>
                      <h3>Secure &amp; Safe</h3>
                      <p>Bank-grade security with multi-signature wallet protection</p>
                      <div className='feature-stats'>
                        <span className='stat'>99.9%</span>
                        <span className='stat-label'>Uptime</span>
                      </div>
                    </div>
                    <div className='feature-glow' />
                  </div>
                  <div className='feature-card'>
                    <div className='feature-icon'>
                      <i className='fas fa-users' />
                    </div>
                    <div className='feature-content'>
                      <h3>Community Driven</h3>
                      <p>Join a thriving community of gamers and earn together</p>
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
                            <Link href='#'>
                              <i className='icon icon-facebook' />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#'>
                              <i className='icon icon-twitter' />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#'>
                              <i className='icon icon-instagram' />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#'>
                              <i className='icon icon-youtube' />
                            </Link>
                          </li>
                          <li className='bg-blue-trans border-rounded-circle'>
                            <Link href='#'>
                              <i className='icon icon-linkedin' />
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
