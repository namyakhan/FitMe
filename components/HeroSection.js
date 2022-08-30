import React from "react";

import { PlayIcon } from "@heroicons/react/solid";

import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();

    router.push("/login");
  };

  return (
    <div
      id="home"
      className="container mx-auto flex flex-col-reverse items-center text-center lg:text-left md:flex-row  md:px-[50px] px-[20px] bg-beige font-sora lg:pt-[40px]"
    >
      {/* Text */}
      <div className="tracking-wide">
        <h1 className="text-charcoal text-[30px] lg:text-[60px] xl:text-[70px] lg:text font-[800] leading-[30px] lg:leading-[60px]  mb-5 mt-2">
          Smart <span className="text-purple">fitness</span> experience for
          everyone.
        </h1>
        <p className="lg:w-3/4 font-[600] text-[12px] lg:text-[20px] text-gray mb-5 ">
          Fitness is not a destination it’s a lifestyle. With our professional
          trainers we will help you to build the greatest version of yourself.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-5 lg:space-y-0 lg:flex-row lg:mt-16 lg:space-x-10  ">
          <button onClick={login} className="px-28 md:px-10">
            Get Started
          </button>
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
        className="h-[250px] xl:h-[600px]"
      />
    </div>
  );
};

export default HeroSection;
