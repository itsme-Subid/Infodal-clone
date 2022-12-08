import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-2">
      <div className="bg-white z-2 shadow-md w-full flex justify-between px-4 py-2">
        <div className="lhs w-36 h-16 flex gap-6">
          <img
            src="https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f6b0a682.png&w=640&q=75"
            alt="logo"
          />
          <button className="dropdown-button text-white bg-primary md:w-auto rounded font-medium px-4 my-2 text-center flex items-center gap-2 uppercase">
            <span className="">Explore</span>
            <BsChevronDown />
          </button>
        </div>
        <div className="rhs flex gap-6 font-medium">
          <button className="login-button text-primary uppercase">Login</button>
          <button className="signup-button uppercase text-white bg-primary px-4 my-2 rounded">
            Sign Up
          </button>
          <button className="currency-button uppercase border-2 border-primary px-4 my-2 rounded">
            Select Currency - USD
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
