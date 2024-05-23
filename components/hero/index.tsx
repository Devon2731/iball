import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <Image
        src="/hero.png"
        height={400}
        width={500}
        quality={100}
        alt="basketball hero image"
        className="lg:object-fit min-w-full"
      />
    </>
  );
};

export default Hero;
