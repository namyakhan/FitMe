import Yoga from "../components/Yoga";

const yoga = () => {
  return (
    <div className="container mx-auto flex flex-col py-[10px] md:px-[50px] px-[20px] bg-beige font-sora pt-12 pb-12  lg:pt-20 lg:pb-28 ">
      {/* Push Days */}
      <h2 className="mb-10">
        <span className="text-purple">Yoga</span> & Stretching
      </h2>

      <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
        <Yoga
          url="images/yoga/wheel-pose.jpg"
          title="Chakrasana"
          desc="Offers a deep stretch for the chest and shoulder muscles, as well as the hip flexors. It also strengthens the hamstrings and spinal extensors."
        />
        <Yoga
          url="images/yoga/downward-dog.jpg"
          title="Downward Dog"
          desc="Lengthens and decompresses the spine, stretches the hamstrings, strengthens your arms, flushes your brain with fresh oxygen and calms your mind."
        />
        <Yoga
          url="images/yoga/cobra.jpg"
          title="Cobra Pose"
          desc="May reduce symptoms of depression, relieve lower back pain, improve self-esteem, reduce inflammation, improve posture.  "
        />
        <Yoga
          url="images/yoga/easy-pose.jpg"
          title="Easy Pose"
          desc="It is a hip opener, it is calming, and it eases the menstrual pain for women in addition to lowering the level of anxiety."
        />
        <Yoga
          url="images/yoga/tree-pose.jpg"
          title="Tree Pose"
          desc="Stretches your feet, improves balance, strengthens your Core, "
        />
        <Yoga
          url="images/yoga/mermaid-pose.jpg"
          title="Mermaid Pose"
          desc=" This pose also provides a deep stretch to the thighs, groins, shoulders, and chest. It improves mobility in the spine and hips, strengthens the abdominal muscles, and stimulates the organs of the torso."
        />
      </div>
    </div>
  );
};

export default yoga;
