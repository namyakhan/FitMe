import React, { useState } from "react";
import Button from "./Button";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Nav = () => {
  let Links = [
    { name: "", link: "/" },
    { name: "Home", link: "/" },
    { name: "Trainers", link: "/" },
    { name: "Programs", link: "/" },
    { name: "Memberships", link: "/" },
    { name: "Testimonials", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="drop-shadow-md hover:drop-shadow-lg w-full left-0 font-sora sticky top-0 ">
      <div className="md:flex items-center justify-between bg-beige py-[10px] md:px-[50px] px-[20px]">
        <div
          className="font-bold text-[25px] lg:text-[40px] cursor-pointer flex items-center  
      text-gray-800"
        >
          <h1 className="cursor-pointer">
            <span className="text-purple">Fit</span>Me
          </h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-charcoal absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open ? <MenuIcon className="h-7" /> : <XIcon className="h-7" />}
        </div>

        <ul
          className={`md:flex md:items-center space-x-5 lg:space-x-8 md:pb-0 pb-12 absolute md:static bg-beige md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-[15px] lg:text-[18px] md:my-0 my-7 text-charcoal font-medium  hover:text-purple  "
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <Button>Sign In</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
