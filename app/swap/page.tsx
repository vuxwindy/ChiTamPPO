"use client";

import { useState, useEffect, useMemo } from "react";
import { useAccount, useChainId } from "wagmi";
import Header from "@/components/Header";
import ReownWalletButton from "@/components/ReownWalletButton";
import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
// import { ethers } from "ethers";

export default function SwapPage() {
  //   const { address, isConnected } = useAccount();
  //   const chainId = useChainId();

  //   const [isLoading, setIsLoading] = useState(false);
  //   const [fromAmount, setFromAmount] = useState("");
  //   const [toAmount, setToAmount] = useState("");
  //   const [showFromTokenModal, setShowFromTokenModal] = useState(false);
  //   const [showToTokenModal, setShowToTokenModal] = useState(false);
  //   const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  //   const [selectedFromToken, setSelectedFromToken] = useState({
  //     symbol: "BNB",
  //     name: "Binance Coin",
  //     icon: "https://pixelpayot.com/images/bnb-icon.png",
  //     address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  //   });

  //   const [selectedToToken, setSelectedToToken] = useState({
  //     symbol: "PPO",
  //     name: "PixelPayot Token",
  //     icon: "https://pixelpayot.com/images/ppo-icon.png",
  //     address: "0xCdA7eBb5005aaC33B6F4f32c17647698b020eFC9",
  //   });

  //   const [balances, setBalances] = useState<{ [k: string]: number }>({
  //     BNB: 1.23,
  //     PPO: 2000,
  //   });

  //   const exchangeRate = useMemo(() => {
  //     if (selectedFromToken.symbol === "BNB" && selectedToToken.symbol === "PPO") {
  //       return "2222.22";
  //     }
  //     if (selectedFromToken.symbol === "PPO" && selectedToToken.symbol === "BNB") {
  //       return "0.00045";
  //     }
  //     return "1";
  //   }, [selectedFromToken, selectedToToken]);

  //   const canSwap = useMemo(() => {
  //     return !!fromAmount && parseFloat(fromAmount) > 0;
  //   }, [fromAmount]);

  //   const handleSwap = async () => {
  //     if (!canSwap) return;
  //     setIsLoading(true);
  //     try {
  //       // gọi smart contract ở đây
  //       setToast({ message: "Swap success!", type: "success" });
  //       setFromAmount("");
  //       setToAmount("");
  //     } catch (e) {
  //       setToast({ message: "Swap failed!", type: "error" });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#2d1b69] text-white'>
      <div id='app'>
        <div id='app'>
          <div className='swap-page'>
            <Header />

            <section className='swap-hero padding-large'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8 col-md-10'>
                    <div className='swap-header text-center'>
                      <h1 className='swap-title'>Token Swap</h1>
                      <p className='swap-subtitle'> Swap tokens instantly with the best rates and lowest fees </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='swap-interface padding-large'>
              <div className='container swap-container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-md-8'>
                    <div className='swap-card'>
                      <div className='wallet-notice'>
                        <div className='notice-content'>
                          <div className='notice-icon'>
                            <i className='fas fa-wallet' />
                          </div>
                          <h4>Connect Your Wallet</h4>
                          <p>Please connect your wallet to start swapping tokens</p>
                          <div className='connect-btn'>{/* <appkit-button   features='[object Object]' /> */}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-8'>
                    <div className='market-panel'>
                      <h4>Market Overview</h4>
                      <div className='market-stats'>
                        <div className='market-stat'>
                          <span className='stat-label'>24h Volume</span>
                          <span className='stat-value'>$2.5M</span>
                        </div>
                        <div className='market-stat'>
                          <span className='stat-label'>Total Liquidity</span>
                          <span className='stat-value'>$15.2M</span>
                        </div>
                        <div className='market-stat'>
                          <span className='stat-label'>BNB Price</span>
                          <span className='stat-value'>{/**/} $853.79</span>
                        </div>
                        <div className='market-stat'>
                          <span className='stat-label'>PPO Price</span>
                          <span className='stat-value'>$0.05</span>
                        </div>
                      </div>
                      <div className='price-chart'>
                        <h5>PPO Price Chart</h5>
                        <div className='chart-placeholder'>
                          <FaChartLine />
                          <p>Price chart will be displayed here</p>
                        </div>
                      </div>
                      <div className='popular-pairs'>
                        <h5>Popular Pairs</h5>
                        <div className='pair-list'>
                          <div className='pair-item'>
                            <div className='pair-tokens'>
                              <img src='https://pixelpayot.com/assets/ppo-icon-BFWvHJw_.png' alt='PPO' className='token-icon-small' />
                              <img
                                src='data:image/png;base64,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'
                                alt='BNB'
                                className='token-icon-small'
                              />
                              <span>PPO/BNB</span>
                            </div>
                            <div className='pair-price'>{/**/} 0.000059 BNB</div>
                          </div>
                          <div className='pair-item'>
                            <div className='pair-tokens'>
                              <img src='https://pixelpayot.com/assets/ppo-icon-BFWvHJw_.png' alt='PPO' className='token-icon-small' />
                              <img
                                src='data:image/png;base64,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'
                                alt='USDT'
                                className='token-icon-small'
                              />
                              <span>PPO/USDT</span>
                            </div>
                            <div className='pair-price'>{/**/} $0.05 USDT</div>
                          </div>
                          <div className='pair-item'>
                            <div className='pair-tokens'>
                              <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTA4LTI2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmJhMmRkMmFlLTYxYjktNDg2MC1hZjA2LTliMzBkNDhhYjc2YjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5UaGnhur90IGvhur8gY2jGsGEgY8OzIHTDqm4gLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPlbFqSBQaMawxqFuZzwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhIChSZW5kZXJlcikgZG9jPURBR3hKSms2N0xNIHVzZXI9VUFFdGl4azlwZXMgYnJhbmQ9QWdlbmN5IDNGIE1lZGlhIHRlbXBsYXRlPTwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz5BgMgwAAAG50lEQVR4nIWXa3CU5RXHf+d5371kcw9EIDHZJCAgMyi20nItSEcEhgTKh86o03HsDF4KRWkHGKAGmXYEAqW1EcXa0XGsM+qUUoRAw6XAB6RUpYxVplCBEBAEEhNy22Qv7+mHd3ezyW7wzWRm933OOf/zP7fnrPAtz9EPipleOsa6/U3WXNvTMQdL77NUJ4tEC9QBFU9nTDjlOPqZRrMP5jf/5/DD9R7n+Nlbd7QrQx1sWBDkubXl/t4+WZ8T6XgMoxUqIKqCgKiIuqLqmlFVANEvo+Fhb3s9vq3bXv40snF/ZgcyAje8MVGm3xNdLCHv78Xo3a6cJGVTPg3QU5L46qg0Obmen5/6rGf//Ge/SMMwg180rqnyfK/Mv8n0ed8XQxmIERGROLSIxAHTfRbAlcQY0Uq7q/dvD5YXvnTwtSrPYFlrAOjOXM+U+/Ne8xqWK2LiUGlgisbpJRwZ5IAIIoiIGMtEZpTlRkrm3F3Y+M6Jtlga8O6d98qD5SWb/JYsc9xASNzAwHCqosDVljDdvZDjlyEccPmDgvF9p7jC53toGkfe3d/VD7xhATxaM3yRV2U7A5hmAFX4qrWPmtUXee9QO9UzC8jxmzuxF0GxRL8/orToTOBG6fnj/7vmxq5tb7XHeJrPixB0g5SmnwS90tJH9aqLXLoeBmB0qZ+GbaMZVWin1ECaMuoW3GUp8I3Ln3IqbB39oJjsnEBtFn2Lvo3plZu91Ky5lAQFaOuM8vdTnVTPKCAvMARz97uISF5XX56Tm9d9XMK7Ftmh3Obzok5FJtRkTm/2sXB1P1NjBFRx4kU2Lhhgz+YqSoqsIcOOqjqYCz5/YLxp97bNF9UgaMYQA1y7FaY6hakIbF9RzpbllUk/z13uYcnaJr5udzIbwZ00glPV2cEsYzzds93eSGcKbojrd7Vy8Vpf8ux3z1Xy5Px8nl6YS92y8uT7s01d/OEvLajG9VUH2EwwM3bHXCPCJNB4ZKQ/vArdIQcEan86gsWzhrmgKyt4cl4usRhEFJZWF7B1RQUAS2YP58UnikGUnrCbBk0Fj6caY02U24cntUlM891aliRoc7yQnvnRKJ6tyacn6vDR57388IFsYk6URzdcxeu1eWt9KR4jHD0dYtrEAH7bYceedt5suEVD3WhGFljxgZsghSLmtnQcnOigRvoPlCs3wyxcfYFL18NYRtj0s3Kers4HFRyFx168zIFT7QBUzyjk7XXl2JabxB172vjV683EHBhd6qOhbgwlw+2UYnMnuslUUZbHwrb7p6lBSWTCQTF26ojvbwQFTMqRGMlwG7jz1lrzk5KVgvqSlEXI8QlLZhdx5HQPqx4fwdKFhYTCcOzfPYwt9bLoB3mcbepjbDCLP68vxxg49HEXpcU2U+8NkOX38FVLhH11YygpjLNNOKcCmFZpOfhAoxfn4dQGdgtCiKlgiBEKK0u3XGHviXbqlgV5qqYAdQTEwUJ45a+trPvjVRbPHsbrvyzB7zNEooLXuA2U2tKqqKPmgLXq8dL7bZypktLxEp+aiTe1b97g3cZWAA59fJuifD+Tx/tBoH5XG+vfuArAf5tCRB2bhyYFsA2JQZjWqA6ePbYT9h9RX9cvQBmQ7xSF5398F8dOd3P2knuzrHn1MjF1wIEX/nQlqTKhIptnFhcMAZjILsQc/yHpPjbTioQ7zxnVKskw5xJ9eL3NYcm6S3xxsStRConQuaCV2ex+qYKRRXZiIRhsClVU1Vzw9maNtzyBkH53dLDANqFZZLiaEktAbpZQPbOQw59009IeHiAzLhjgw82VjCyy4lFLv2gS0BFy67fvP3dUAFo+muy1OyPnDBpMDJLMzIWWLod5K7/kfHMPAGPKsti/tZIRBXbSyUwWVFVVTZMnXDYuUPNhxADU/4ZwxOdfARp195r0xzWqDM8xNGyr4p4yP2PLs2jYWsXIQs+A0A6RryidZvmWnScjA2T2vjKWKVXDNvus0GpEMwYrkW9V+LotilgwMt+Om9E408GXuTslw+iv/3Xas2HB2k/TnTu4s9IzrcqqV3KeUlUyFdtgJ1KtSOoXTbiImmjXqydO31w594XOaEJlwJb5zr52Z86owsa7grZ4jExVxWRcSUhskvH/+F8Kj/j6QERUa09+0lc7t/ZGdIB+Jja7t8Ks8gmPmELvDqNaKYgomlhghgpCok8VHFBzjlD+st/uPPOPjY2300StDOq8fwj8xVyYPb5kx8224T0Bf2cpwjCSP1dARIX4bxZNoLrnZ01HV52fW09saWy5uPG9bzL6eAf33WfWhGIOPJ8tkWDJdNWOeRj7PoOZKUTywYCa9ojKP0XljETMPm/0+sn5tSE9/nnrHe3+HxSa3a1mGkUcAAAAAElFTkSuQmCC'
                                alt='BNB'
                                className='token-icon-small'
                              />
                              <img
                                src='data:image/png;base64,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'
                                alt='USDT'
                                className='token-icon-small'
                              />
                              <span>BNB/USDT</span>
                            </div>
                            <div className='pair-price'>{/**/} $853.79 USDT</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/**/}
            {/**/}
          </div>
        </div>
      </div>
    </div>
  );
}
