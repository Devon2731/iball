'use client';

import 'animate.css/animate.compat.css';
import { PushPressButton } from 'components/pushpress-btn';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface TestimonialProps {
  testimonial: { text: string; author: string };
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-black py-4 pe-4 ps-4 text-white md:py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-base md:mb-4 md:text-lg lg:text-xl xl:text-2xl">
          {testimonial.text}
        </p>
        <p className="text-sm text-white md:text-base">{testimonial.author}</p>
      </div>
    </div>
  );
};

const UnseenHours: React.FC = () => {
  const testimonials = [
    {
      text: 'Our family first met Coach Ron when our 2 boys were in elementary school. They started playing basketball with him on his AAU teams. We all recognized right away that Coach had a unique gift for coaching kids. Yes, he knows basketball, but more importantly he can connect with the kids on a deep level because he cares about them and it shows. Our boys started doing group and private coaching sessions with Coach Ron to build upon their basketball skills which continued to improve. More importantly, Coach helped them with their life skills and helped them develop their character. For years we gladly made the 3 hour round trip drive to train with him because it was so worth it! Our oldest son is going into his sophomore year playing basketball at MIT. Our youngest son is going into his senior year in high school with the goal of playing in college as well. We will be forever grateful for the time Coach Ron dedicated to our boys. It definitely made them better basketball players and more importantly it made them better men. We highly recommend training with Coach!',
      author: 'The Dobie Family✨✨✨✨✨'
    },
    {
      text: "I will forever be grateful for Coach Ron and the impact he has had on RJ's basketball skills since starting at I.ball 24/7. For the past 2-3 years since he met Coach Ron, he returns home with a completely different outlook toward his grades and his basketball commitment. His conversations with Ron must have really struck a chord, and I believe he has given him a new mindset and set him on a new path to achieve academically and to focus on his training and has open his eyes to limitless opportunities ahead of him. His viewpoints and knowledge of the game of basketball has also took leaps and bounds thanks to Ron passing forward all the necessary information to RJ. Our son has improved so much, a big difference in his skills and speed at which he plays. He has gotten quicker and more well rounded as a player. We are excited about his future ahead! Thank you so much for your continued commitment to our son's success.",
      author: 'RJ SPENCER FAMILY'
    },
    {
      text: "An incredible place to train and grow. The community is fantastic, and the training sessions are top-notch. I highly recommend this gym to anyone looking to take their kid's skills to the next level.",
      author: 'Taz Whitaker'
    }
  ];

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
        />
      </div>

      <div className="pb-4 pt-4 md:pb-6 md:pt-6 lg:pb-12 lg:pt-12 xl:pb-24 xl:pt-24">
        <ScrollAnimation animateIn="fadeIn" delay={0.1 * 1000} animateOnce>
          <p className="kode-mono-lab -translate-x-half transform px-4 pb-6 pt-6 text-center text-base transition-transform duration-500 md:px-6 md:text-lg lg:text-xl xl:text-2xl">
            WE HAVE THE ABILITY TO WORK WITH ALL LEVELS AND AGES. WE ARE THE BEST AT PROVIDING THE
            APPROPRIATE “STARTER PACK” FOR NEW INSPIRING PLAYERS.
          </p>
        </ScrollAnimation>
      </div>

      <div className="mb-4 mt-4 flex items-center justify-center md:mb-10 md:mt-10 lg:mb-20 lg:mt-20">
        <PushPressButton />
      </div>

      <div
        className="bg-black py-4
       ps-5 text-white md:py-8"
      >
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 ml-6 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 md:p-3 lg:p-4"
              >
                ❮
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-3 mr-0 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 md:p-3 lg:p-4"
              >
                ❯
              </button>
            )
          }
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default UnseenHours;
