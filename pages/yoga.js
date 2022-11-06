import Navbar from "../components/Navbar";

const yoga = () => {
  const Yoga = ({ url, title, desc }) => {
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
      <div className="container mx-auto flex flex-col py-[10px] px-[10px] pt-10 pb-10 lg:pb-10 ">
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
    </div>
  );
};

export default yoga;
