import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const CardItem = ({ url, title, desc, program }) => {
  return (
    <div className="p-3 lg:p-6 w-2/3 lg:max-w-sm bg-beige rounded-lg border border-purple  ">
      <img
        src={url}
        alt="cardio"
        loading="lazy"
        className=" h-[70px] lg:h-[100px] mb-3  "
      />
      <h5>{title}</h5>

      <p className="lg:text-[16px]">{desc}</p>
      <button
        onClick={program}
        className="inline-flex tracking-wide items-center py-2 px-4 text-sm  text-beige bg-purple rounded  hover:bg-violet-700 "
      >
        Learn More <ArrowRightIcon className="h-5 ml-2" />
      </button>
    </div>
  );
};

export default CardItem;
