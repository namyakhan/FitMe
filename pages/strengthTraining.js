import React from "react";
import PushDays from "../components/PushDays";
import PullDays from "../components/PullDays";
import LegDays from "../components/LegDays";

const strengthTraining = () => {
  return (
    <div className="  py-[10px] md:px-[50px] px-[20px] bg-beige font-sora lg:pt-16">
      {/* Push Days */}
      <h2 className="mb-10">
        <span className="text-purple">Push</span> Workout
      </h2>

      <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
        <PushDays
          url="images/push/bench-press.png"
          title="BENCH PRESS"
          desc="An important exercise not only for developing chest muscles, but also
       for increasing upper body and endurance."
        />

        <PushDays
          url="images/push/peck-fly.png"
          title="PEC DECK FLY"
          desc="Effective exercise for building pectoral muscles and strengthening the upper body."
        />

        <PushDays
          url="images/push/shoulder-press.png"
          title="SHOULDER PRESS"
          desc="One of the most basic movements to develop and strengthen shoulder muscles, effective to build up strength."
        />
        <PushDays
          url="images/push/pushdown.png"
          title="TRICEP PUSH-DOWN"
          desc="The push-down is an isolation move that focuses on the triceps muscles and it is ideal for beginners."
        />
      </div>

      <h2 className="mb-10 mt-16">
        <span className="text-purple">Pull</span> Workout
      </h2>
      <div className="grid grid-rows-1 lg:grid-cols-4 gap-4">
        <PullDays
          url="images/pull/lat-pulldown.png"
          title="LAT PULLDOWN"
          desc="Pulldown V-Taper is among the movements that allow you to reach the image. It provides interaction in teres minor and teres major muscle groups for the development of the rear shoulder and wing muscles."
        />
        <PullDays
          url="images/pull/pullups.png"
          title="PULL-UP"
          desc="Pull-up is a closed-chain an exercise that works almost all of the muscle groups on the upper body and provides both hypertrophy and strength at body weight."
        />
        <PullDays
          url="images/pull/cable-row.png"
          title="SEATED CABLE ROW"
          desc="An important exercise not only for developing chest muscles, but also
       for increasing upper body and endurance."
        />
        <PullDays
          url="images/pull/preacher.png"
          title="PREACHER CURL"
          desc="You can get wider, thicker arms by targeting the head and brachialis muscle of the biceps with this unique curling exercise."
        />
      </div>

      {/* Legs */}
      <h2 className="mb-10 mt-16">
        <span className="text-purple">Leg</span> Workout
      </h2>
      <div className="grid grid-rows-1 lg:grid-cols-4 gap-4 pb-20">
        <LegDays
          url="images/legs/squat.png"
          title="BARBELL SQUAT"
          desc="Squats are a basic strengthening exercise used in all sports. Squat is a dynamic strength training movement that requires the muscles of your upper and lower body to work together at the same time."
        />
        <LegDays
          url="images/legs/leg-press.png"
          title="LEG PRESS"
          desc="The leg press, is a type of strength training exercise. It’s an effective move for strengthening your quadriceps, which are in the front of your upper legs."
        />
        <LegDays
          url="images/legs/leg-curl.png"
          title="LEG CURL"
          desc="It is a type of isolation exercise that focuses on the hamstring muscles. You can include it in your training programs to develop, strengthen and tighten your leg muscles."
        />
        <LegDays
          url="images/legs/calf.png"
          title="CALF RAISE"
          desc="Since the target muscle group of this exercise designed to isolate is the calf muscles, it can maximize muscle development by focusing more on the muscles in this area."
        />
      </div>
    </div>
  );
};

export default strengthTraining;
