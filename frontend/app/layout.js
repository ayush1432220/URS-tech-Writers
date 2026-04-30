import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "UrsWriter",
    template: "%s | UrsWriter",
  },
  description: "Scalable content-writing SaaS frontend built with Next.js App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-slate-50 text-slate-900 antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
