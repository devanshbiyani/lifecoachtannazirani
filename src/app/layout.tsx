import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Tannaz Irani - Life Coach and Mentor",
  description: "Professional life and mindset coaching, relationship counselling, parenting coaching, Bollywood career mentorship, and motivational speaking services in India.",
  keywords: ["life coaching", "relationship counseling", "parenting coaching", "Bollywood mentorship", "motivational speaker", "Tannaz Irani", "NLP coaching", "India"],
  robots: "index, follow",
  openGraph: {
    title: "Tannaz Irani - Life Coach and Mentor",
    description: "Unlock your potential with professional coaching services in India.",
    images: "/images/og-image.jpg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
