import Button from "./Button";

const Trainers = () => {
  return (
    <div className="bg-beige text-charcoal pt-10 lg:pt-20 font-sora py-[10px] md:px-[50px] px-[20px] flex flex-col items-center ">
      {/* heading */}
      <h1 className="text-[35px] lg:text-[64px] font-[700] text-center lg:mb-16">
        Meet Our Certified <span className="text-purple">Trainers</span>
      </h1>

      <div className="space-y-10 flex flex-col lg:flex lg:flex-row lg:gap-x-10">
        {/* Trainer 1 */}
        <div className="flex flex-col items-center pt-20">
          <img
            src="images/trainer.svg"
            alt="mma-trainer"
            loading="lazy"
            className=" h-[300px] lg:h-[350px] xl:h-[450px] mb-5  "
          />
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-charcoal">
            Alex Graham
          </h2>
          <p className="text-[17px] lg:text-[20px] font-[600] text-gray">
            MMA Trainer
          </p>
        </div>

        {/* Trainer 2 */}
        <div className="flex flex-col items-center basis-1/2">
          <img
            src="images/trainer2.svg"
            alt="mma-trainer"
            loading="lazy"
            className=" h-[300px] lg:h-[350px] xl:h-[450px] mb-5 "
          />
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-charcoal">
            Sebastian Smith
          </h2>
          <p className="text-[17px] lg:text-[20px] font-[600] text-gray">
            Gym Trainer
          </p>
        </div>

        {/* Trainer 3 */}
        <div className="flex flex-col items-center pt-12 font-sora ">
          <img
            src="images/trainer3.svg"
            alt="mma-trainer"
            loading="lazy"
            className=" h-[300px] lg:h-[350px] xl:h-[450px] mb-5 "
          />
          <h2 className="text-[20px] lg:text-[24px] font-[700] text-charcoal">
            Luis Fisher
          </h2>
          <p className="text-[17px] lg:text-[20px] font-[600] text-gray">
            Yoga Trainer
          </p>
        </div>
      </div>
      <div className="mt-16">
        <Button className="">See All</Button>
      </div>
    </div>
  );
};

export default Trainers;
