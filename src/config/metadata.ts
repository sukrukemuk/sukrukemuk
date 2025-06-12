import { Metadata, Viewport } from "next";

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
    url: process.env.NEXT_PUBLIC_SITE_URL,
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}; 