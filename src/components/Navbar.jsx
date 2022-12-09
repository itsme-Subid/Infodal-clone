import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10">
        <div className="bg-white z-10 shadow-md w-full flex justify-between px-4 py-2">
          <div className="lhs w-36 h-16 flex gap-6">
            <img
              src="https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f6b0a682.png&w=640&q=75"
              alt="logo"
            />
            <button className="dropdown-button relative transition-all text-white bg-primary md:w-auto rounded font-medium px-4 my-2 text-center flex items-center gap-2 uppercase">
              <div>Explore</div>
              <BsChevronDown />
              <div className="dropdown hidden absolute top-12 left-0 h-fit p-4 text-sm font-normal bg-white rounded text-black/80 whitespace-nowrap shadow">
                <ul>
                  <li>
                    <a href="/">Live 1:1 Interactive Courses</a>
                  </li>
                  <li>
                    <a href="/">Video Courses</a>
                  </li>
                  <hr />
                  <li>
                    <a href="/">All Categories</a>
                  </li>
                  <li>
                    <a href="/">Free Courses</a>
                  </li>
                  <li>
                    <a href="/">Request a Server</a>
                  </li>
                  <li>
                    <a href="/">Career Path</a>
                  </li>
                  <li>
                    <a href="/">Request a Course</a>
                  </li>
                  <li>
                    <a href="/">Become an Instructor</a>
                  </li>
                  <li>
                    <a href="/">About Us/Contact Us</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <div className="rhs flex gap-6 font-medium">
            <button className="login-button text-primary uppercase">
              Login
            </button>
            <button className="signup-button uppercase text-white bg-primary px-4 my-2 rounded">
              Sign Up
            </button>
            <button className="dropdown-button relative uppercase border-2 border-primary px-4 my-2 rounded">
              Select Currency - USD
              <div className="dropdown hidden absolute top-12 left-0 h-fit p-4 text-sm font-normal bg-white rounded text-black/80 whitespace-normal shadow">
                <ul className="text-center">
                  <li>
                    <div className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center">
                      INR - Indian Rupees
                    </div>
                  </li>
                  <li>
                    <div className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center">
                      USD - US Dollars
                    </div>
                  </li>
                  <li>
                    <div className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center">
                      EUR - Euro
                    </div>
                  </li>
                  <li>
                    <div className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center">
                      GBP - British Pound Sterling
                    </div>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className="falseElement h-20"></div>
    </>
  );
};

export default Navbar;
