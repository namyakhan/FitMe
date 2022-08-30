const Trainers = () => {
  return (
    <div id="trainers" className= "bg-beige  pt-20 text-charcoal lg:pt-32 font-sora py-[10px] md:px-[50px] px-[20px] flex flex-col items-center container mx-auto ">
      {/* heading */}
      <h2>
        Meet Our Certified <span className="text-purple">Trainers</span>
      </h2>

      <div className=" flex flex-col space-y-10 lg:space-y-0 lg:flex lg:flex-row  lg:gap-x-10">
        {/* Trainer 1 */}
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

        {/* Trainer 2 */}
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

        {/* Trainer 3 */}
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
  );
};

export default Trainers;
