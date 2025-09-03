'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { IoPeople } from 'react-icons/io5'
import { FaChartPie, FaFilePdf, FaGamepad, FaUserPlus } from 'react-icons/fa'
import { IoIosMore, IoMdSwap } from 'react-icons/io'
import { ConnectButton, WalletButton } from '@rainbow-me/rainbowkit'
// import WalletStatus from "./WalletStatus"
import headerIcon from '@/app/access/image/header-icon.png'
import CustomConnectButton from './ConnectButtonCustom'

export default function Header() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  // Fake user (replace with Firebase/Auth hook)
  const currentUser = {
    photoURL: 'https://pixelpayot.com/assets/images/default-avatar.png'
  }

  const menuItems = [
    { id: 'referral', name: 'Referral', url: '/referral', icon: <IoPeople /> },
    { id: 'game', name: 'Game', url: '/game', icon: <FaGamepad /> },
    {
      id: 'investment',
      name: 'Investment',
      url: '/investment',
      icon: <FaChartPie />
    },
    { id: 'swap', name: 'Swap', url: '/swap', icon: <IoMdSwap /> },
    // {
    //   id: "profile",
    //   name: "Profile",
    //   url: "/profile",
    //   icon: "fas fa-user",
    //   submenu: [
    //     { id: "my-profile", name: "My Profile", url: "/profile", icon: "fas fa-user-circle" },
    //     { id: "dashboard", name: "Dashboard", url: "/dashboard", icon: "fas fa-chart-line" },
    //     { id: "tasks", name: "Daily Tasks", url: "/tasks", icon: "fas fa-tasks" },
    //     { id: "wallet-test", name: "Wallet Test", url: "/wallet-test", icon: "fas fa-wallet" },
    //     { id: "referral", name: "Referral", url: "/referral", icon: "fas fa-users" },
    //   ],
    // },
    {
      id: 'more',
      name: 'More',
      url: '#',
      icon: <IoIosMore />,
      submenu: [
        // { id: "blindbox", name: "Blindbox", url: "/blindbox", icon: "fas fa-box-open" },
        // { id: "swap", name: "Swap", url: "/swap", icon: "fas fa-exchange-alt" },
        // { id: "creators", name: "Creators", url: "/creators", icon: "fas fa-palette" },
        { id: 'whitepaper', name: 'Whitepaper', url: '/whitepaper', icon: <FaFilePdf /> }
      ]
    }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden'
  }

  const handleDropdownClick = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id))
  }

  const handleMenuClick = (url: string) => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
    setActiveDropdown(null)
    setIsUserMenuOpen(false)
    if (url && url !== '#') {
      router.push(url)
    }
  }

  const handleLogout = useCallback(() => {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      router.push('/')
      setIsUserMenuOpen(false)
    }
  }, [router])

  // Click outside user menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.querySelector('.user-menu')
      if (menu && !menu.contains(e.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header className='fixed top-0 left-0 right-0 h-[70px] bg-black/95 backdrop-blur-xl border-b border-white/10 z-50 flex items-center'>
      <nav className='w-full h-full'>
        <div className='max-w-[1400px] mx-auto px-5 h-full flex items-center justify-between'>
          {/* Logo */}
          <div
            className='flex items-center cursor-pointer'
            onClick={() => handleMenuClick('/')}
          >
            <Image
              src={headerIcon}
              alt='PixelPayot'
              className='!h-[35px] !object-contain w-auto'
            />
            <span className='ml-2 text-xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-400 bg-clip-text text-transparent'>
              PixelPayot
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-2 mb-0'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className='relative my-auto'
              >
                {item.submenu ? (
                  <div className='group relative'>
                    <button
                      onClick={() => handleDropdownClick(item.id)}
                      className={`flex flex-row  justify-center items-center !my-0 gap-2 px-3 py-2 !rounded-md hover:bg-pink-500/10 transition ${
                        activeDropdown === item.id
                          ? 'text-pink-500'
                          : 'text-white'
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.name}
                      <i className='fas fa-chevron-down text-xs'></i>
                    </button>
                    {activeDropdown === item.id && (
                      <ul className='absolute left-0 top-full mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg p-2 min-w-[180px]'>
                        {item.submenu.map((sub) => (
                          <li key={sub.id}>
                            <button
                              onClick={() => handleMenuClick(sub.url)}
                              className='w-full flex flex-row  justify-center items-center !my-0 gap-2 px-3 py-2 !rounded-md text-white hover:text-pink-500 hover:bg-pink-500/10'
                            >
                              <span>{sub.icon}</span>
                              {sub.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleMenuClick(item.url)}
                    className='flex flex-row  justify-center items-center  gap-2 px-3 py-2 !rounded-md text-white hover:text-pink-500 !my-0 hover:bg-pink-500/10'
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4'>
            <div className='nav-actions'>
              <div className='max-lg:hidden'>
                <CustomConnectButton customClassButton={'btn-signup !mb-0'} />
              </div>

              <div className='signup-section max-md:!hidden'>
                {/* <Link href='/signup' className='btn-signup'>
                  <FaUserPlus className='me-2' /> Sign Up{" "}
                </Link> */}
                <ConnectButton />
              </div>
            </div>
            {/* <WalletStatus /> */}
            {/* {currentUser && (
              <div className='relative user-menu'>
                <button
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className='flex items-center gap-2 px-2 py-1 rounded-full hover:bg-white/10'
                >
                  <img src={currentUser.photoURL} alt='User' width={32} height={32} className='rounded-full' />
                  <i className='fas fa-chevron-down text-white text-xs'></i>
                </button>
                {isUserMenuOpen && (
                  <ul className='absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg p-2 min-w-[160px]'>
                    <li>
                      <button
                        onClick={() => handleMenuClick("/profile")}
                        className='w-full flex items-center gap-2 px-3 py-2 text-white hover:bg-pink-500/10 hover:text-pink-500 rounded-md'
                      >
                        <i className='fas fa-user'></i> Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleMenuClick("/dashboard")}
                        className='w-full flex items-center gap-2 px-3 py-2 text-white hover:bg-pink-500/10 hover:text-pink-500 rounded-md'
                      >
                        <i className='fas fa-chart-line'></i> Dashboard
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className='w-full flex items-center gap-2 px-3 py-2 text-white hover:bg-pink-500/10 hover:text-pink-500 rounded-md'
                      >
                        <i className='fas fa-sign-out-alt'></i> Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )} */}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            data-v-2e0e4a19=''
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span data-v-2e0e4a19=''></span>
            <span data-v-2e0e4a19=''></span>
            <span data-v-2e0e4a19=''></span>
          </div>
        </div>

        {/* Mobile Menu */}

        <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <div className='flex flex-col p-5 h-[calc(100vh-70px)] overflow-y-auto pb-[80px]'>
            <ul className='flex flex-col gap-2'>
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.id)}
                        className='flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:text-pink-500 hover:bg-pink-500/10'
                      >
                        <span className='flex items-center gap-2 flex-row'>
                          <span>{item.icon}</span>
                          {item.name}
                        </span>
                        <i className='fas fa-chevron-down'></i>
                      </button>
                      {activeDropdown === item.id && (
                        <ul className='mt-2 ml-4 flex flex-col gap-1'>
                          {item.submenu.map((sub) => (
                            <li key={sub.id}>
                              <button
                                onClick={() => handleMenuClick(sub.url)}
                                className='flex items-center gap-2 flex-row w-full px-4 py-2 rounded-lg text-white hover:text-pink-500 hover:bg-pink-500/10'
                              >
                                <span>{item.icon}</span>
                                {sub.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item.url)}
                      className='flex items-center gap-2 flex-row w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:text-pink-500 hover:bg-pink-500/10'
                    >
                      <span>{item.icon}</span>
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div
              data-v-2e0e4a19=''
              className='mobile-actions'
            >
              <div
                data-v-2e0e4a19=''
                className='mobile-signup-section'
              >
                <CustomConnectButton
                  customClassButton={'mobile-btn-signup !py-4'}
                />
              </div>
              {/* <div
                data-v-2e0e4a19=''
                className='mobile-signup-section'
              >
                <a
                  data-v-2e0e4a19=''
                  href='/signup'
                  className='mobile-btn-signup'
                >
                  <FaUserPlus /> Sign Up
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
