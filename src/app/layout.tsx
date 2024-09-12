import './globals.css'
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  title: "WTFathon - India's First Stupidathon",
  description: "Experience the inaugural stupidathon of India! WTFathon brings you the most absurd, hilarious, and mind-bending tech projects ever created. Witness the birth of a new era in hackathons!",
  keywords: ["stupidathon", "India", "first", "hackathon", "absurd", "innovation", "tech humor", "WTFathon", "bizarre projects"],
  openGraph: {
    title: "WTFathon - India's First Stupidathon",
    description: "Witness the birth of India's first stupidathon! Absurd innovations and hilarious tech projects await.",
    images: [
      {
        url: "https://cloud-923vc3tyf-hack-club-bot.vercel.app/3whatsapp_image_2024-09-01_at_18.33.20.jpeg",
        width: 1200,
        height: 630,
        alt: "WTFathon Poster - India's First Stupidathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WTFathon - India's First Stupidathon",
    description: "India's inaugural stupidathon is here! Discover the most absurd and hilarious tech projects ever created.",
    images: ["https://cloud-923vc3tyf-hack-club-bot.vercel.app/3whatsapp_image_2024-09-01_at_18.33.20.jpeg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
        <div className="fixed bottom-4 right-4 animate-bounce z-50">
          <div className="text-6xl animate-spin hover:animate-bounce">
            🤪
          </div>
        </div>
      </body>
    </html>
  );
}
