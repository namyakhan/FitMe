import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const CardItem = ({url, title, desc}) => {
  return (
    <div className="p-6 max-w-sm bg-beige rounded-lg border border-purple  ">
      <img
        src={url}
        alt="cardio"
        loading="lazy"
        className=" h-[100px] mb-3  "
      />
      <h5 className="mb-3 text-[32px] font-[600]  text-purple">
        {title}
      </h5>

      <p className="mb-10 font-[400] text-gray text-[18px]">
       {desc}
      </p>
      <button className="inline-flex tracking-wide items-center py-2 px-4 text-sm font-medium text-center text-beige bg-purple rounded  hover:bg-violet-700 transition duration-300 transform hover:scale-105">
        Learn More <ArrowRightIcon className="h-5 ml-2" />
      </button>
    </div>
  );
};

export default CardItem;
