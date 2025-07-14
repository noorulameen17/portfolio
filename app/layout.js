"use client";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import LenisProvider from "../components/LenisProvider";
import Navbar from "../components/navbar";
import { CustomThemeProvider } from "../components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <LenisProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="AmeenHacks" />
          {/* HTML Meta Tags */}
          <title>
            Noorul Ameen | Software Engineer & Frontend Developer Portfolio
          </title>
          <meta
            name="description"
            content="Official portfolio of Noorul Ameen, a Software Engineer & Frontend Developer skilled in React, Next.js, JavaScript, Supabase, Material-UI, Magic UI, Motion, Clerk, and more. Explore projects, graphic designs, and expertise in building modern web applications."
          />
          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://noorulameen.me/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Noorul Ameen | Software Engineer & Frontend Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Official portfolio of Noorul Ameen, a Software Engineer & Frontend Developer skilled in React, Next.js, JavaScript, Supabase, Material-UI, Magic UI, Motion, Clerk, and more. Explore projects, graphic designs, and expertise in building modern web applications."
          />
          <meta
            property="og:image"
            content="https://opengraph.b-cdn.net/production/images/1f3ba719-b540-45c7-8fc9-bcced213e8a1.jpg?token=V7ttWhDLLzjy_odWi4nSL1Lru-TQ2wI7NWruDh8-n3k&height=630&width=1200&expires=33287136089"
          />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="noorulameen.me" />
          <meta property="twitter:url" content="https://noorulameen.me/" />
          <meta
            name="twitter:title"
            content="Noorul Ameen | Software Engineer & Frontend Developer Portfolio"
          />
          <meta
            name="twitter:description"
            content="Official portfolio of Noorul Ameen, a Software Engineer & Frontend Developer skilled in React, Next.js, JavaScript, Supabase, Material-UI, Magic UI, Motion, Clerk, and more. Explore projects, graphic designs, and expertise in building modern web applications."
          />
          <meta
            name="twitter:image"
            content="https://opengraph.b-cdn.net/production/images/1f3ba719-b540-45c7-8fc9-bcced213e8a1.jpg?token=V7ttWhDLLzjy_odWi4nSL1Lru-TQ2wI7NWruDh8-n3k&height=630&width=1200&expires=33287136089"
          />
          <meta
            name="keywords"
            content="noorul, noorul ameen, ameenhacks, software engineer, frontend developer, portfolio, react, nextjs"
          />
          <meta
            property="og:title"
            content="Noorul Ameen | Software Engineer & Frontend Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Official portfolio of Noorul Ameen, a Software Engineer & Frontend Developer skilled in React, Next.js, JavaScript, and more."
          />
          <meta
            property="og:url"
            content="https://portfolio-ameenition.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Noorul Ameen | Software Engineer & Frontend Developer Portfolio"
          />
          <meta
            name="twitter:description"
            content="Official portfolio of Noorul Ameen, a Software Engineer & Frontend Developer skilled in React, Next.js, JavaScript, and more."
          />
          <meta name="twitter:image" content="/og-image.png" />
          {/* Add structured data below */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Noorul Ameen",
                alternateName: "AmeenHacks",
                url: "https://portfolio-ameenition.vercel.app/",
                jobTitle: "Software Engineer, Frontend Developer",
                sameAs: [
                  "https://github.com/noorulameen17",
                  "https://www.linkedin.com/in/noorulameen17",
                ],
              }),
            }}
          />
        </head>
        <body className={inter.className}>
          <CustomThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">
              {children}
              <Analytics />
            </main>
            <Footer />
          </CustomThemeProvider>
        </body>
      </html>
    </LenisProvider>
  );
}
