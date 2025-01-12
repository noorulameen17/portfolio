import { Inter } from 'next/font/google';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import './globals.css';
import { CustomThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Noorul Ameen Portfolio',
  description: 'Portfolio of Noorul Ameen, a graphic designer proficient in Canva and an aspiring software engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  );
}