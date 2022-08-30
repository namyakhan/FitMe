import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "Trainers", link: "trainers" },
    { name: "Programs", link: "programs" },
    { name: "Memberships", link: "memberships" },
    { name: "Testimonials", link: "testimonials" },
  ];

  let Products = [
    { name: "How it works" },
    { name: "Privacy Policy" },
    { name: "Terms & Conditions" },
    { name: "Contact us" },
  ];

  let Socials = [
    { url: "images/twitter.png", alt: "Twitter" },
    { url: "images/facebook.png", alt: "Facebook" },
    { url: "images/youtube.png", alt: "Youtube" },
    { url: "images/email.png", alt: "Email" },
  ];

  return (
    <div className=" container mx-auto py-[10px] md:px-[50px] px-[20px] bg-charcoal font-sora lg:pt-16 pb-5 lg:pb-10 ">
      <div className="flex flex-col  lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Logo & copyright */}
        <div className="space-y-1">
          <h1 className="cursor-pointer text-beige text-[36px] font-[700]">
            <span className="text-purple">Fit</span>Me
          </h1>
          <h6 className="text-beige font-[400]">Fitness for everyone</h6>
        </div>
        <div className="flex space-x-16">
          {/* Links */}
          <div className="flex flex-col space-y-2">
            <h6 className="footer-heading">ABOUT</h6>

            {Links.map((link) => (
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
          {/* Products */}
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
        {/* Social Icons */}
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
  );
};

export default Footer;
