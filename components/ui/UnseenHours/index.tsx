'use client';

import React from 'react';
import 'animate.css/animate.compat.css';
import { PushPressButton } from '../../pushpress-btn';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import TestimonialCarousel from '../Testimony';

const UnseenHours: React.FC = () => {
  return (
    <>
      <div className="bg-orange-700">
        <p className="kode-mono-lab bg-orange-700 text-center text-3xl md:text-5xl xl:text-7xl dark:text-white">
          UNSEEN HOURS
        </p>
        <p className="kode-mono-lab mt-2 text-balance pe-8 ps-8 text-center text-base md:mt-4 md:pe-24 md:ps-24 md:text-lg">
          The time that successful people spend cultivating their thinking, habits, relationships,
          and skills that drive the results they achieve
        </p>
      </div>

      <div className="pb-4 pt-4 md:pb-6 md:pt-6 lg:pb-12 lg:pt-12 xl:pb-24 xl:pt-24">
        <ScrollAnimation animateIn="fadeIn" delay={0.1 * 2000} animateOnce>
          <p className="kode-mono-lab -translate-x-half transform px-4 pb-6 pt-6 text-center text-base transition-transform duration-500 md:px-6 md:text-lg lg:text-xl xl:text-2xl">
            WE INSPIRE ATHLETES THROUGH ELITE TRAINING AND SHARING THE DETAILS OF THE GAME. OUR
            TRAINING SPECIALIZES IN HELPING PROGRAMS AND PLAYERS TO SCORE AND DEVELOP THE SKILLS
            NEEDED TO BE SUCCESSFUL IN GAME SITUATIONS.
          </p>
        </ScrollAnimation>
      </div>

      <div className="flex justify-center">
        <Image
          src="/iBall247_Logo_Full_Grayscale_TransparentBG.png"
          alt="iBall247 Logo"
          width={300}
          height={300}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div className="pb-4 pt-4 md:pb-6 md:pt-6 lg:pb-12 lg:pt-12 xl:pb-24 xl:pt-24">
        <ScrollAnimation animateIn="fadeIn" delay={0.1 * 1000} animateOnce>
          <p className="kode-mono-lab -translate-x-half transform px-4 pb-6 pt-6 text-center text-base transition-transform duration-500 md:px-6 md:text-lg lg:text-xl xl:text-2xl">
            WE HAVE THE ABILITY TO WORK WITH ALL LEVELS AND AGES. WE ARE THE BEST AT PROVIDING THE
            APPROPRIATE &quot;STARTER PACK&quot; FOR NEW INSPIRING PLAYERS.
          </p>
        </ScrollAnimation>
      </div>

      <div className="mb-4 mt-4 flex items-center justify-center md:mb-10 md:mt-10 lg:mb-20 lg:mt-20">
        <PushPressButton />
      </div>

      <TestimonialCarousel />
    </>
  );
};

export default UnseenHours;
