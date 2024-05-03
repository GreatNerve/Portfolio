import { NavBar } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import { name, theme_color } from '@/lib/constants';
import { templateMetadata } from "@/lib/templateMetadata";
import Providers from "@/Providers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer/Footer"))


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: theme_color,
}




export const metadata: Metadata = {
  title: {
    default: name,
    template: "%s | Dheeraj Sharma",
  },
  ...templateMetadata,
  
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main className=" my-0 min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
