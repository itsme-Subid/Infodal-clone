import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [currency, setCurrency] = useState("USD");
  let handleClick = (e) => {
    setCurrency(e.target.textContent.split(" ")[0]);
  };
  let handleHamburger = () => {
    document
      .querySelector(".hamburger .wrapper")
      .classList.toggle("translate-x-0");
  };
  let handleCurrency = () => {
    document
      .querySelector(".hamburger .wrapper .buttons .wrapper")
      .classList.toggle("translate-x-0");
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10">
        <div className="bg-white z-10 shadow-md w-full flex md:flex-row md:h-fit md:justify-between px-4 py-2">
          <div className="lhs w-36 h-16 flex gap-6 max-[740px]:justify-between max-[740px]:w-full">
            <span className="min-[740px]:hidden flex items-center">
              <GiHamburgerMenu className="text-2xl" onClick={handleHamburger} />
              <div className="hamburger">
                <div className="wrapper transition-transform -translate-x-full absolute top-20 left-0 h-screen w-screen p-4 font-semibold bg-white text-black whitespace-nowrap flex flex-col gap-4">
                  <div className="text-left flex justify-start">
                    <ul className="w-full">
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
                      <hr />
                    </ul>
                  </div>
                  <div className="buttons flex flex-col gap-2 mx-8">
                    <span
                      className="text-white bg-secondary w-full rounded px-4 py-2 text-center text-sm"
                      onClick={handleCurrency}
                    >
                      Select Currency - {currency}
                      <div className="wrapper transition-transform -translate-x-full absolute top-0 left-0 h-screen w-screen p-4 font-semibold bg-white text-black whitespace-nowrap flex flex-col gap-4">
                        <div className="text-left flex justify-center">
                          <ul
                            className="text-center w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCurrency();
                            }}
                          >
                            <li>
                              <div
                                className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                                onClick={(e) => {
                                  handleClick(e);
                                }}
                              >
                                INR - Indian Rupees
                              </div>
                            </li>
                            <li>
                              <div
                                className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                                onClick={(e) => {
                                  handleClick(e);
                                }}
                              >
                                USD - US Dollars
                              </div>
                            </li>
                            <li>
                              <div
                                className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                                onClick={(e) => {
                                  handleClick(e);
                                }}
                              >
                                EUR - Euro
                              </div>
                            </li>
                            <li>
                              <div
                                className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                                onClick={(e) => {
                                  handleClick(e);
                                }}
                              >
                                GBP - British Pound Sterling
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </span>
                    <span className="text-white bg-primary w-full rounded px-4 py-2 text-center text-sm">
                      Sign Up
                    </span>
                    <span className="text-white bg-primary w-full rounded px-4 py-2 text-center text-sm">
                      Login
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <img
              src="https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f6b0a682.png&w=640&q=75"
              alt="logo"
            />
            <button className="min-[740px]:hidden text-primary">
              <a
                rel="noopener noreferrer"
                href="https://www.infodal.com/search?query="
              >
                <BiSearch className="text-2xl" />
              </a>
            </button>
            <button className="dropdown-button relative max-[740px]:hidden transition-all text-white bg-primary md:w-auto rounded font-medium px-4 my-2 text-center flex items-center gap-2 uppercase">
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
          <div className="rhs flex gap-6 font-medium max-[740px]:hidden">
            <button className="login-button text-primary uppercase">
              Login
            </button>
            <button className="signup-button uppercase text-white bg-primary px-4 my-2 rounded">
              Sign Up
            </button>
            <button className="dropdown-button relative uppercase border-2 border-primary px-4 my-2 rounded">
              Select Currency - {currency}
              <div className="dropdown hidden absolute top-12 left-0 h-fit p-4 text-sm font-normal bg-white rounded text-black/80 whitespace-normal shadow">
                <ul className="text-center">
                  <li>
                    <div
                      className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                      onClick={handleClick}
                    >
                      INR - Indian Rupees
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                      onClick={handleClick}
                    >
                      USD - US Dollars
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                      onClick={handleClick}
                    >
                      EUR - Euro
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full py-2 px-3 border-[1px] border-gray-300 hover:border-primary transition-colors text-center"
                      onClick={handleClick}
                    >
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
