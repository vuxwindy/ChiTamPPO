"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export default function GamePage() {
  const addToWallet = useCallback(() => {
    console.log("Adding PPO to wallet...");
  }, []);

  const showCardSelection = useCallback(() => {
    console.log("Showing card selection...");
  }, []);

  return (
    <div className='game-page min-h-screen overflow-x-hidden font-[Inter] bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white'>
      <Header />

      {/* Hero Section */}
      <section className='hero-section py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* Left */}
            <div>
              <h1 className='text-white text-5xl font-bold mb-6'>Game Center</h1>
              <p className='text-white/70 text-lg mb-6'>Play exciting games, earn PPO tokens, and use your NFT cards to boost your performance!</p>

              {/* User Stats */}
              <div className='user-stats bg-black/70 border border-cyan-400 rounded-lg p-6 mb-6 bg-dark'>
                <div className='grid grid-cols-4 text-center gap-4'>
                  <div>
                    <div className='stat-number text-cyan-400 text-2xl font-bold'>0</div>
                    <div className='stat-label text-white/70 text-sm'>PPO Balance</div>
                  </div>
                  <div>
                    <div className='stat-number text-green-400 text-2xl font-bold'>0</div>
                    <div className='stat-label text-white/70 text-sm'>Games Played</div>
                  </div>
                  <div>
                    <div className='stat-number text-yellow-400 text-2xl font-bold'>0</div>
                    <div className='stat-label text-white/70 text-sm'>Best Score</div>
                  </div>
                  <div>
                    <div className='stat-number text-blue-400 text-2xl font-bold'>0</div>
                    <div className='stat-label text-white/70 text-sm'>NFT Cards</div>
                  </div>
                </div>
              </div>

              {/* NFT Cards Preview */}
              <div className='nft-cards-preview bg-black/70 border border-green-400 rounded-lg p-6 bg-dark'>
                <h5 className='text-white mb-4 flex justify-between items-center'>
                  <span>🎴 Your NFT Cards</span>
                  <button
                    onClick={showCardSelection}
                    className='btn btn-sm border border-green-400 px-3 py-1 !my-0 rounded !text-white hover:bg-green-400/20'
                  >
                    ➕ Select Card
                  </button>
                </h5>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>{/* NFT cards sẽ map ở đây */}</div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className='game-features bg-black/70 border border-blue-400 rounded-lg p-6 bg-dark'>
                <h4 className='text-white text-xl mb-4'>⭐ Game Features</h4>
                <ul className='space-y-2 text-white/70'>
                  <li>💰 Earn 1 PPO token per game point</li>
                  <li>🎴 Use NFT cards to boost performance</li>
                  <li>🏆 Compete for high scores and rewards</li>
                  <li>📈 Track your progress and statistics</li>
                  <li>🎁 Daily rewards and special events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className='games-section py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-white text-3xl mb-8 flex items-center gap-2'>🎮 Available Games</h2>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='game-card bg-dark  border border-blue-400 rounded-lg overflow-hidden hover:-translate-y-2 transition-all flex flex-col !animate-none !p-0'>
              <div className='relative game-image w-full'>
                <img
                  src='https://pixelpayot.com/assets/arrow-game-preview-CVpfk9G-.png'
                  alt='Arrow Game Classic'
                  className='w-full !h-[250px] !object-cover'
                />
                <div className='absolute inset-0 game-overlay bg-white/90 transition flex items-center justify-center'>
                  <div className='text-center'>
                    <h3 className='text-black text-2xl mb-2'>Arrow Game Classic</h3>
                    <p className='text-black mb-4'>Classic archery challenge with NFT card integration</p>
                    <Link href='/arrow-game' className='bg-blue-600 text-white px-5 py-2 rounded-lg'>
                      ▶ Play Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-center mb-2'>
                  <h5 className='text-white'>Arrow Game Classic</h5>
                  <span className='bg-blue-600 px-2 py-1 rounded text-xs'>Active</span>
                </div>
                <p className='text-white/70 mb-3'>Classic archery game with NFT card bonuses and PPO rewards.</p>
                <div className='grid grid-cols-3 text-center text-sm'>
                  <div>
                    <span className='block text-white/70'>Reward</span>
                    <span className='text-blue-400 font-bold'>1 PPO/Point</span>
                  </div>
                  <div>
                    <span className='block text-white/70'>Difficulty</span>
                    <span className='text-yellow-400 font-bold'>Medium</span>
                  </div>
                  <div>
                    <span className='block text-white/70'>Players</span>
                    <span className='text-cyan-400 font-bold'>0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='game-card  bg-dark  border border-green-400 rounded-lg overflow-hidden hover:-translate-y-2 transition-all flex flex-col !animate-none !p-0'>
              <div className='game-image relative w-full'>
                <img
                  src='https://pixelpayot.com/assets/arrow-game-modern-preview-B8a98Bj_.png'
                  alt='Arrow Game Modern'
                  className='w-full !h-[250px] !object-cover'
                />
                <div className='absolute inset-0 game-overlay bg-white/90 transition flex items-center justify-center'>
                  <div className='text-center'>
                    <h3 className='text-black text-2xl mb-2'>Arrow Game Modern</h3>
                    <p className='text-black mb-4'>Enhanced archery experience with modern UI and effects</p>
                    <Link href='/arrow-game-modern' className='bg-green-600 text-white px-5 py-2 rounded-lg'>
                      ▶ Play Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-center mb-2'>
                  <h5 className='text-white'>Arrow Game Modern</h5>
                  <span className='bg-green-600 px-2 py-1 rounded text-xs'>Active</span>
                </div>
                <p className='text-white/70 mb-3'>Modern version with enhanced graphics, character selection, and advanced scoring system.</p>
                <div className='grid grid-cols-3 text-center text-sm'>
                  <div>
                    <span className='block text-white/70'>Reward</span>
                    <span className='text-green-400 font-bold'>1 PPO/Point</span>
                  </div>
                  <div>
                    <span className='block text-white/70'>Difficulty</span>
                    <span className='text-yellow-400 font-bold'>Hard</span>
                  </div>
                  <div>
                    <span className='block text-white/70'>Players</span>
                    <span className='text-cyan-400 font-bold'>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <h2 className='text-white text-3xl mt-16 mb-8 flex items-center gap-2'>⏳ Coming Soon</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {[
              { image: "https://pixelpayot.com/assets/plinko-preview-D9vcuR0x.png", name: "Plinko" },
              { image: "https://pixelpayot.com/assets/snake-preview-z_fiG8wn.png", name: "Snake" },
              { image: "https://pixelpayot.com/assets/fishing-preview-BYnEXf3I.png", name: "Fishing Coin" },
            ].map((game, i) => (
              <div key={i} className=' bg-dark border border-secondary rounded overflow-hidden h-100 opacity-50'>
                <div className='relative'>
                  <img src={game.image} alt={game.name} width={600} height={200} className='w-full h-[200px] object-cover' />
                  <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                    <div className='text-center'>
                      <h3 className='text-white text-xl'>Coming Soon</h3>
                      <p className='text-white/70'>New games are being developed</p>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <h5 className='text-white'>{game.name}</h5>
                    <span className='bg-gray-500 px-2 py-1 rounded text-xs'>Soon</span>
                  </div>
                  <p className='text-white/70 text-sm'>
                    {game.name === "Plinko" && "Drop the ball and multiple bet"}
                    {game.name === "Snake" && "Origin snake and eat the $PPO!"}
                    {game.name === "Fishing Coin" && "Fishing coin and earn $PPO!"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rules */}
          <div className='game-rules bg-black/70 border border-cyan-400 rounded-lg p-6 mt-16 bg-dark  border-info'>
            <h3 className='text-white text-2xl mb-6'>📖 Game Rules & Rewards</h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h5 className='!text-cyan-400 mb-3'>💰 How to Earn PPO</h5>
                <ul className='space-y-2 text-white/70'>
                  <li>Daily Check-in: 1 PPO per day</li>
                  <li>Complete Daily Tasks: 1-5 PPO per task</li>
                  <li>Game Points: 1 PPO per point scored</li>
                  <li>NFT Card Bonuses: Extra points based on rarity</li>
                  <li>Deposit: Direct PPO transfer to platform</li>
                </ul>
              </div>
              <div>
                <h5 className='text-green-400 mb-3'>🎴 NFT Card System</h5>
                <ul className='space-y-2 text-white/70'>
                  <li>Use NFT cards to boost game performance</li>
                  <li>Rarity bonuses: Common (+5), Rare (+15), Epic (+30), Legendary (+50)</li>
                  <li>Card attributes provide additional bonuses</li>
                  <li>Cards can be purchased in marketplace</li>
                  <li>Collect rare cards for max rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
