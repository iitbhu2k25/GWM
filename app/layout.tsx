import { ReactNode } from "react";
import { Inter } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "GWM - Groundwater Monitoring & Analysis Portal",
  description: "Advanced groundwater monitoring, analysis and management portal. Real-time data on groundwater potential, quality, contamination, vulnerability and depth measurements.",
  keywords: ["Groundwater", "Water Monitoring", "Aquifer Analysis", "Water Quality", "Groundwater Depth", "Contamination Monitoring", "Hydrogeology", "Water Resources"],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {/* Top Government Links Bar */}
        <TopBar />

        {/* Header with Logos */}
        {/* <Header /> */}

        {/* Main Navigation */}
        <MainNav />

        {/* Main Content */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
