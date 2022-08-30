import { MdCheckBox } from "react-icons/md";
import { useState } from "react";

const MembershipItems = ({ plan, price, frequency, gym, program, wifi }) => {
  const [showModal, setShowModal] = useState(false);
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
      <button
        onClick={() => setShowModal(true)}
        className=" membership-btn text-charcoal bg-beige  border-purple border hover:bg-violet-700 hover:text-beige cursor-pointer "
      >
        Choose Plan
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  font-sora">
            <div className="relative w-auto  mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white">
                {/*header*/}
                <div className="flex flex-col items-start justify-between p-7 mb-5 mt-5 ">
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

export default MembershipItems;
