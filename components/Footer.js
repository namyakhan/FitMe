import React from "react";

const Footer = () => {
  return (
    <div className="py-[10px] md:px-[50px] px-[20px] bg-charcoal font-sora lg:pt-16 pb-5 lg:pb-10 ">
      <div className="flex flex-col  lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Logo & copyright */}
        <div className="space-y-1">
          <h1 className="cursor-pointer text-beige text-[36px] font-[700]">
            <span className="text-purple">Fit</span>Me
          </h1>
          <h6 className="text-beige font-[400]">Fitness for everyone</h6>
        </div>
        <div className="flex space-x-16">
        <div className="flex flex-col space-y-2">
          <h6 className="footer-heading">ABOUT</h6>
          <p className="footer-items">Home</p>
          <p className="footer-items">Customers</p>
          <p className="footer-items">Trainers</p>
        </div>
        {/* Product */}
        <div className="flex flex-col space-y-2">
          <h6 className="footer-heading">PRODUCT</h6>
          <p className="footer-items">How it works</p>
          <p className="footer-items">Membership plans</p>
          <p className="footer-items">Privacy Policy</p>
        </div>
        </div>
      
      </div>
      <hr className="text-gray mt-10" />
      <div className="mt-4 flex flex-col items-center space-y-3  lg:space-y-0 lg:flex-row lg:justify-between ">
        <p className="text-[12px] mb-0">
          © 2022, FitMe, Inc. All Rights Reserved.
        </p>
        <div className="flex flex-row justify-end space-x-4">
          <img
            src="images/twitter.png"
            alt="hero"
            loading="lazy"
            className="h-[25px] w-[25px]"
          />
          <img
            src="images/facebook.png"
            alt="hero"
            loading="lazy"
            className="h-[25px] w-[25px]"
          />
          <img
            src="images/youtube.png"
            alt="hero"
            loading="lazy"
            className="h-[25px] w-[25px]"
          />
          <img
            src="images/email.png"
            alt="hero"
            loading="lazy"
            className="h-[25px] w-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="flex flex-col space-y-2">
<h6 className="footer-heading">Follow Our Socials</h6>
<img
src="images/twitter.png"
alt="hero"
loading="lazy"
className="h-[25px] w-[25px]"
/>
</div> */
}
