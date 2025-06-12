import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Şükrü Kemük - Software Developer",
  description: "I showcase my mobile and web development projects on my personal website. Explore my projects developed with React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Şükrü Kemük", "Software Developer", "Web Developer", "Mobile Developer", "React", "Next.js", "TypeScript", "Flutter", "Firebase"],
  authors: [{ name: "Şükrü Kemük" }],
  creator: "Şükrü Kemük",
  publisher: "Şükrü Kemük",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sukrukemuk.com",
    title: "Şükrü Kemük - Software Developer",
    description: "I showcase my mobile and web development projects on my personal website.",
    siteName: "Şükrü Kemük - Software Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Şükrü Kemük - Software Developer",
    description: "I showcase my mobile and web development projects on my personal website.",
    creator: "@sukrukemuk",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console doğrulama kodunuzu buraya ekleyin
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-16">
        {children}
        </div>
      </body>
    </html>
  );
}
