import React from "react";
import CardItem from "./CardItem";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Cards = () => {
  const router = useRouter();
  const strengthTraining = (e) => {
    e.preventDefault();

    router.push("/strengthTraining");
  };

  const cardio = (e) => {
    e.preventDefault();

    router.push("/cardio");
  };

  const yoga = (e) => {
    e.preventDefault();

    router.push("/yoga");
  };

  return (
    <div
      id="programs"
      className="container mx-auto bg-beige  py-[10px] md:px-[50px] px-[20px] font-sora pt-20 lg:pt-32  "
    >
      {/* heading */}

      <h2 className="mb-10 lg:mb-16">
        Explore Our <span className="text-purple">Programs</span>
      </h2>

      {/* Cards */}
      <div className=" space-y-10  lg:space-y-0 flex flex-col items-center lg:flex lg:flex-row lg:justify-between lg:items-center">
        <CardItem
          title="Cardio & Crossfit"
          url="images/cardio.png"
          desc="Improve your cardiovascular health, help lower blood pressure, regulate weight, strengthen immune system, aid sleep with our Crossfit Cardio."
          program={cardio}
        />
        <div className="p-3 lg:p-6 w-2/3 lg:max-w-sm bg-purple rounded-lg border border-purple box2 ">
          <img
            src="images/gym.png"
            alt="gym"
            loading="lazy"
            className=" h-[100px] mb-3"
          />
          <h5 className="text-beige">Strength Training</h5>

          <p className="text-beige lg:text-[16px]">
            Our professional trainers will help you manage or lose weight,
            increase your metabolism to help you burn more calories, enhance
            your quality of life.
          </p>
          <button
            onClick={strengthTraining}
            className="inline-flex tracking-wide items-center py-2 px-4 text-sm text-purple bg-beige hover:bg-beige hover:text-purple"
          >
            Learn More <ArrowRightIcon className="h-5 ml-2" />
          </button>
        </div>
        <CardItem
          title="Yoga & Stretching"
          url="images/yoga.png"
          desc="Yoga will help you improve strength, balance and flexibility, ease back pain, heart health, sleep better, manage stress."
          program={yoga}
        />
      </div>
    </div>
  );
};

export default Cards;
