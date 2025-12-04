"use client";

import { Button } from "@/components/ui/button";
import { Wallet, LogOut, User } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";
import { WalletConnect } from "./WalletConnect";

export function Navbar() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Get the user's wallet address
  const walletAddress = user?.wallet?.address;

  const handleConnect = () => {
    login();
  };

  const handleDisconnect = () => {
    logout();
  };

  return (
    <div className="border-b bg-white border-gray-200">
      <div className="flex h-16 items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Arc Network Payroll
          </h1>
        </div>
        <WalletConnect />
      </div>
    </div>
  );
}
