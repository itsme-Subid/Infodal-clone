import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsPlayBtnFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const Hero = () => {
  let handleBorder = (e) => {
    if (
      e.target.parentElement.parentElement.classList.contains(
        "border-primary"
      ) &&
      e.type === "blur"
    ) {
      e.target.parentElement.parentElement.classList.remove("border-primary");
    } else {
      e.target.parentElement.parentElement.classList.add("border-primary");
    }
  };
  return (
    <div className="bg-hero-img w-full bg-cover bg-center md:h-[80vh] h-[40vh] relative">
      <div className="main absolute top-0 left-0 w-full h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl md:text-4xl text-white font-medium">
            Learn, Upskill & Certify
          </h1>
          <div className="search-field flex">
            <div className="input-field m-3 bg-white align-center w-[70vw] rounded border-2 transition-colors">
              <div className="wrapper flex justify-center gap-4 items-center mx-4">
                <BsSearch />
                <input
                  placeholder="What do you want to learn today?"
                  type="text"
                  className="text-lg w-full my-4 outline-none"
                  onFocus={handleBorder}
                  onBlur={handleBorder}
                />
              </div>
            </div>
            <button className="my-3 uppercase text-white bg-primary px-4 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="banner absolute bottom-0 left-0 w-full bg-black/75 flex justify-evenly h-[10vh] py-8 pointer-events-none">
        <div className="text-xl text-primary flex items-center gap-2 text-center">
          <IoIosPeople />
          <span>
            5000+ <br />
            <small>Learners</small>
          </span>
        </div>
        <div className="text-xl text-primary flex items-center gap-2 text-center">
          <BsPlayBtnFill />
          <span>
            250+ <br />
            <small>Courses</small>
          </span>
        </div>
        <div className="text-xl text-primary flex items-center gap-2 text-center">
          <BiWorld />
          <span>
            56+ <br />
            <small>Countries</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
