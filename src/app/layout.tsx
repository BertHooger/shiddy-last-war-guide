import type { Metadata } from "next";
import { Bevan, Sanchez, Oswald } from "next/font/google";
import DynamicHeader from "@/components/functions/navigation/dynamic/DynamicHeader";
import DynamicFooter from "@/components/functions/navigation/dynamic/DynamicFooter";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

import ErrorBoundary from "@/components/functions/security/ErrorBoundary";
import Provider from "@/components/functions/security/SessionProvider";

const bevan = Bevan({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bevan",
});

const sanchez = Sanchez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sanchez",
});

const oswald = Oswald({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-oswald"
})

export const metadata: Metadata = {
  title: 'Shiddy Last War Guide',
  description: 'A siddy website for a guide about the game Last War.',
  keywords: [
    'last war',
    'gaming',
    'guide',
    'tips',
    'tricks',
    'guide',
    'last war game',
    'last war breaktrough',
    'breaktrough lvl 16'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bevan.variable} ${sanchez.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <Provider>
          <noscript>
            <meta httpEquiv="refresh" content="0; url=/index.html" />
          </noscript>
          <DynamicHeader />
          <ErrorBoundary>
            <main className="container flex mx-auto px-4 max-w-4xl py-8">
              {children}
            </main>
          </ErrorBoundary>
          <DynamicFooter />
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}