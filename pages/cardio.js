import Navbar from "../components/Navbar";

const cardio = () => {
  const CardioItems = ({ url, title, desc }) => {
    return (
      <div className="container mx-auto max-w-sm  bg-white rounded-lg shadow-md p-5">
        <img src={url} alt="product image" className="lg:h-auto lg:w-auto" />

        <h3 className="text-purple  mb-2">{title}</h3>
        <p className="text-[14px] mb-0">{desc}</p>
      </div>
    );
  };
  return (
    <div className="bg-beige">
      <Navbar />
      <div className="container mx-auto flex flex-col py-[10px] md:px-[50px] px-[20px] lg:h-screen  pb-10 pt-10 lg:pb-0">
        <h2 className="mb-10">
          <span className="text-purple">Cardio</span> Workout
        </h2>

        <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
          <CardioItems
            url="images/cardio/treadmill.png"
            title="TREADMILL"
            desc="Running on a treadmill is a great form of aerobic exercise, and regular aerobic exercise helps increase your heart strength and blood circulation throughout your body."
          />

          <CardioItems
            url="images/cardio/rowing.png"
            title="ROWING MACHINE"
            desc="The rowing machines are designed to simulate the resistance you face. This resistance forces you to work your muscles harder."
          />
          <CardioItems
            url="images/cardio/elliptical.png"
            title="ELLIPTICAL MACHINE"
            desc="Works the entire body and can engage the quadriceps, hamstrings, glutes, chest, back, triceps and biceps."
          />
          <CardioItems
            url="images/cardio/bike.png"
            title="STATIONARY BIKE"
            desc="Riding a stationary exercise bike is an efficient and effective way to burn calories and body fat while strengthening your heart, lungs, and muscles."
          />
        </div>
      </div>
    </div>
  );
};

export default cardio;
