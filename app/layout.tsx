import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elliot Kaiser | Mechanical Engineering Portfolio",
  description:
    "Portfolio of Elliot Kaiser — Mechanical Engineering student at the University of Toronto, with experience in embedded systems, CAD, and software development.",
  openGraph: {
    title: "Elliot Kaiser | Mechanical Engineering Portfolio",
    description:
      "Mechanical Engineering student at UofT with hands-on experience in embedded systems, CAD design, and full-stack software development.",
    url: "https://elliotkaiser.dev",
    siteName: "Elliot Kaiser",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Elliot Kaiser | Mechanical Engineering Portfolio",
    description:
      "Mechanical Engineering student at UofT with hands-on experience in embedded systems, CAD design, and full-stack software development.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
