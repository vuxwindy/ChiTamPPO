// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import headerIcon from "@/app/access/image/header-icon.png";
import { toast } from "react-toastify";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const openSocialLink = useCallback((platform: string) => {
  //   const socialLinks: Record<string, string> = {
  //     facebook: "https://facebook.com/coinpayot",
  //     twitter: "https://twitter.com/coinpayot",
  //     instagram: "https://instagram.com/coinpayot",
  //     youtube: "https://youtube.com/coinpayot",
  //     linkedin: "https://linkedin.com/company/coinpayot",
  //   };
  //   if (socialLinks[platform]) {
  //     window.open(socialLinks[platform], "_blank");
  //   }
  // }, []);

  return (
    <>
      <footer id='footer' className='padding-large pattern-blur'>
        <div className='pattern-overlay pattern-blur-footer right-side-pattern'>
          <img src='https://pixelpayot.com/assets/footer-pattern-BU5Dn35q.png' alt="" />
        </div>
        <div className='container'>
          <div className='row d-flex flex-wrap justify-content-between'>
            <div className='col-lg-4 col-md-6'>
              <div className='footer-item md:item-001'>
                <Image src={headerIcon} alt='logo' className='!object-contain' />
                <p> PixelPayot is a platform that allows you to earn money by playing games. </p>
                <div className='social-media'>
                  <ul className='d-flex list-unstyled'>
                    <li className='bg-blue-trans border-rounded-circle'>
                      <Link href='https://x.com/pixelpayot' target='_blank' className='flex justify-center items-center w-full h-full'>
                        <FaXTwitter />
                      </Link>
                    </li>
                    
                    <li className='bg-blue-trans border-rounded-circle'>
                      <Link href='https://www.youtube.com/@minhtet-q2r9o' target='_blank' className='flex justify-center items-center w-full h-full'>
                        <FaYoutube />
                      </Link>
                    </li>


                    <li className='bg-blue-trans border-rounded-circle'>
                      <Link href='https://t.me/PixelpayotChannels' target='_blank' className='flex justify-center items-center w-full h-full'>
                        <FaTelegramPlane />
                      </Link>
                    </li>
                    <li className='bg-blue-trans border-rounded-circle'>
                      <Link href='mailto:contract@pixelpayot.com' target='_blank' className='flex justify-center items-center w-full h-full'>
                        <FaGoogle />
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
                    <Link
                      href='/marketplace'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      NFTs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/collection'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      Art
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blindbox'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      Collectibles
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      href='#'
                    >
                      Virtual world
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='footer-item item-003 content-light'>
                <h4>Info</h4>
                <ul className='footer-menu list-unstyled'>
                  <li>
                    <Link
                      href='/dashboard'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      Activity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/profile'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      Stats
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#leaderboard'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                    >
                      Rankings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='footer-item item-004 content-light'>
                <h4>Company</h4>
                <ul className='footer-menu list-unstyled'>
                  <li>
                    <Link
                      href='/whitepaper'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#support'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#features'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/creators'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
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
                    <Link
                      href='/whitepaper'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/referral'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                      className=''
                    >
                      Affiliates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#association'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                    >
                      Associated
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#blog'
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info("Coming Soon");
                      }}
                    >
                      Blog
                    </Link>
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
