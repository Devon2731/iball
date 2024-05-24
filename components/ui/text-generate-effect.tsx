'use client';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from '../../lib/utils/cn';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 2,
        delay: stagger(0.2)
      }
    );
  }, [scope.current]);

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
      <div className="mt-4">
        <div className="text-xl leading-snug tracking-wide text-black lg:text-7xl dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
