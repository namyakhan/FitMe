import { MdCheckBox } from "react-icons/md";

const MembershipItems = ({ plan, price, frequency, gym, program, wifi }) => {
  return (
    <div className="p-5 lg:p-6 bg-beige rounded-2xl border border-grayish box flex flex-col items-center mt-10">
      <div className=" flex flex-col items-center space-y-1 font-[600]  ">
        <h2 className="plan">{plan}</h2>
        <h1 className="price">{price}</h1>
        <p className="desc">{frequency}</p>
      </div>

      <div className="mb-8 border-grayish border-t pt-5 space-y-5 ">
        <div className="flex flex-row items-center space-x-2">
          <MdCheckBox className="text-purple" />
          <p className="features">{gym}</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <MdCheckBox className="text-purple" />
          <p className="features">{program}</p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <MdCheckBox className="text-purple" />
          <p className="features">{wifi}</p>
        </div>
      </div>
      <button className=" membership-btn text-charcoal bg-beige  border-purple border hover:bg-violet-700 hover:text-beige cursor-pointer ">
        Choose Plan
      </button>
    </div>
  );
};

export default MembershipItems;
