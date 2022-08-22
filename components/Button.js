import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-purple text-white font-medium font-sora py-[7px] px-[20px] lg:px-[40px] lg:py-2 text-[15px] lg:text-[18px] rounded  hover:bg-violet-700 btn transition duration-300 transform hover:scale-105"
    >
      {props.children}
    </button>
  );
};

export default Button;
