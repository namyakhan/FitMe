import Cardio from "../components/Cardio";

const cardio = () => {
  return (
    <div className="container mx-auto flex flex-col py-[10px] md:px-[50px] px-[20px] bg-beige font-sora lg:pt-32 lg:pb-40 ">
      {/* Push Days */}
      <h2 className="mb-10">
        <span className="text-purple">Cardio</span> Workout
      </h2>

      <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
        <Cardio
          url="images/cardio/treadmill.png"
          title="TREADMILL"
          desc="Running on a treadmill is a great form of aerobic exercise, and regular aerobic exercise helps increase your heart strength and blood circulation throughout your body."
        />

        <Cardio
          url="images/cardio/rowing.png"
          title="ROWING MACHINE"
          desc="The rowing machines are designed to simulate the resistance you face. This resistance forces you to work your muscles harder."
        />
        <Cardio
          url="images/cardio/elliptical.png"
          title="ELLIPTICAL MACHINE"
          desc="Works the entire body and can engage the quadriceps, hamstrings, glutes, chest, back, triceps and biceps."
        />
        <Cardio
          url="images/cardio/bike.png"
          title="STATIONARY BIKE"
          desc="Riding a stationary exercise bike is an efficient and effective way to burn calories and body fat while strengthening your heart, lungs, and muscles."
        />
      </div>
    </div>
  );
};

export default cardio;
