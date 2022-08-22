import React from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="font-sora text-charcoal bg-beige py-[10px] md:px-[50px] px-[20px] pt-20">
      <div className="flex flex-col ">
        <h1 className="text-[35px] lg:text-[64px] font-[700] text-center mb-4 ">
          Happiest <span className="text-purple">Trainee</span> Reviews
        </h1>
        <div className="flex flex-row justify-end">
          <ArrowCircleLeftIcon className="text-purple h-9" />
          <ArrowCircleRightIcon className="text-purple h-9" />
        </div>
      </div>

      <div>
        <img
          src="images/client1.png"
          alt="hero"
          loading="lazy"
          className="h-[200px] xl:h-[500px]"
        />
        <div></div>
      </div>
    </div>
  );
};

export default Testimonials;
