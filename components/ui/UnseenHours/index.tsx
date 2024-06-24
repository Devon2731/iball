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
      text: "If I could rate this place higher than 5 stars, I would. The coaches are top-notch and highly knowledgeable, pushing everyone to improve in ways that are hard to put into words. Unlike other gyms that merely focus on making you feel good, here you gain real insight and confidence. All skill levels are welcome, and there's no room for egos—just pure hard work. From kids to young adults, I've seen this place positively impact everyone who comes through.",
      author: 'Brian Grayson'
    },
    {
      text: "The coaches here are amazing! They truly care about your progress and push you to be the best you can be. The environment is welcoming and supportive. I've seen great improvements in my kid's skills and confidence since joining.",
      author: 'Emily Smith'
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
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-2 pt-8 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl">
            CLIENT TESTIMONIAL
          </h2>
          <p className="mb-4 text-xs uppercase md:mb-8 md:text-sm">
            Positive Testimonials That Motivate Us
          </p>
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
      </div>
    </>
  );
};

export default UnseenHours;
