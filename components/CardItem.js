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
      <h5>
        {title}
      </h5>

      <p className="">
       {desc}
      </p>
      <button className="inline-flex tracking-wide items-center py-2 px-4 text-sm  text-beige bg-purple rounded  hover:bg-violet-700 ">
        Learn More <ArrowRightIcon className="h-5 ml-2" />
      </button>
    </div>
  );
};

export default CardItem;
