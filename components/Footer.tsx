// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const openSocialLink = useCallback((platform: string) => {
    const socialLinks: Record<string, string> = {
      facebook: "https://facebook.com/coinpayot",
      twitter: "https://twitter.com/coinpayot",
      instagram: "https://instagram.com/coinpayot",
      youtube: "https://youtube.com/coinpayot",
      linkedin: "https://linkedin.com/company/coinpayot",
    };
    if (socialLinks[platform]) {
      window.open(socialLinks[platform], "_blank");
    }
  }, []);

  return (
    <>
      <footer id='footer' className='padding-large pattern-blur relative overflow-hidden'>
        {/* Pattern Overlay */}
        <div className='pattern-overlay pattern-blur-footer right-side-pattern absolute inset-0 opacity-10 z-10'>
          <img src='https://pixelpayot.com/assets/images/footer-pattern.png' alt='footer-pattern' className='object-cover' />
        </div>

        <div className='container relative z-20'>
          <div className='row d-flex flex-wrap gap-2 justify-between'>
            {/* Logo + Description */}
            <div className='col-lg-4 col-md-6 mb-6'>
              <div className='footer-item md:item-001'>
                <img
                  src='https://pixelpayot.com/assets//header-icon-DThv0V1b.png'
                  alt='logo'
                  width={120}
                  height={40}
                  className='mb-4 object-contain'
                />
                <p className='text-gray-400'>PixelPayot is a platform that allows you to earn money by playing games.</p>
                {/* Social Media */}
                <div className='social-media mt-4'>
                  <ul className='flex gap-4 list-none'>
                    {[
                      { name: "facebook", icon: <FaFacebook /> },
                      { name: "twitter", icon: <FaTwitter /> },
                      { name: "instagram", icon: <FaInstagram /> },
                      { name: "youtube", icon: <FaYoutube /> },
                      { name: "linkedin", icon: <FaLinkedinIn /> },
                    ].map((platform) => (
                      <li
                        key={platform.name}
                        className='w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(204,0,255,0.2)] cursor-pointer transition hover:bg-[rgba(204,0,255,0.4)] hover:-translate-y-1 '
                      >
                        <a className='flex justify-center items-center w-full h-full' onClick={() => openSocialLink(platform.name)}>
                          {platform.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Marketplace */}
            <div className='col-lg-2 col-md-6 mb-6'>
              <div className='footer-item'>
                <h4 className='text-white font-bold mb-4 text-lg'>Marketplace</h4>
                <ul className='list-none space-y-2'>
                  <li>
                    <Link href='/marketplace'>NFTs</Link>
                  </li>
                  <li>
                    <Link href='/collection'>Art</Link>
                  </li>
                  <li>
                    <Link href='/blindbox'>Collectibles</Link>
                  </li>
                  <li>
                    <a href='#'>Virtual world</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Info */}
            <div className='col-lg-2 col-md-6 mb-6'>
              <div className='footer-item'>
                <h4 className='text-white font-bold mb-4 text-lg'>Info</h4>
                <ul className='list-none space-y-2'>
                  <li>
                    <Link href='/dashboard'>Activity</Link>
                  </li>
                  <li>
                    <Link href='/profile'>Stats</Link>
                  </li>
                  <li>
                    <a href='#leaderboard'>Rankings</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div className='col-lg-2 col-md-6 mb-6'>
              <div className='footer-item'>
                <h4 className='text-white font-bold mb-4 text-lg'>Company</h4>
                <ul className='list-none space-y-2'>
                  <li>
                    <Link href='/whitepaper'>About</Link>
                  </li>
                  <li>
                    <a href='#support'>Support</a>
                  </li>
                  <li>
                    <a href='#features'>Features</a>
                  </li>
                  <li>
                    <Link href='/creators'>Top Creators</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className='col-lg-2 col-md-6 mb-6'>
              <div className='footer-item'>
                <h4 className='text-white font-bold mb-4 text-lg'>Resources</h4>
                <ul className='list-none space-y-2'>
                  <li>
                    <Link href='/whitepaper'>Info</Link>
                  </li>
                  <li>
                    <Link href='/referral'>Affiliates</Link>
                  </li>
                  <li>
                    <a href='#association'>Associated</a>
                  </li>
                  <li>
                    <a href='#blog'>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom */}
      <hr className='border-gray-800 m-0' />
      <div id='footer-bottom' className='bg-black py-6 text-center'>
        <div className='container'>
          <p className='text-gray-400 m-0'>© {currentYear} Copyright PixelPayot. All rights reserved</p>
        </div>
      </div>
    </>
  );
}
