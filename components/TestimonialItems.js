import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialItems = ({ url, desc, name, title }) => {
  return (
    <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly mt-8 lg:pb-20 ">
      <img
        src={url}
        alt="hero"
        loading="lazy"
        className="h-auto w-auto"
      />
      <div className="mt-10 ">
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

export default TestimonialItems;
