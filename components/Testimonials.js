import React from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="font-sora text-charcoal bg-beige py-[10px] md:px-[200px] px-[20px] pt-20">
      <div className="flex flex-col">
        <h2>
          Happiest <span className="text-purple">Trainee</span> Reviews
        </h2>
        <div className="flex flex-row justify-end">
          <ArrowCircleLeftIcon className="text-purple h-9" />
          <ArrowCircleRightIcon className="text-purple h-9" />
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly mt-8 lg:pb-20 ">
        <img
          src="images/client1.png"
          alt="hero"
          loading="lazy"
          className="h-[250px] w-[200px] xl:h-[400px] xl:w-[350px]"
        />
        <div className="mt-10 ">
          <FaQuoteLeft className="text-[20px]"/>
          <p className="text-charcoal mt-5 mb-5 lg:w-[600px]">
            When I was stuck at home during pandemic I wanted to workout from
            home one of my friends introduced me to FitMe and man I loved every
            bit of it. I chose Yearly Plan they have amazing trainers who know
            what they’re doing.
          </p>
          <div className="space-y-1  mb-10 border-grayish border-t pt-5">
            <h3 className="lg:text-[20px]">Austin Green</h3>
            <h6 className="lg:text-[16px]">Founder, AK Sports</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
