import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Chen | Portfolio",
  description: "Full-Stack Engineer with ~2.5 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative h-[6000px]`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbe2e3] via-[#dbd7fb] to-slate-100 animate-gradient -z-10"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
