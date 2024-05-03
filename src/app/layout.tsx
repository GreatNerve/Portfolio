import { Footer, NavBar } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'
import {name, short_name, description, theme_color,BASE_URL,logo,keywords, og_image} from '@/lib/constants'


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: theme_color,
}

export const templateMetadata: Metadata = {
  description: description,
  keywords: keywords,
  applicationName: name,
  creator: short_name,
  category: "Technology, Web Development",
  metadataBase : BASE_URL,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "assets/logo/favicon.ico",
    shortcut : logo,

    apple : logo,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: logo,
    }
  },
  openGraph: {
    title: {
      default: name,
      template: "%s | Dheeraj Sharma",
    },
    description: description,
    type: 'website',
    url: BASE_URL,
    images: [
      {
        url: og_image,
        width: 256,
        height: 256,
        alt: name,
      },
    ],
    },
  twitter: {
    card: "summary_large_image",
    title: {
      default: name,  
      template: "%s | Dheeraj Sharma",
    },
    description: description,
    creator: "@GreatNerve",
    images : {
      url: og_image,
      alt: name,
      height: 256,
      width: 256,
    }
  }
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
