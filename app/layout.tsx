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
  metadataBase: new URL("https://qiskitfallfest-pnc2026.vercel.app"),
  title: "Qiskit Fall Fest PNC 2026",
  description: "Beginner-friendly quantum computing event hosted at Prithvi Narayan Campus, Pokhara. Nov 25 – Dec 2, 2026.",
  openGraph: {
    title: "Qiskit Fall Fest PNC 2026",
    description: "Join us for a quantum computing event at Prithvi Narayan Campus, Pokhara. Nov 25 – Dec 2, 2026.",
    url: "https://qiskitfallfest-pnc2026.vercel.app",
    siteName: "Qiskit Fall Fest PNC 2026",
    images: [{ url: "/images/Badge_01.svg", width: 128, height: 128, alt: "Qiskit Fall Fest PNC 2026 Badge" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Qiskit Fall Fest PNC 2026",
    description: "Quantum computing event at Prithvi Narayan Campus, Pokhara. Nov 25 – Dec 2, 2026.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
