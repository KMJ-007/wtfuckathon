"use client";
import Link from 'next/link';
import { projects, people, group_photo, poster } from "../constant";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Project {
  name: string;
  description: string;
  videos?: string[];
  people: string[];
}

export default function ProjectsPage() {
  const getProjectEmoji = (project: Project): string => {
    const emojiMap: Record<string, string> = {
      pushups: '💪',
      weighing: '⚖️',
      gaming: '🎮',
      magician: '🎩',
      noodle: '🍜',
      smile: '😊',
      house: '🏠',
      meme: '😂',
      bot: '🤖'
    };
    const keyword = Object.keys(emojiMap).find(key => project.name.toLowerCase().includes(key));
    return keyword ? emojiMap[keyword] : '🔮';
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" >
      <div className="min-h-screen bg-black bg-opacity-70 p-4 sm:p-8">
        <header className="mb-6 sm:mb-8 flex justify-between items-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white animate-float">
            Behold, the Abominations!
          </h1>
          <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
            Back to Home
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${index}`} key={project.name}>
              <div className="bg-white/80 p-4 sm:p-6 rounded-lg transform transition-all duration-300 cursor-pointer hover:scale-105 hover:-rotate-1 hover:shadow-xl">
                <div className="w-full h-32 sm:h-48 rounded-lg mb-4 flex justify-center items-center text-4xl sm:text-6xl bg-gradient-to-br from-blue-400 to-purple-500 animate-gradient">
                  {getProjectEmoji(project)}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-purple-600">{project.name}</h2>
                <p className="text-sm sm:text-base text-green-500 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.people.map((person) => (
                    <Image
                      key={person}
                      src={people[person as keyof typeof people]}
                      alt={`Team member ${person}`}
                      width={32}
                      height={32}
                      className="rounded-full hover:animate-wiggle"
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-8 sm:mt-12 text-center text-white">
          <p className="text-sm sm:text-base animate-float">Warning: Viewing these projects may cause spontaneous creativity and uncontrollable giggles.</p>
          <p className="mt-2 text-xs sm:text-sm animate-float" style={{animationDelay: '0.5s'}}>Side effects may include a sudden urge to build useless inventions and question reality.</p>
        </footer>

        {/* Group photos carousel */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">Group Photos</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full max-w-xl sm:max-w-3xl mx-auto"
          >
            {group_photo.map((photo, index) => (
              <SwiperSlide key={photo}>
                <div className="relative w-full pt-[56.25%]">
                  <Image 
                    src={photo} 
                    alt={`Group photo ${index + 1}`} 
                    fill
                    className="rounded-lg shadow-lg object-contain" 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* More Photos button */}
          <div className="mt-6 sm:mt-8 text-center">
            <a 
              href="https://photos.app.goo.gl/DFWB8B6vFBcBxiE57" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl font-bold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              More Photos 📸
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
