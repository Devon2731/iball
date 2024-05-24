import Image from 'next/image';
import { HeroWords } from './hero-text/index';
const Hero = () => {
  return (
    <div className="w-screen">
      <Image
        src="/no-lines-hero.png"
        height={400}
        width={400}
        quality={100}
        alt="basketball hero image"
        className="lg:h-88 relative mb-24 mt-1 w-screen"
      />
      <HeroWords />
    </div>
  );
};

export default Hero;
