import { useState } from "react";

import { MdToggleOn, MdToggleOff, MdCheckBox } from "react-icons/md";

import MembershipItems from "./MembershipItems";

const Membership = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-beige  pb-10 text-charcoal lg:pt-20 font-sora py-[10px] md:px-[50px] px-[20px] flex flex-col items-center">
      <h1 className="text-[35px] lg:text-[64px] font-[700] text-center mb-4 ">
        Ready to Start your <span className="text-purple">Journey?</span>
      </h1>
      <div className="flex flex-row items-center font-[600] text-[20px] lg:text-[24px] space-x-3">
        <p>Bill Monthly</p>
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <MdToggleOn className="text-[40px] text-purple" />
          ) : (
            <MdToggleOff className="text-[40px]  text-violet-800" />
          )}
        </div>

        <p>Bill Yearly</p>
      </div>

      {/* <MembershipItems  /> */}
      <div className=" space-y-10  lg:space-y-0 flex flex-col items-center lg:flex lg:flex-row lg:space-x-16 lg:mt-20 pb-10">
        {/* Weekly */}
        <MembershipItems
          plan="Weekly Plan"
          price="$10"
          frequency="per week, bill annually"
          gym="Unlimited gym acess"
          program="1 Training Program"
          wifi="Free Wifi"
        />

        {/* Monthly */}
        <div className=" p-5 lg:p-16  bg-beige rounded-2xl  box2 flex flex-col items-center">
          <div className=" flex flex-col items-center space-y-2 font-[600] mt-3 ">
            <h2 className="text-[20px] lg:text-[24px] text-purple ">
              Monthly Plan
            </h2>
            <h1 className="text-[36px] lg:text-[48px]">$10</h1>
            <p className="pb-3 text-[12px] lg:text-[16px] text-gray">
              per month, bill annually
            </p>
          </div>

          <div className="space-y-5  mb-10 border-grayish border-t pt-5">
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
                Unlimited gym acess
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
                5 Training Program
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
                Adjustable Schedule
              </p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="text-[16px] lg:text-[20px] text-charcoal font-[600]">
                Free Wifi
              </p>
            </div>
          </div>
          <button className=" tracking-wide items-center py-2 px-12 lg:px-16 text-sm font-medium text-center text-beige bg-purple rounded  hover:bg-violet-700 hover:text-beige cursor-pointer transition duration-300 transform hover:scale-105 mb-3  text-[15px] lg:text-[18px] ">
            Choose Plan
          </button>
        </div>

        {/* Yearly */}
        <MembershipItems
          plan="Yearly Plan"
          price="$99"
          frequency="per year, bill annually"
          gym="Unlimited gym acess"
          program="All Training Programs"
          wifi="Free goodies & Wifi"
        />
      </div>
    </div>
  );
};

export default Membership;
