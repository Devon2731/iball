'use client';
import { TextGenerateEffect } from 'components/ui/text-generate-effect';

const words = ` THE LAB`;

export function HeroWords() {
  return (
    <div className="mb-3 ms-4 flex items-center justify-center lg:left-1/3 lg:top-1/2">
      {/* <TextGenerateEffect words={words} className="" />
      <TextGenerateEffect words={thrLine} className="" /> */}
      <p className="kode-mono-lab mt-2 pe-3 text-3xl text-black md:text-5xl xl:pe-9 xl:text-7xl dark:text-white">
        WELCOME TO<br></br>
      </p>
      <TextGenerateEffect words={words} className="" />
    </div>
  );
}
