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
      <div className="min-h-screen bg-black bg-opacity-70 p-8">
        <h1 className="text-6xl font-bold mb-8 text-center text-white animate-float">
          Behold, the Abominations!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${index}`} key={project.name}>
              <div className="bg-white/80 p-6 rounded-lg transform transition-all duration-300 cursor-pointer hover:scale-105 hover:-rotate-1 hover:shadow-xl">
                <div className="w-full h-48 rounded-lg mb-4 flex justify-center items-center text-6xl bg-gradient-to-br from-blue-400 to-purple-500 animate-gradient">
                  {getProjectEmoji(project)}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-purple-600">{project.name}</h2>
                <p className="text-green-500 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.people.map((person) => (
                    <Image
                      key={person}
                      src={people[person as keyof typeof people]}
                      alt={`Team member ${person}`}
                      width={40}
                      height={40}
                      className="rounded-full hover:animate-wiggle"
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-12 text-center text-white">
          <p className="animate-float">Warning: Viewing these projects may cause spontaneous creativity and uncontrollable giggles.</p>
          <p className="mt-2 text-sm animate-float" style={{animationDelay: '0.5s'}}>Side effects may include a sudden urge to build useless inventions and question reality.</p>
        </footer>

        {/* Group photos carousel */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Group Photos</h2>
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
            className="w-full max-w-3xl mx-auto"
          >
            {group_photo.map((photo, index) => (
              <SwiperSlide key={photo}>
                <Image 
                  src={photo} 
                  alt={`Group photo ${index + 1}`} 
                  width={800} 
                  height={600} 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* More Photos button */}
          <div className="mt-8 text-center">
            <a 
              href="https://photos.app.goo.gl/DFWB8B6vFBcBxiE57" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-xl font-bold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              More Photos 📸
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
