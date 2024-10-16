'use client';

import React from 'react';
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

const TestimonialCarousel: React.FC = () => {
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
    <div className="bg-black py-4 ps-5 text-white md:py-8">
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
  );
};

export default TestimonialCarousel;
