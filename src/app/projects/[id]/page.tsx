"use client";
import { useState, useRef, useEffect } from "react";
import { projects, people } from "../../constant";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[parseInt(params.id)];
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current[activeIndex]?.play();
  }, [activeIndex]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-puke-green via-neon-pink to-radioactive-yellow">
      <Link href="/projects" className="text-white mb-4 inline-block hover:underline">&larr; Back to Abominations</Link>
      <div className="bg-white/80 p-4 md:p-8 rounded-lg shadow-lg backdrop-blur-md max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">{project.name}</h1>
        <p className="text-purple-600 mb-6 text-xl font-bold italic">{project.description}</p>
        
        {project.videos && project.videos.length > 0 && (
          <div className="mb-8 relative overflow-hidden rounded-lg shadow-2xl aspect-w-16 aspect-h-9">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full h-full"
            >
              {project.videos.map((video, index) => (
                <SwiperSlide key={`video-${index}`}>
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={video}
                      controls
                      autoPlay={index === activeIndex}
                      loop
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      poster="/placeholder-poster.jpg"
                    >
                      <track kind="captions" />
                    </video>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4 text-purple-600">Masterminds Behind This Madness</h2>
        <div className="flex flex-wrap gap-4 md:gap-6 mb-6 justify-center">
          {project.people.map((person) => (
            <div key={person} className="flex flex-col items-center group">
              <div className="relative overflow-hidden rounded-full w-16 h-16 md:w-24 md:h-24 mb-2">
                <Image
                  src={people[person as keyof typeof people]}
                  alt={`Team member ${person}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}