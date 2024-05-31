'use client';
import { ParallaxBanner } from 'react-scroll-parallax';
import { HeroWords } from './hero-text/index';
const Hero = () => {
  return (
    <div
      className="w-screen"
      // style={{
      //   backgroundImage: `url('/iball-hero.svg')`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center'
      // }}
    >
      <HeroWords />
      {/* <Image
        src="/no-lines-hero.png"
        height={400}
        width={400}
        quality={100}
        alt="basketball hero image"
        className="lg:h-88 relative mb-24 mt-1 w-screen"
      /> */}
      <ParallaxBanner
        layers={[{ image: '/outside-hoop.png', speed: -15 }]}
        className="mb-10 mt-1 aspect-[2/1] sm:mb-12 sm:aspect-[3/1]"
      />
    </div>
  );
};

export default Hero;
