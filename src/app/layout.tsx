import './globals.css'
import type { Metadata } from "next";
import localFont from "next/font/local";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EmojiButton from './EmojiButton';

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative transition-all duration-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white`}
      >
        {children}
        <footer className="mt-8 sm:mt-12 text-center py-4 px-2 rounded-t-lg">
          <p className="text-sm sm:text-base mb-2">Documentation of the fever dreams at <a href="https://lu.ma/tj6odp5b" className="underline hover:text-yellow-300 transition-colors">WTFathon</a></p>
          <p className="text-xs sm:text-sm mb-2">Disclaimer: This site may cause uncontrollable laughter, temporary insanity, or a sudden urge to create useless inventions. Proceed at your own risk.</p>
          <p className="text-xs animate-bounce mb-2">Side effects may include spontaneous dance parties and an irrational fear of normal websites.</p>
          <p className="text-xs italic">Absolutely, positively this site is NOT created by AI.</p>
        </footer>
      </body>
      <div id="emoji-button-container" className="fixed bottom-4 right-4 z-[10000]">
        <EmojiButton />
      </div>
    </html>
  );
}
