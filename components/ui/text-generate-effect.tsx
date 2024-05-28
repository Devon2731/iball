'use client';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils/cn';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  const animateRef = useRef(animate);
  animateRef.current = animate;
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 5,
        delay: stagger(0.2)
      }
    );
  });

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 dark:text-white"
              id="hero-handle"
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-2">
        <div className="kode-mono-lab text-xl text-green-400 md:text-[38px] lg:text-4xl xl:text-7xl dark:text-green-400">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
