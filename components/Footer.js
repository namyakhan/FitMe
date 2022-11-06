import React from "react";
import { Link } from "react-scroll";
import { Headings, Products, Socials } from "../data/data";

const Footer = () => {
  return (
    <div className="bg-charcoal">
      <div className=" container mx-auto py-[10px] px-[10px] font-sora lg:pt-16 pb-5 lg:pb-10 ">
        <div className="flex flex-col  lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
          <div className="space-y-1">
            <h1 className="cursor-pointer text-beige text-[36px] font-[700]">
              <span className="text-purple">Fit</span>Me
            </h1>
            <h6 className="text-beige font-[400]">Fitness for everyone</h6>
          </div>
          <div className="flex space-x-16">
            <div className="flex flex-col space-y-2">
              <h6 className="footer-heading">ABOUT</h6>

              {Headings.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={900}
                >
                  <p className="footer-items">{link.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="footer-heading">PRODUCT</h6>

              {Products.map((product) => (
                <Link key={product.name}>
                  <p className="footer-items">{product.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="text-gray mt-10" />
        <div className="mt-4 flex flex-col items-center space-y-3  lg:space-y-0 lg:flex-row lg:justify-between ">
          <p className="text-[12px] mb-0">
            © 2022, FitMe, Inc. All Rights Reserved.
          </p>
          <div className="flex flex-row justify-end space-x-4">
            {Socials.map((social) => (
              <img
                key={social.alt}
                src={social.url}
                alt={social.alt}
                loading="lazy"
                className="h-[25px] w-[25px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
