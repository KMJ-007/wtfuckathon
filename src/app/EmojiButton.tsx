'use client';

import { useState, useEffect } from 'react';

const baseStyle = 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-sans';

const styleCombos = [
  {
    bgGradient: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    textColor: 'text-white',
    fontStyle: 'font-serif',
    transform: 'rotate-1',
    animation: 'animate-pulse'
  },
  {
    bgGradient: 'bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600',
    textColor: 'text-yellow-300',
    fontStyle: 'font-mono',
    transform: 'rotate-2',
    animation: 'animate-bounce'
  },
  {
    bgGradient: 'bg-gradient-to-bl from-red-500 via-yellow-500 to-green-500',
    textColor: 'text-blue-200',
    fontStyle: 'font-sans',
    transform: '-rotate-3',
    animation: 'animate-spin-slow'
  },
  {
    bgGradient: 'bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500',
    textColor: 'text-green-300',
    fontStyle: 'font-comic-sans',
    transform: 'skew-x-3',
    animation: 'animate-wiggle'
  },
  // New style combinations
  {
    bgGradient: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
    textColor: 'text-blue-900',
    fontStyle: 'font-mono',
    transform: 'scale-105 rotate-6',
    animation: 'animate-spin-fast'
  },
  {
    bgGradient: 'bg-gradient-to-bl from-green-300 via-yellow-300 to-pink-300',
    textColor: 'text-purple-800',
    fontStyle: 'font-comic-sans',
    transform: 'skew-y-3 -rotate-2',
    animation: 'animate-bounce'
  },
  {
    bgGradient: 'bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900',
    textColor: 'text-yellow-300',
    fontStyle: 'font-serif',
    transform: 'scale-95 -rotate-1',
    animation: 'animate-pulse'
  },
  {
    bgGradient: 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400',
    textColor: 'text-gray-800',
    fontStyle: 'font-mono',
    transform: 'skew-x-6 rotate-3',
    animation: 'animate-wiggle'
  },
  {
    bgGradient: 'bg-gradient-to-r from-green-200 via-green-400 to-purple-700',
    textColor: 'text-yellow-200',
    fontStyle: 'font-comic-sans',
    transform: 'scale-110 -rotate-3',
    animation: 'animate-spin-faster'
  },
  {
    bgGradient: 'bg-gradient-to-bl from-red-900 via-pink-600 to-orange-400',
    textColor: 'text-green-300',
    fontStyle: 'font-serif',
    transform: 'skew-y-6 rotate-1',
    animation: 'animate-bounce'
  },
  {
    bgGradient: 'bg-gradient-to-tl from-yellow-200 via-green-200 to-pink-200',
    textColor: 'text-purple-900',
    fontStyle: 'font-serif',
    transform: 'skew-x-3 rotate-1',
    animation: 'animate-pulse'
  },
  {
    bgGradient: 'bg-gradient-to-br from-blue-400 via-red-400 to-yellow-400',
    textColor: 'text-indigo-900',
    fontStyle: 'font-mono',
    transform: 'scale-105 -rotate-2',
    animation: 'animate-spin-slow'
  },
  {
    bgGradient: 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-400',
    textColor: 'text-yellow-200',
    fontStyle: 'font-comic-sans',
    transform: 'skew-y-3 scale-95',
    animation: 'animate-wiggle'
  },
  {
    bgGradient: 'bg-gradient-to-bl from-green-500 via-blue-500 to-purple-500',
    textColor: 'text-orange-300',
    fontStyle: 'font-serif',
    transform: 'rotate-3 scale-110',
    animation: 'animate-bounce'
  },
  {
    bgGradient: 'bg-gradient-to-tr from-red-300 via-yellow-300 to-green-300',
    textColor: 'text-blue-800',
    fontStyle: 'font-mono',
    transform: 'skew-x-6 -rotate-1',
    animation: 'animate-spin-faster'
  },
  {
    bgGradient: 'bg-gradient-to-l from-indigo-300 via-purple-300 to-pink-300',
    textColor: 'text-green-900',
    fontStyle: 'font-comic-sans',
    transform: 'scale-90 rotate-6',
    animation: 'animate-pulse'
  }
];

const funnyTexts = [
  "Oh no, what have you done?!",
  "Prepare for chaos!",
  "Warning: Sanity not guaranteed",
  "Entering the twilight zone...",
  "Hold onto your pixels!",
  "Unleashing digital mayhem!",
  "Your screen may never be the same!",
  "Brace for a visual rollercoaster!",
  "Warning: Extreme silliness ahead!",
  "Initiating nonsense protocol...",
  "Caution: Logic does not apply here",
  "Abandoning all sense of normalcy!",
  "Prepare your eyeballs for confusion!",
  "Embracing the absurd in 3... 2... 1...",
  "Warning: May cause uncontrollable giggles",
  "Buckle up for a wild style ride!",
  "Defying the laws of web design!",
  "Caution: May induce temporary insanity",
  "Unleashing a tornado of whimsy!",
  "Brace yourself for digital delirium!"
];

export default function EmojiButton() {
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [dimension, setDimension] = useState(0);
  const [funnyText, setFunnyText] = useState("");

  useEffect(() => {
    if (isRandomizing) {
      const interval = setInterval(() => {
        setDimension((prev) => (prev + 1) % 3);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isRandomizing]);

  const handleEmojiClick = () => {
    setIsRandomizing(true);
    setFunnyText(funnyTexts[Math.floor(Math.random() * funnyTexts.length)]);
    document.body.classList.add('dimension-shift');
    
    // Reset to base style
    document.body.className = baseStyle;
    
    // Apply new random style after a short delay
    setTimeout(() => {
      const randomCombo = styleCombos[Math.floor(Math.random() * styleCombos.length)];
      document.body.className += ` ${randomCombo.bgGradient} ${randomCombo.textColor} ${randomCombo.fontStyle} ${randomCombo.transform} ${randomCombo.animation} transition-all duration-500`;
    }, 100);

    setTimeout(() => {
      setIsRandomizing(false);
      document.body.classList.remove('dimension-shift');
    }, 3000);
  };

  const dimensionEmojis = ['🌌', '🪐', '🌠'];

  return (
    <>
      <button 
        className="cursor-pointer group bg-transparent border-none p-0 text-5xl animate-spin hover:animate-spin transition-all duration-300"
        onClick={handleEmojiClick}
        aria-label="Randomize style"
        type="button"
      >
        🤪
      </button>
      {isRandomizing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-[9999] animate-pulse transition-all duration-300">
          <div className="text-white text-4xl animate-bounce text-center">
            <p className="mb-4">{funnyText}</p>
            <span className="inline-block ml-2 text-6xl animate-ping">
              {dimensionEmojis[dimension]}
            </span>
          </div>
        </div>
      )}
    </>
  );
}