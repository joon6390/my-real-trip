import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "../commons/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "마이리얼트립: 퍼블리싱",
  description: "마이리얼트립 퍼블리싱",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "마이리얼트립: 퍼블리싱",
    description: "마이리얼트립 퍼블리싱",
    images: [
      {
        url: "https://my-real-trip-five.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "마이리얼트립 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "마이리얼트립: 퍼블리싱",
    description: "마이리얼트립 퍼블리싱",
    images: ["https://my-real-trip-five.vercel.app/images/logo.png"],
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
