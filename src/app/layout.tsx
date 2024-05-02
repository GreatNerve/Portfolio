import { Footer, NavBar } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dheeraj Sharma | GreatNerve",
    template: "%s | Dheeraj Sharma",
  },
  description: "Hi, I'm Dheeraj Sharma, a Full Stack Developer.",
  keywords: "Dheeraj Sharma, Web Development, Software Development, Full Stack Development",
};

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
