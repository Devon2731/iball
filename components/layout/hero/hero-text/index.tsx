'use client';
import { TextGenerateEffect } from 'components/ui/text-generate-effect';

const The = `THE`;
const Lab = `LAB`;

export function HeroWords() {
  return (
    <div className="mb-3 flex items-center justify-center lg:left-1/3 lg:top-1/2">
      {/* <TextGenerateEffect words={words} className="" />
      <TextGenerateEffect words={thrLine} className="" /> */}
      <p className="kode-mono-lab ml-custom mt-2 text-balance pe-2 ps-2 text-3xl text-black md:text-5xl xl:pe-4 xl:text-7xl dark:text-white">
        WELCOME
      </p>
      <p className="kode-mono-lab mt-2 text-balance pe-1 ps-1 text-3xl text-black md:text-5xl xl:pe-4 xl:text-7xl dark:text-white">
        TO
      </p>
      <TextGenerateEffect words={The} className="pe-2 ps-2 text-black dark:text-white " />
      <TextGenerateEffect words={Lab} className="ps-2 text-black dark:text-white" />
    </div>
  );
}
