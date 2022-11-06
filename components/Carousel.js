import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";


const Carousel = () => {
  SwiperCore.use([Autoplay]);

  const TestimonialItems = ({ url, desc, name, title }) => {
    return (
      <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly mt-8 lg:pb-20 ">
        <img
          src={url}
          alt="hero"
          loading="lazy"
          className="h-[210px] w-[200px] lg:h-auto lg:w-auto"
        />
        <div className="mt-0 lg:mt-10 ">
          <FaQuoteLeft className="text-[20px]" />
          <p className="text-charcoal mt-5 mb-5 lg:w-[600px]">{desc}</p>
          <div className="space-y-1  mb-10 border-grayish border-t pt-5">
            <h3 className="lg:text-[20px]">{name}</h3>
            <h6 className="lg:text-[16px]">{title}</h6>
          </div>
        </div>
      </div>
    );
  };

  function Slide1() {
    return (
      <TestimonialItems
        url="images/client1.png"
        desc="When I was stuck at home during pandemic I wanted to workout from home one of my friends introduced me to FitMe and man I loved every bit of it. I chose Yearly Plan they have amazing trainers who know what they’re doing.
      "
        name="Austin Green"
        title="Founder, AK Sports"
      />
    );
  }

  function Slide2() {
    return (
      <TestimonialItems
        url="images/client3.png"
        desc="I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. You have the best community. 
          "
        name="Charles Webb"
        title="Athlete"
      />
    );
  }

  function Slide3() {
    return (
      <TestimonialItems
        url="images/client2.png"
        desc="I built my dream physique just because of you guys. After which I bagged multiple modelling opportunities. You guys rock! I connected with so many beautiful people in the community."
        name="James Rodriguez"
        title="Fitness Model"
      />
    );
  }

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          delay: 2000,
        }}
      >
        <SwiperSlide>{Slide1()}</SwiperSlide>
        <SwiperSlide>{Slide2()}</SwiperSlide>
        <SwiperSlide>{Slide3()}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
