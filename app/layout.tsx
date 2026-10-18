import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tirtha Rudra Shettigar | ECE Student | VLSI, Embedded Systems & AI",
  description:
    "Explore the engineering portfolio of Tirtha Rudra Shettigar, an Electronics and Communication Engineering student working across digital design, VLSI, embedded systems, IoT, and AI/ML.",
  keywords: [
    "Tirtha Rudra Shettigar",
    "Tirtha Shettigar",
    "VLSI",
    "RTL Design",
    "Verilog HDL",
    "Embedded Systems",
    "Electronics and Communication Engineering",
    "IoT",
    "AI/ML",
    "Alva's Institute of Engineering & Technology",
    "Hardware Engineering",
  ],
  authors: [{ name: "Tirtha Rudra Shettigar" }],
  creator: "Tirtha Rudra Shettigar",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tirtha Rudra Shettigar | Engineering Portfolio",
    description:
      "Electronics & Communication Engineering student passionate about digital design, semiconductor engineering, embedded systems, IoT, and AI-powered solutions.",
    type: "website",
    locale: "en_US",
    url: "https://tirthashettigar.vercel.app",
    siteName: "Tirtha Rudra Shettigar Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen selection:bg-blue-600/15 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
