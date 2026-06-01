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

export const metadata = {
  title: "The Social Poblacion",
  description:
    "Cocktails, beers and nightlife in the heart of Poblacion.",
  openGraph: {
  title: "The Social Poblacion | Cocktails & Nightlife in Makati",
  description:
    "Cocktails, beers and nightlife in the heart of Poblacion.",
  images: ["/restaurant-hero.jpg"],
},
icons: {
  icon: "/favicon.ico",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
