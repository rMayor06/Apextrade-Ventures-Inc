import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './header'
import Footer from './footer'
import Container from './container'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apextrade Ventures Inc.",
  description: "Apextrade Ventures Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$inter.className}
      bg-zinc-100 text-zinc-900`}>
            <Header/>
            {children}
            <Footer />
      </body>
    </html>
  );
}
