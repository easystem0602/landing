import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  metadataBase: new URL("https://www.easystem.kr"),
  alternates : { canonical : "/"},
  robots : { index:true, follow:true },
  title: "EAsystem | 항공우주 구조설계·해석·시험지원 엔지니어링",
  description:
  "발사체·항공 구조설계/해석, 3D 전산설계·도면, 시험지원 및 시험장비 개발까지. 근거 기반 검증으로 미션 성공을 돕는 EAsystem.",
  openGraph: {
    title: "EAsystem | 항공우주 구조설계·해석·시험지원 엔지니어링",
    description:
    "발사체·항공 구조설계/해석, 3D 전산설계·도면, 시험지원 및 시험장비 개발까지. 근거 기반 검증으로 미션 성공을 돕는 EAsystem.",
    url : 'https://www.easystem.kr',
    images: [
      {
        url: 'images/ea_ogimage.webp.webp',
        width: 1200,
        height: 630,
        alt: 'EAsystem - 항공우주 구조설계·해석·시험지원 엔지니어링',
      },
    ],
    type: 'website',
    siteName: 'EAsystem',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EAsystem | 항공우주 구조설계·해석·시험지원 엔지니어링",
    description:
    "발사체·항공 구조설계/해석, 3D 전산설계·도면, 시험지원 및 시험장비 개발까지. 근거 기반 검증으로 미션 성공을 돕는 EAsystem.",
    images: ['images/ea_ogimage.webp.webp'],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", type: "image/x-icon" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/images/site.webmanifest",
  other:{
    'color-scheme': 'only light',
  }
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
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
