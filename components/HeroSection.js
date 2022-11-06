import { useState } from "react";
import { Brands } from "../data/data";
import { PlayIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import CardItem from "./CardItem";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import MembershipItems from "./MembershipItems";
import Carousel from "./Carousel";

const HeroSection = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const login = (e) => {
    e.preventDefault();
    router.push("/login");
  };

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
    <div className="bg-beige">
      {/* Hero Section */}
      <div
        id="home"
        className="container mx-auto flex flex-col-reverse items-center text-center md:text-left md:flex-row px-[10px] pt-[30px] pb-8"
      >
        <div className="">
          <h1 className="text-charcoal text-[30px] lg:text-[60px] xl:text-[70px] lg:text font-[800] leading-[30px] lg:leading-[60px]  mb-2 md:mb-5 mt-0 md:mt-10 tracking-wide">
            Smart <span className="text-purple">fitness</span> experience for
            everyone.
          </h1>
          <p className="lg:w-11/12 font-[400] text-[12px] lg:text-[18px] text-gray mb-5 ">
            Fitness is not a destination it’s a lifestyle. With our professional
            trainers we will help you to build the greatest version of yourself.
          </p>

          <div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row lg:mt-10 md:space-x-5  ">
            <button onClick={login} className="px-24 md:px-8">
              Get Started
            </button>
            <div className="flex items-center">
              <PlayIcon className="h-7 text-purple mr-1" />
              <p className="font-[600] mb-0 text-charcoal">Watch Video</p>
            </div>
          </div>
        </div>

        <img
          src="images/hero.svg"
          alt="hero"
          loading="lazy"
          className="h-[250px] lg:h-[400px] xl:h-[600px]"
        />
      </div>

      {/* Brands */}
      <div className="container mx-auto pt-10 pb-10">
        <h1 className="text-[18px] font-[600] text-gray text-center mb-6 lg:mb-10  ">
          Trusted by 3000+ brands worldwide
        </h1>
        <div className="grid grid-rows-2 grid-flow-col gap-5 justify-evenly  lg:flex lg:flex-cols-6 lg:justify-center lg:space-x-10 xl:space-x-20">
          {Brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.url}
              alt={brand.title}
              loading="lazy"
              className="h-12 lg:h-16 "
            />
          ))}
        </div>
      </div>

      {/* Trainers */}
      <div
        id="trainers"
        className="pt-20 text-charcoal lg:pt-32  py-[10px]  px-[10px] flex flex-col items-center container mx-auto "
      >
        <h2>
          Meet Our Certified <span className="text-purple">Trainers</span>
        </h2>

        <div className=" flex flex-col space-y-10 lg:space-y-0 lg:flex lg:flex-row  lg:gap-x-10">
          <div className="flex flex-col items-center ">
            <img
              src="images/trainer.svg"
              alt="mma-trainer"
              loading="lazy"
              className=" h-[300px] lg:h-[350px] xl:h-[400px] mb-2  "
            />
            <h3>Alex Graham</h3>
            <h6>MMA Trainer</h6>
          </div>

          <div className="flex flex-col items-center basis-1/2">
            <img
              src="images/trainer2.svg"
              alt="mma-trainer"
              loading="lazy"
              className=" h-[300px] lg:h-[350px] xl:h-[400px] mb-5 "
            />
            <h3>Sebastian Smith</h3>
            <h6>Gym Trainer</h6>
          </div>

          <div className="flex flex-col items-center font-sora ">
            <img
              src="images/trainer3.svg"
              alt="mma-trainer"
              loading="lazy"
              className=" h-[300px] lg:h-[350px] xl:h-[400px] "
            />
            <h3>Luis Fisher</h3>
            <h6>Yoga Trainer</h6>
          </div>
        </div>
        <div className="mt-16">
          <button className="px-28 md:px-16">See All</button>
        </div>
      </div>

      {/* Cards */}
      <div
        id="programs"
        className="container mx-auto bg-beige py-[10px] px-[10px] pt-20 lg:pt-32  "
      >
        <h2 className="mb-10 lg:mb-16">
          Explore Our <span className="text-purple">Programs</span>
        </h2>

        <div className="space-y-10  lg:space-y-0 flex flex-col items-center lg:flex lg:flex-row lg:justify-between lg:items-center">
          <CardItem
            title="Cardio & Crossfit"
            url="images/cardio.png"
            desc="Improve your cardiovascular health, help lower blood pressure, regulate weight, strengthen immune system, aid sleep with our Crossfit Cardio."
            program={cardio}
            bgcolor="beige"
          />
          <CardItem
            title="Strength Training"
            url="images/gym.png"
            desc="Our professional trainers will help you manage or lose weight,
          increase your metabolism to help you burn more calories, enhance
          your quality of life."
            program={strengthTraining}
            bgcolor="purple"
            text="beige"
          />
          <CardItem
            title="Yoga & Stretching"
            url="images/yoga.png"
            desc="Yoga will help you improve strength, balance and flexibility, ease back pain, heart health, sleep better, manage stress."
            program={yoga}
            bgcolor="beige"
          />
        </div>
      </div>
      {/* Membership Plans */}
      <div
        id="memberships"
        className="container mx-auto bg-beige pt-20 lg:pt-36 text-charcoal px-[10px] flex flex-col items-center"
      >
        <h2 className="mb-0 lg:mb-5">
          Ready to Start your <span className="text-purple">Journey?</span>
        </h2>
        <div className="flex flex-row items-center font-[600] space-x-3">
          <p className="bill mb-0">Bill Monthly</p>
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <MdToggleOn className="text-[40px] text-purple" />
            ) : (
              <MdToggleOff className="text-[40px]  text-violet-800" />
            )}
          </div>
          <p className="bill mb-0">Bill Yearly</p>
        </div>
        <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-between lg:space-x-8 lg:mt-12 pb-10">
          <MembershipItems
            plan="Weekly Plan"
            price="$9"
            frequency="per week, bill annually"
            gym="Unlimited gym acess"
            program="1 Training Program"
            wifi="Free Wifi"
            visibility="hidden"
          />
          <MembershipItems
            plan="Monthly Plan"
            price="$49"
            frequency="per month, bill annually"
            gym="Unlimited gym acess"
            program="5 Training Program"
            wifi="Free Wifi"
            shadow="box2"
            schedule="Adjustable Schedule"
            visibility="block"
          />
          <MembershipItems
            plan="Yearly Plan"
            price="$99"
            frequency="per year, bill annually"
            gym="Unlimited gym access"
            program="All Training Programs"
            wifi="Free goodies & Wifi"
            visibility="hidden"
          />
        </div>
      </div>
      {/* Testimonials */}
      <div
        id="testimonials"
        className="container mx-auto font-sora text-charcoal  py-[10px]  px-[10px] pt-10 lg:pt-28"
      >
        <div className="flex flex-col">
          <h2 className="mb-0">
            Happiest <span className="text-purple">Trainee</span> Reviews
          </h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
