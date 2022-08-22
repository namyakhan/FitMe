import { MdCheckBox } from "react-icons/md";

const MembershipItems = ({ plan, price, frequency, gym, program, wifi }) => {
  return (
    <div className="p-5 lg:p-6 bg-beige rounded-2xl border border-grayish box flex flex-col items-center mt-16">
      <div className=" flex flex-col items-center space-y-2 font-[600] mt-3 ">
        <h2 className="text-[20px] lg:text-[24px] text-purple ">{plan}</h2>
        <h1 className="text-[36px] lg:text-[48px]">{price}</h1>
        <p className="pb-3 text-[12px] lg:text-[16px] text-gray">{frequency}</p>
      </div>

      <div className="space-y-5  mb-10 border-grayish border-t pt-5">
        <div className="flex flex-row items-center space-x-2">
          <MdCheckBox className="text-purple" />
          <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
            {gym}
          </p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <MdCheckBox className="text-purple" />
          <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
            {program}
          </p>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <MdCheckBox className="text-purple" />
          <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
            {wifi}
          </p>
        </div>
      </div>
      <button className=" tracking-wide items-center py-2 px-12 text-sm font-medium text-center text-charcoal bg-beige rounded border-purple border hover:bg-violet-700 hover:text-beige cursor-pointer transition duration-300 transform hover:scale-105 mb-3 text-[15px] lg:text-[18px] ">
        Choose Plan
      </button>
    </div>
  );
};

export default MembershipItems;
