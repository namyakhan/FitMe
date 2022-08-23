import { useState } from "react";

import { MdToggleOn, MdToggleOff, MdCheckBox } from "react-icons/md";

import MembershipItems from "./MembershipItems";

const Membership = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-beige  pb-10 text-charcoal lg:pt-20 font-sora py-[10px] md:px-[50px] px-[20px] flex flex-col items-center">
      <h2 className="mb-4">
        Ready to Start your <span className="text-purple">Journey?</span>
      </h2>
      <div className="flex flex-row items-center font-[600] space-x-3">
        <p className="bill mb-0">Bill Monthly</p>
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <MdToggleOn className="text-[40px] text-purple" />
          ) : (
            <MdToggleOff className="text-[40px]  text-violet-800" />
          )}
        </div>

        <p className="bill mb-0">Bill Yearly</p>
      </div>

      {/* <MembershipItems  /> */}
      <div className=" space-y-10  lg:space-y-0 flex flex-col items-center lg:flex lg:flex-row lg:space-x-16 lg:mt-20 pb-10">
        {/* Weekly */}
        <MembershipItems
          plan="Weekly Plan"
          price="$9"
          frequency="per week, bill annually"
          gym="Unlimited gym acess"
          program="1 Training Program"
          wifi="Free Wifi"
        />

        {/* Monthly */}
        <div className=" p-5 lg:p-14  bg-beige rounded-2xl  box2 flex flex-col items-center ">
          <div className=" flex flex-col items-center space-y-2 font-[600]">
            <h2 className="plan">Monthly Plan</h2>
            <h1 className="price">$49</h1>
            <p className="desc">per month, bill annually</p>
          </div>

          <div className="space-y-5  mb-10 border-grayish border-t pt-5">
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="features">Unlimited gym access</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="features">5 Training Program</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="features">Adjustable Schedule</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdCheckBox className="text-purple" />
              <p className="features">Free Wifi</p>
            </div>
          </div>
          <button className="membership-btn">Choose Plan</button>
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
