import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from "next";
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yearsOfExp = new Date().getFullYear() - new Date(2018, 1, 18).getFullYear();

export const metadata: Metadata = {
  title: {
    default: "Khumo Mogorosi",
    template: `%s | Khumo Mogorosi`
  },

  openGraph: {
    description: "An enthusiastic technical professional with a complete understanding of the entire software development lifecycle.",
    images: ['']
  },
  keywords: ["Khumo Mogorosi", "Software Developer", "Software Engineer", "Johannesburg, South Africa", `${yearsOfExp} of experience`],
  metadataBase: new URL('https://khumo-mog.vercel.app/')
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
