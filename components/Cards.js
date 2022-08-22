import React from "react";
import CardItem from "./CardItem";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Cards = () => {
  return (
    <div className="bg-beige pt-28 py-[10px] md:px-[50px] px-[20px] lg:pb-16 font-sora pb-24 ">
      {/* heading */}

      <h1 className="text-[35px] lg:text-[64px] font-[700] text-center mb-16 lg:mb-24 ">
        Explore Our <span className="text-purple">Programs</span>
      </h1>

      {/* Cards */}
      <div className=" space-y-10  lg:space-y-0 flex flex-col items-center lg:flex lg:flex-row lg:justify-between lg:items-center">
        <CardItem
          title="Cardio & Crossfit"
          url="images/cardio.png"
          desc="Improve your cardiovascular health, help lower blood pressure, regulate weight, strengthen immune system, aid sleep with our Crossfit Cardio."
        />
        <div className="p-10 max-w-sm bg-purple rounded-lg border border-purple box2 ">
          <img
            src="images/gym.png"
            alt="gym"
            loading="lazy"
            className=" h-[100px] mb-3  "
          />
          <h5 className="mb-3 text-[32px] font-[600]  text-beige">
            Strength Training
          </h5>

          <p className="mb-10 font-[400] text-beige text-[18px]">
            Our professional trainers will help you manage or lose weight,
            increase your metabolism to help you burn more calories, enhance
            your quality of life.
          </p>
          <button className="inline-flex tracking-wide items-center py-2 px-4 text-sm font-medium text-center text-purple bg-beige rounded  transition duration-300 transform hover:scale-105 ">
            Learn More <ArrowRightIcon className="h-5 ml-2" />
          </button>
        </div>
        <CardItem
          title="Yoga & Stretching"
          url="images/yoga.png"
          desc="Yoga will help you improve strength, balance and flexibility, ease back pain, heart health, sleep better, manage stress."
        />
      </div>
    </div>
  );
};

export default Cards;
