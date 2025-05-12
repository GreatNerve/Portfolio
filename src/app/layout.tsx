import { NavBar } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import { name, theme_color } from '@/lib/constants';
import { templateMetadata } from "@/lib/templateMetadata";
import Providers from "@/Providers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Footer = dynamic(() => import("@/components/Footer/Footer"))
const PostHogPageView = dynamic(() => import('@/components/posthog/PostHogPageView'), {
  ssr: false,
})

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: theme_color,
}




export const metadata: Metadata = {
  title: {
    default: name,
    template: "%s | Dheeraj Sharma",
  },
  alternates: {
    canonical: "/",
  },
  ...templateMetadata,
  
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
 return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        <Providers>
          <PostHogPageView />
          <NavBar />
          <main className="min-h-[calc(100vh-4rem-1px)] flex flex-col">
            {children}
          </main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
