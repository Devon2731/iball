'use client';
// import { Suspense } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { HeroWords } from './hero-text/index';

const Hero = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Parallax
        speed={-15}
        // className="mb-10 mt-1 aspect-[2/1] sm:mb-12 sm:aspect-[3/1]"
      >
        <HeroWords />

        <video className="-z-10 h-96 w-full object-top sm:mb-24" autoPlay muted loop>
          <source src="/iball.mp4" type="video/mp4"></source>
        </video>
      </Parallax>
    </div>
  );
};

export default Hero;
