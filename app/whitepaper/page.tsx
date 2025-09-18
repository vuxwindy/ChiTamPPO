"use client";
import {
  FaBullseye,
  FaShieldAlt,
  FaHandshake,
  FaHeart,
  FaCloud,
  FaEnvelope,
  FaGlobe,
  FaCheck,
  FaSpinner,
  FaRocket,
  FaCube,
  FaTelegram,
  FaEthereum,
  FaYoutube,
} from "react-icons/fa";
import { FaGamepad, FaStore } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/style/whitepaper.css";
import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaEye, FaCoins, FaMicrochip, FaRoad, FaUsers } from "react-icons/fa";
export default function WhitepaperPage() {
  // Table of contents
  const tableOfContents = [
    {
      id: "executive-summary",
      title: "Executive Summary",
      description: "Overview of the PixelPayot ecosystem",
      icon: <FaChartLine />,
    },
    {
      id: "vision-mission",
      title: "Vision & Mission",
      description: "Our goals and values",
      icon: <FaEye />,
    },
    {
      id: "tokenomics",
      title: "Tokenomics",
      description: "PPO token distribution and economics",
      icon: <FaCoins />,
    },
    {
      id: "technology",
      title: "Technology",
      description: "Technical architecture and stack",
      icon: <FaMicrochip />,
    },
    {
      id: "roadmap",
      title: "Roadmap",
      description: "Development timeline and milestones",
      icon: <FaRoad />,
    },
    {
      id: "team",
      title: "Team",
      description: "Meet our core team members",
      icon: <FaUsers />,
    },
  ];

  // Roadmap data
  const roadmap = [
    {
      id: 1,
      title: "Phase 1: Foundation",
      date: "Q1 2025",
      status: "completed",
      icon: <FaCheck />,
      description: "Core platform development and smart contract deployment",
      features: ["Smart Contracts", "Basic UI", "Token Launch"],
    },
    {
      id: 2,
      title: "Phase 2: Gaming Platform",
      date: "Q2 2025",
      status: "completed",
      icon: <FaCheck />,
      description: "Launch of first play-to-earn games and NFT marketplace",
      features: ["First Game", "NFT Marketplace", "Wallet Integration"],
    },
    {
      id: 3,
      title: "Phase 3: Ecosystem Expansion",
      date: "Q3 2025",
      status: "in-progress",
      icon: <FaSpinner className='  animate-spin' />,
      description: "Expansion of gaming portfolio and community features",
      features: ["Multiple Games", "Social Features", "Mobile App"],
    },
    {
      id: 4,
      title: "Phase 4: Global Launch",
      date: "Q4 2025",
      status: "upcoming",
      icon: <FaRocket />,
      description: "Full platform launch with advanced features and partnerships",
      features: ["Global Launch", "Partnerships", "Advanced Features"],
    },
    {
      id: 5,
      title: "Phase 5: Metaverse",
      date: "Q1 2026",
      status: "upcoming",
      icon: <FaCube />,
      description: "Integration with metaverse platforms and VR experiences",
      features: ["Metaverse Integration", "VR Support", "Cross-Platform"],
    },
  ];

  // Methods
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

    const shareWhitepaper = () => {
      if (navigator.share) {
        navigator.share({
          title: "PixelPayot Whitepaper",
          text: "Check out the PixelPayot whitepaper - the future of gaming and NFTs!",
          url: "https://gio2d.gitbook.io/pixelpayotwhitepaperdocs",
        });
      } else {
        navigator.clipboard.writeText("https://gio2d.gitbook.io/pixelpayotwhitepaperdocs");
        alert("Link copied to clipboard!");
      }
    };

  return (
    <div className='whitepaper-page'>
      <Header />

      {/* Hero */}
      <section className='whitepaper-hero padding-large bg-[#677ae5]'>
        <div className='container text-center'>
          <h1 className='whitepaper-title text-white'>PixelPayot Whitepaper</h1>
          <p className='whitepaper-subtitle'>The Future of Gaming and NFT Ecosystem</p>
          <div className='whitepaper-actions'>
            <Link target="_blank" href={"https://gio2d.gitbook.io/pixelpayotwhitepaperdocs"} className='btn btn-linear !px-6 !py-3 !rounded-xl'>
              <i className='fas fa-download me-2'></i>Open
            </Link>
            <Link href={"#"} className='btn btn-linear !px-6 !py-3 !rounded-xl !border-none !ml-2 !mb-0' onClick={(e) => {
              e.preventDefault()
              shareWhitepaper()
            }}>
              <i className='fas fa-share me-2'></i>Share
            </Link>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section data-v-f64e8edb='' className='toc-section padding-large bg-dark'>
        <div data-v-f64e8edb='' className='container'>
          <div data-v-f64e8edb='' className='row'>
            <div data-v-f64e8edb='' className='col-12'>
              <h2 data-v-f64e8edb='' className='section-title text-center mb-5'>
                Table of Contents
              </h2>
              <div data-v-f64e8edb='' className='toc-grid'>
                {tableOfContents.map((section) => (
                  <div key={section.id} className='toc-item' onClick={() => scrollToSection(section.id)}>
                    <div className='toc-icon min-w-[60px]'>{section.icon}</div>
                    <div className='toc-content'>
                      <h4>{section.title}</h4>
                      <p>{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='executive-summary' className='content-section padding-large bg-[#677ae5]' data-v-f64e8edb=''>
        <div className='container' data-v-f64e8edb=''>
          <div className='row' data-v-f64e8edb=''>
            <div className='col-12' data-v-f64e8edb=''>
              <div className='content-card' data-v-f64e8edb=''>
                <h2 className='content-title !flex gap-1 items-center' data-v-f64e8edb=''>
                  <FaChartLine className='me-3' /> Executive Summary
                </h2>
                <div className='content-body' data-v-f64e8edb=''>
                  <p className='lead' data-v-f64e8edb=''>
                    PixelPayot is a revolutionary gaming and NFT ecosystem that combines blockchain technology with immersive gaming experiences. Our
                    platform enables players to earn, trade, and collect unique digital assets while participating in an engaging gaming universe.
                  </p>
                  <div className='key-points' data-v-f64e8edb=''>
                    <div className='point-item' data-v-f64e8edb=''>
                      <FaGamepad className='me-2' />
                      <span data-v-f64e8edb=''>Play-to-Earn Gaming Platform</span>
                    </div>
                    <div className='point-item' data-v-f64e8edb=''>
                      <FaCoins className='me-2' />
                      <span data-v-f64e8edb=''>PPO Token Economy</span>
                    </div>
                    <div className='point-item' data-v-f64e8edb=''>
                      <FaStore className='me-2' />
                      <span data-v-f64e8edb=''>NFT Marketplace</span>
                    </div>
                    <div className='point-item' data-v-f64e8edb=''>
                      <FaUsers className='me-2' />
                      <span data-v-f64e8edb=''>Community-Driven</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='vision-mission' className='content-section padding-large bg-dark' data-v-f64e8edb=''>
        <div className='container' data-v-f64e8edb=''>
          <div className='row' data-v-f64e8edb=''>
            <div className='col-lg-6' data-v-f64e8edb=''>
              <div className='content-card' data-v-f64e8edb=''>
                <h2 className='content-title !flex items-center' data-v-f64e8edb=''>
                  <FaEye className='me-3' data-v-f64e8edb='' /> Our Vision
                </h2>
                <div className='content-body' data-v-f64e8edb=''>
                  <p data-v-f64e8edb=''>
                    To create the world&apos;s leading gaming ecosystem where players can truly own their digital assets and earn real value from
                    their gaming activities. We envision a future where gaming is not just entertainment, but a viable career path for millions of
                    people worldwide.
                  </p>
                  <div className='vision-stats' data-v-f64e8edb=''>
                    <div className='stat' data-v-f64e8edb=''>
                      <span className='stat-number' data-v-f64e8edb=''>
                        10M+
                      </span>
                      <span className='stat-label' data-v-f64e8edb=''>
                        Target Users
                      </span>
                    </div>
                    <div className='stat' data-v-f64e8edb=''>
                      <span className='stat-number' data-v-f64e8edb=''>
                        $100M
                      </span>
                      <span className='stat-label' data-v-f64e8edb=''>
                        Market Cap Goal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6' data-v-f64e8edb=''>
              <div className='content-card' data-v-f64e8edb=''>
                <h2 className='content-title !flex items-center' data-v-f64e8edb=''>
                  <FaBullseye className='me-3' data-v-f64e8edb='' /> Our Mission
                </h2>
                <div className='content-body' data-v-f64e8edb=''>
                  <p data-v-f64e8edb=''>
                    To democratize gaming by providing accessible, fair, and rewarding gaming experiences that empower players to earn while they
                    play. We are committed to building a sustainable ecosystem that benefits all participants.
                  </p>
                  <div className='mission-values' data-v-f64e8edb=''>
                    <div className='value-item' data-v-f64e8edb=''>
                      <FaShieldAlt data-v-f64e8edb='' />
                      <span data-v-f64e8edb=''>Security &amp; Transparency</span>
                    </div>
                    <div className='value-item' data-v-f64e8edb=''>
                      <FaHandshake data-v-f64e8edb='' />
                      <span data-v-f64e8edb=''>Fair Play</span>
                    </div>
                    <div className='value-item' data-v-f64e8edb=''>
                      <FaHeart data-v-f64e8edb='' />
                      <span data-v-f64e8edb=''>Community First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='tokenomics' className='content-section padding-large bg-[#677ae5]' data-v-f64e8edb=''>
        <div className='container' data-v-f64e8edb=''>
          <div className='row' data-v-f64e8edb=''>
            <div className='col-12' data-v-f64e8edb=''>
              <div className='content-card' data-v-f64e8edb=''>
                <h2 className='content-title !flex items-center' data-v-f64e8edb=''>
                  <FaCoins className='me-3' data-v-f64e8edb='' />
                  Tokenomics
                </h2>

                <div className='content-body' data-v-f64e8edb=''>
                  <div className='tokenomics-overview' data-v-f64e8edb=''>
                    <div className='token-info' data-v-f64e8edb=''>
                      <h3 data-v-f64e8edb=''>PPO Token</h3>
                      <p data-v-f64e8edb=''>The native utility token of the PixelPayot ecosystem</p>

                      <div className='token-details' data-v-f64e8edb=''>
                        <div className='detail' data-v-f64e8edb=''>
                          <span className='label' data-v-f64e8edb=''>
                            Total Supply:
                          </span>
                          <span className='value' data-v-f64e8edb=''>
                            100,000,000 PPO
                          </span>
                        </div>
                        <div className='detail' data-v-f64e8edb=''>
                          <span className='label' data-v-f64e8edb=''>
                            Initial Price:
                          </span>
                          <span className='value' data-v-f64e8edb=''>
                            $0.05 USD
                          </span>
                        </div>
                        <div className='detail' data-v-f64e8edb=''>
                          <span className='label' data-v-f64e8edb=''>
                            Blockchain:
                          </span>
                          <span className='value' data-v-f64e8edb=''>
                            Binance Smart Chain (BEP-20)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='token-distribution' data-v-f64e8edb=''>
                      <h4 data-v-f64e8edb=''>Token Distribution</h4>
                      <div className='distribution-chart' data-v-f64e8edb=''>
                        <div className='chart-item' style={{ ["--percentage" as any]: "40%" }} data-v-f64e8edb=''>
                          <div className='chart-bar' data-v-f64e8edb=''></div>
                          <span className='chart-label' data-v-f64e8edb=''>
                            Gaming Rewards (40%)
                          </span>
                        </div>

                        <div className='chart-item' style={{ ["--percentage" as any]: "25%" }} data-v-f64e8edb=''>
                          <div className='chart-bar' data-v-f64e8edb=''></div>
                          <span className='chart-label' data-v-f64e8edb=''>
                            Team &amp; Advisors (25%)
                          </span>
                        </div>

                        <div className='chart-item' style={{ ["--percentage" as any]: "20%" }} data-v-f64e8edb=''>
                          <div className='chart-bar' data-v-f64e8edb=''></div>
                          <span className='chart-label' data-v-f64e8edb=''>
                            Ecosystem Fund (20%)
                          </span>
                        </div>

                        <div className='chart-item' style={{ ["--percentage" as any]: "10%" }} data-v-f64e8edb=''>
                          <div className='chart-bar' data-v-f64e8edb=''></div>
                          <span className='chart-label' data-v-f64e8edb=''>
                            Marketing (10%)
                          </span>
                        </div>

                        <div className='chart-item' style={{ ["--percentage" as any]: "5%" }} data-v-f64e8edb=''>
                          <div className='chart-bar' data-v-f64e8edb=''></div>
                          <span className='chart-label' data-v-f64e8edb=''>
                            Initial Sale (5%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end content-body */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='technology' className='content-section padding-large bg-dark' data-v-f64e8edb=''>
        <div className='container' data-v-f64e8edb=''>
          <div className='row' data-v-f64e8edb=''>
            <div className='col-12' data-v-f64e8edb=''>
              <div className='content-card' data-v-f64e8edb=''>
                <h2 className='content-title !flex items-center' data-v-f64e8edb=''>
                  <FaMicrochip className='me-3' data-v-f64e8edb='' /> Technology Stack
                </h2>
                <div className='content-body' data-v-f64e8edb=''>
                  <div className='tech-grid' data-v-f64e8edb=''>
                    <div className='tech-item' data-v-f64e8edb=''>
                      <div className='tech-icon' data-v-f64e8edb=''>
                        <FaEthereum data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Blockchain</h4>
                      <p data-v-f64e8edb=''>Binance Smart Chain smart contracts for secure and transparent transactions</p>
                    </div>
                    <div className='tech-item' data-v-f64e8edb=''>
                      <div className='tech-icon' data-v-f64e8edb=''>
                        <FaGamepad data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Gaming Engine</h4>
                      <p data-v-f64e8edb=''>Custom gaming engine built with Unity for immersive experiences</p>
                    </div>
                    <div className='tech-item' data-v-f64e8edb=''>
                      <div className='tech-icon' data-v-f64e8edb=''>
                        <FaCloud data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Cloud Infrastructure</h4>
                      <p data-v-f64e8edb=''>AWS-powered scalable infrastructure for global accessibility</p>
                    </div>
                    <div className='tech-item' data-v-f64e8edb=''>
                      <div className='tech-icon' data-v-f64e8edb=''>
                        <FaShieldAlt data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Security</h4>
                      <p data-v-f64e8edb=''>Multi-layer security with encryption and audit trails</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-v-f64e8edb='' id='roadmap' className='content-section padding-large !bg-[#6f62c3]'>
        <div data-v-f64e8edb='' className='container'>
          <div data-v-f64e8edb='' className='row'>
            <div data-v-f64e8edb='' className='col-12'>
              <div data-v-f64e8edb='' className='content-card'>
                <h2 data-v-f64e8edb='' className='content-title !flex items-center'>
                  <FaRoad className='me-3' /> Development Roadmap
                </h2>
                <div data-v-f64e8edb='' className='content-body'>
                  <div data-v-f64e8edb='' className='roadmap-timeline'>
                    {roadmap.map((item) => {
                      return (
                        <div key={item.id} data-v-f64e8edb='' className='timeline-item'>
                          <div data-v-f64e8edb='' className={`timeline-marker ${item.status}`}>
                            {item.icon}
                          </div>
                          <div data-v-f64e8edb='' className='timeline-content'>
                            <h4 data-v-f64e8edb=''>{item.title}</h4>
                            <span data-v-f64e8edb='' className='timeline-date'>
                              {item.date}
                            </span>
                            <p data-v-f64e8edb=''>{item.description}</p>
                            <div data-v-f64e8edb='' className='phase-features'>
                              {item.features.map((feature) => {
                                return (
                                  <span data-v-f64e8edb='' key={feature} className='feature-tag'>
                                    {feature}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='content-section padding-large !bg-[#140135]' data-v-f64e8edb=''>
        <div className='container' data-v-f64e8edb=''>
          <div className='row' data-v-f64e8edb=''>
            <div className='col-12' data-v-f64e8edb=''>
              <div className='content-card' data-v-f64e8edb=''>
                <h2 className='content-title !flex items-center' data-v-f64e8edb=''>
                  <FaEnvelope className='me-3' data-v-f64e8edb='' /> Contact &amp; Resources
                </h2>
                <div className='content-body' data-v-f64e8edb=''>
                  <div className='contact-grid' data-v-f64e8edb=''>
                    
                    <div className='contact-item' data-v-f64e8edb=''>
                      <div className='contact-icon' data-v-f64e8edb=''>
                        <FaTelegram data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Telegram</h4>
                      <a href='https://t.me/PixelpayotChannels' target='_blank' data-v-f64e8edb=''>
                        @pixelpayot
                      </a>
                    </div>
                    <div className='contact-item' data-v-f64e8edb=''>
                      <div className='contact-icon' data-v-f64e8edb=''>
                        <FaTwitter data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Twitter</h4>
                      <a href='https://x.com/pixelpayot' target='_blank' data-v-f64e8edb=''>
                        @pixelpayot
                      </a>
                    </div>
                    <div className='contact-item' data-v-f64e8edb=''>
                      <div className='contact-icon' data-v-f64e8edb=''>
                        <FaEnvelope data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Email</h4>
                      <a href='mailto:contract@pixelpayot.com' data-v-f64e8edb=''>
                        contract@pixelpayot.com
                      </a>
                    </div>

                    {/* <div className='contact-item' data-v-f64e8edb=''>
                      <div className='contact-icon' data-v-f64e8edb=''>
                        <FaYoutube data-v-f64e8edb='' />
                      </div>
                      <h4 data-v-f64e8edb=''>Youtube</h4>
                      <a href='https://www.youtube.com/watch?v=4n3GelvSiG4' data-v-f64e8edb=''>
                        @pixelpayot
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
