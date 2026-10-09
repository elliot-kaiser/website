import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
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
    url: "https://elliotkaiser.me",
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
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
