"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { poster } from "./constant"; // Import the poster from constants

export default function Home() {
  const [isBananaCursor, setIsBananaCursor] = useState(false);

  useEffect(() => {
    if (isBananaCursor) {
      document.body.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🍌</text></svg>") 16 0, auto`;
      const timer = setTimeout(() => {
        setIsBananaCursor(false);
        document.body.style.cursor = 'default';
      }, 60000); // 60 seconds
      return () => clearTimeout(timer);
    }
  }, [isBananaCursor]);

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-comic-sans)] bg-gradient-to-br from-puke-green via-neon-pink to-radioactive-yellow overflow-hidden">
      <header className="text-center mb-12 relative">
        <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg animate-bounce">WTFathon</h1>
        <p className="text-xl text-white animate-spin">The hackathon that made you question reality</p>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div key={`float-emoji-${i}`} className="absolute text-6xl animate-float" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}>
              {['🤪', '🤯', '👽', '🦄', '🌈', '🍕', '🤖'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      </header>

      <main className="max-w-4xl mx-auto relative">
        <section className="bg-white/80 rounded-lg p-6 mb-12 transform skew-y-3 hover:skew-y-0 transition-transform">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">What in the name of Cthulhu happened here?</h2>
          <p className="text-green-500">On a day when the planets aligned and common sense took a vacation, a bunch of sleep-deprived nerds in Ahmedabad decided to create digital abominations. Behold the results of their caffeine-fueled madness!</p>
        </section>

        {/* Past Event Showcase Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Past Madness</h2>
          <div className="bg-white/80 rounded-lg p-4 transform hover:scale-105 transition-transform shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={'/poster.jpeg'}
                  alt="WTFathon Poster"
                  width={50}
                  height={75}
                  className="rounded-lg shadow-md mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-purple-600">WTFathon 2023</h3>
                  <p className="text-green-500 text-sm">🗓️ 01/09/2023</p>
                </div>
              </div>
              <Link href="/projects" className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold hover:bg-yellow-300 transform hover:scale-110 transition-transform inline-block">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center">
          <button
            type="button"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full text-xl font-bold hover:bg-yellow-300 transform hover:scale-110 transition-transform animate-pulse relative overflow-hidden"
            onClick={() => {
              setIsBananaCursor(true);
              alert("You were warned! Now your cursor is a banana for the next minute. Enjoy!");
            }}
          >
            Click me for a surprise! (Don't do it)
            <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              🍌🍌🍌
            </span>
          </button>
        </div>

        <div className="mt-12 bg-white/80 p-6 rounded-lg transform -rotate-1 hover:rotate-1 transition-transform">
          <h3 className="text-2xl font-bold mb-4 text-red-500">Random WTF Generator</h3>
          <p className="text-blue-600 mb-4">Need inspiration for your next absurd project? We've got you covered!</p>
          <div className="bg-gray-200 p-4 rounded-lg text-center relative">
            <p className="text-xl font-bold text-purple-700">
              {`A ${['quantum', 'AI-powered', 'blockchain', 'VR', 'time-traveling', 'interdimensional'][Math.floor(Math.random() * 6)]} 
              ${['toaster', 'banana peeler', 'sock sorter', 'toilet paper dispenser', 'unicorn groomer', 'meme generator'][Math.floor(Math.random() * 6)]} 
              that ${['predicts the stock market', 'talks to ghosts', 'brews coffee', 'writes poetry', 'solves world hunger', 'turns water into wine'][Math.floor(Math.random() * 6)]}`}
            </p>
            <div className="absolute top-2 right-2 animate-spin">🌀</div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-white animate-pulse">
        <p>Documentation of the fever dreams at <a href="https://lu.ma/tj6odp5b" className="underline text-yellow-300 hover:text-red-500">WTFathon</a></p>
        <p className="mt-2 text-sm">Disclaimer: This site may cause uncontrollable laughter, temporary insanity, or a sudden urge to create useless inventions. Proceed at your own risk.</p>
        <p className="mt-2 text-xs animate-bounce">Side effects may include spontaneous dance parties and an irrational fear of normal websites.</p>
      </footer>

      <div className="fixed bottom-4 right-4 animate-bounce">
        <div className="text-6xl animate-spin hover:animate-bounce">
          🤪
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
