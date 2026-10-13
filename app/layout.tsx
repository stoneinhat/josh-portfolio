import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Joshua Tesch | Full-Stack Web Developer & AI Tooling";
const siteDescription =
  "Full-stack developer building WordPress sites, modern web apps, and AI tooling. Currently owning the Reading Horizons marketing website: performance, SEO, analytics, and automation.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joshua Tesch",
  url: "https://joshuatesch.dev",
  sameAs: [
    "https://github.com/stoneinhat",
    "https://www.linkedin.com/in/joshua-tesch-b10848100/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuatesch.dev"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "web developer",
    "full-stack",
    "joshua tesch",
    "next.js",
    "react",
    "wordpress",
    "shopify",
    "web development",
    "AI tooling",
    "technical SEO",
    "MCP",
  ],
  authors: [{ name: "Joshua Tesch" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://joshuatesch.dev",
    siteName: "Joshua Tesch Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedBackground />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "dark:bg-gray-800 dark:text-white dark:border-gray-700",
            style: {
              background: "#ffffff",
              color: "#1f2937",
              border: "1px solid #e5e7eb",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
