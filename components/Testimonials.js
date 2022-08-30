import React from "react";
import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="container mx-auto font-sora text-charcoal bg-beige py-[10px] md:px-[200px] px-[20px] pt-10 lg:pt-28"
    >
      <div className="flex flex-col">
        <h2 className="mb-0">
          Happiest <span className="text-purple">Trainee</span> Reviews
        </h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
