import { Inter } from 'next/font/google';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import './globals.css';
import { CustomThemeProvider } from "../components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Noorul Ameen | Software Engineer & Frontend Developer Portfolio",
  description:
    "Official portfolio of Noorul Ameen, a Software Engineer & Frontend Developer skilled in React, Next.js, JavaScript, Supabase, Material-UI, Magic UI, Motion, Clerk, and more. Explore projects, graphic designs, and expertise in building modern web applications.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="light" 
          enableSystem={false} 
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}<Analytics/></main>
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  );
}