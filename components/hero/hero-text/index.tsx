'use client';
import { TextGenerateEffect } from '../../ui/text-generate-effect';

const words = `Welcome`;
const secLine = `to the`;
const thrLine = `LAB`;

export function HeroWords() {
  return (
    <div className="absolute left-32 top-56 flex flex-col items-center justify-center">
      <TextGenerateEffect words={words} className="" />
      <TextGenerateEffect words={secLine} className="" />
      <TextGenerateEffect words={thrLine} className="" />
    </div>
  );
}
