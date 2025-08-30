"use client";

import { useEffect, useRef, useState, useMemo } from "react";
// ⚡ tuỳ vào lib bạn xài wagmi hoặc viem, ví dụ:
import { useAccount, useDisconnect } from "wagmi";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [showDropdown, setShowDropdown] = useState(false);
  const walletContainer = useRef<HTMLDivElement>(null);

  // Format address
  const walletAddressFormatted = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (walletContainer.current && !walletContainer.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!isConnected) {
    return (
      <button
        className='px-4 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700'
        onClick={() => {
          // TODO: mở modal connect wallet (tích hợp wagmi / rainbowkit / reown appkit)
          alert("Open connect wallet modal");
        }}
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div
      ref={walletContainer}
      className='relative flex items-center'
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      {/* Hiển thị địa chỉ ví */}
      <div className='flex items-center gap-2 cursor-pointer' onClick={() => setShowDropdown((prev) => !prev)}>
        <span className='text-white text-sm font-medium border border-gray-700 px-3 py-1 rounded-full'>{walletAddressFormatted}</span>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className='absolute top-full right-0 mt-2 bg-black text-white rounded-lg shadow-lg p-4 w-56 animate-fadeIn z-50'>
          <div className='flex flex-col gap-3'>
            <p className='text-xs text-gray-400'>Connected Wallet</p>
            <button onClick={() => disconnect()} className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium'>
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
