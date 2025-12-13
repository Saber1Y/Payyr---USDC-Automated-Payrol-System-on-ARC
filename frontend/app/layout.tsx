import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { WagmiProviders } from "@/config/WagmiProviders";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USDC Payroll System - Arc Network",
  description: "Modern payroll management system built on Arc Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased bg-gray-50`}>
        <WagmiProviders>
          <Providers>
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex flex-1 flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#114277]">
                  {children}
                </main>
              </div>
            </div>
          </Providers>
        </WagmiProviders>
      </body>
    </html>
  );
}
