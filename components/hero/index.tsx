'use client';
import { ParallaxBanner } from 'react-scroll-parallax';
import { HeroWords } from './hero-text/index';

const Hero = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <HeroWords />

      <ParallaxBanner
        layers={[{ image: '/outside-hoop.png', speed: -15 }]}
        className="mb-10 mt-1 aspect-[2/1] sm:mb-12 sm:aspect-[3/1]"
      />
    </div>
  );
};

export default Hero;
