import React from "react";

import { PlayIcon } from "@heroicons/react/solid";

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col-reverse items-center text-center lg:text-left  md:flex-row py-[10px] md:px-[50px] px-[20px] bg-beige font-sora lg:pt-16">
      {/* Text */}
      <div className="tracking-wide">
        <h1 className="text-charcoal text-[40px] lg:text-[60px] xl:text-[90px] lg:text font-[800] leading-[50px] xl:leading-[100px] mb-5">
          Smart <span className="text-purple">fitness</span> experience for
          everyone.
        </h1>
        <p className="lg:w-3/4 font-[600] text-[16px] lg:text-[22px] text-gray mb-5 ">
          Fitness is not a destination it’s a lifestyle. With our professional
          trainers we will help you to build the greatest version of yourself.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-5 lg:space-y-0 lg:flex-row lg:mt-16 lg:space-x-10  ">
          <button className="px-28 md:px-10">Get Started</button>
          <div className="flex items-center">
            <PlayIcon className="h-7 text-purple mr-1" />
            <p className="font-[600] mb-0 text-charcoal">Watch Video</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <img
        src="images/hero.svg"
        alt="hero"
        loading="lazy"
        className="h-[500px] xl:h-[600px]"
      />
    </div>
  );
};

export default HeroSection;
