import type { Metadata } from "next";
import { Bevan, Sanchez, Oswald } from "next/font/google";
import Header from "@/components/functions/navigation/Header";
import { Footer } from "@/components/functions/navigation/Footer";
import { Providers } from "@/components/functions/security/Providers";
import "./globals.css";

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
        <noscript>
          <meta httpEquiv="refresh" content="0; url=/index.html" />
        </noscript>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8 max-w-4xl">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}