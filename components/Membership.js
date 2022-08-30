import { useState } from "react";
import { MdToggleOn, MdToggleOff, MdCheckBox } from "react-icons/md";
import MembershipItems from "./MembershipItems";

const Membership = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="memberships"
      className=" container mx-auto bg-beige  pt-20 lg:pt-36 text-charcoal  font-sora  md:px-[50px] px-[20px] flex flex-col items-center "
    >
      <h2 className="mb-0 lg:mb-5">
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
        <div className=" p-5 lg:p-14  bg-beige rounded-2xl  box2 flex flex-col items-center">
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

          {/* <button className="membership-btn">Choose Plan </button> */}
          <button onClick={() => setShowModal(true)}>Choose Plan</button>
        </div>

        {/* Yearly */}
        <MembershipItems
          plan="Yearly Plan"
          price="$99"
          frequency="per year, bill annually"
          gym="Unlimited gym access"
          program="All Training Programs"
          wifi="Free goodies & Wifi"
        />
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  font-sora">
            <div className="relative w-auto  mx-auto max-w-sm lg:max-w-md">
              {/*content*/}
              <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex flex-col items-start justify-between p-3 lg:p-7 mb-5 mt-5 ">
                  <h3>Payment successful</h3>
                  <p className="text-[16px] mt-3">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                  <button
                    className="px-[16px] text-[16px]"
                    onClick={() => setShowModal(false)}
                  >
                    Got it, thanks!
                  </button>
                </div>

                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Membership;
