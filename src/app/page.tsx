"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { poster } from "./constant";

export default function Home() {
  const [isBananaCursor, setIsBananaCursor] = useState(false);
  const [randomIdea, setRandomIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandomIdea = () => {
    const adjectives = [
      'quantum', 'AI-powered', 'blockchain', 'VR', 'time-traveling', 'interdimensional',
      'self-aware', 'telepathic', 'shape-shifting', 'quantum-entangled', 'meme-generating',
      'sentient', 'holographic', 'nano-tech', 'psychic', 'gravity-defying'
    ];
    const objects = [
      'toaster', 'banana peeler', 'sock sorter', 'toilet paper dispenser', 'unicorn groomer', 'meme generator',
      'rubber duck', 'coffee mug', 'doorknob', 'keyboard', 'plant pot', 'umbrella',
      'fidget spinner', 'lava lamp', 'disco ball', 'snow globe', 'paperclip', 'stapler'
    ];
    const actions = [
      'predicts the stock market', 'talks to ghosts', 'brews coffee', 'writes poetry', 'solves world hunger', 'turns water into wine',
      'translates cat meows', 'composes dubstep music', 'folds laundry perfectly', 'tells dad jokes',
      'predicts meme trends', 'generates clickbait headlines', 'creates conspiracy theories',
      'interprets dreams', 'summons pizza', 'repels mosquitoes with puns'
    ];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    return `A ${randomAdjective} ${randomObject} that ${randomAction}`;
  };

  const handleGenerateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setRandomIdea(generateRandomIdea());
      setIsGenerating(false);
    }, 1500); // Adjust this delay as needed
  };

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

  useEffect(() => {
    setRandomIdea(generateRandomIdea());
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 pb-20 font-[family-name:var(--font-comic-sans)] bg-gradient-to-br from-puke-green via-neon-pink to-radioactive-yellow overflow-hidden">
      <header className="text-center mb-8 sm:mb-12 relative">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg animate-bounce">WTFathon</h1>
        <p className=" sm:text-xl text-white animate-spin">The hackathon that made you question reality</p>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={`float-emoji-${i}`} className="absolute text-4xl sm:text-6xl animate-float" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}>
              {['🤪', '🤯', '👽', '🦄', '🌈', '🍕', '🤖'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      </header>

      <main className="max-w-xl sm:max-w-4xl mx-auto relative">
        <section className="bg-white/80 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12 transform skew-y-3 hover:skew-y-0 transition-transform">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-purple-600">What in the name of Cthulhu happened here?</h2>
          <p className="text-sm sm:text-base text-green-500">On a day when the planets aligned and common sense took a vacation, a bunch of sleep-deprived nerds in Ahmedabad decided to create digital abominations. Behold the results of their caffeine-fueled madness!</p>
        </section>

        {/* Past Event Showcase Section */}
        <section className="mb-8 sm:mb-12 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">Past Madness</h2>
          <div className="bg-white/80 rounded-lg p-4 transform hover:scale-105 transition-transform shadow-lg w-64">
            <Link href="/projects">
              <div className="flex flex-col items-center">
                <Image
                  src={'/poster.jpeg'}
                  alt="WTFathon Poster"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-md mb-4"
                />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-purple-600">WTFathon 2024</h3>
                  <p className="text-xs sm:text-sm text-green-500">🗓 01/09</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <div className="mt-8 text-center">
          <button
            type="button"
            className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-bold hover:bg-yellow-300 transform hover:scale-110 transition-transform animate-pulse relative overflow-hidden"
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

        <div className="mt-8 sm:mt-12 bg-white/80 p-4 sm:p-6 rounded-lg transform -rotate-1 hover:rotate-1 transition-transform">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-red-500">Random WTF Generator</h3>
          <p className="text-sm sm:text-base text-blue-600 mb-4">Need inspiration for your next absurd project? We've got you covered!</p>
          <div
            className={`bg-gray-200 p-4 rounded-lg text-center relative cursor-pointer hover:bg-gray-300 transition-colors ${isGenerating ? 'animate-pulse' : ''}`}
            onClick={handleGenerateIdea}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleGenerateIdea();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Generate new random idea"
          >
            {isGenerating ? (
              <p className="text-lg sm:text-xl font-bold text-purple-700">Generating madness...</p>
            ) : (
              <p className="text-lg sm:text-xl font-bold text-purple-700">{randomIdea}</p>
            )}
            <div className={`absolute top-2 right-2 ${isGenerating ? 'animate-spin' : ''}`}>🌀</div>
          </div>
          <p className="text-xs sm:text-sm text-center mt-2 text-gray-600">Click to generate a new idea!</p>
        </div>
      </main>

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

