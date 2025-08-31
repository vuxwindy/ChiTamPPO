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
                        <FaFacebook />
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
