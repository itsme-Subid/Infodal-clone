import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";

const Register = () => {
  return (
    <div className="Register">
      <div className="register1 bg-secondary md:flex md:flex-row sm:flex-col">
        <div className="register__left md:w-1/2 p-8 sm:w-full">
          <div className="register__left__content text-white flex flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Learn the latest digital skills for tomorrow's jobs
            </h2>
            <p>
              Learning without borders Begin, Switch or Enhance your career with
              more than 250+ online and self-paced courses, professional
              certificates, and job placements. Hassle free training & learning
              experience with world class trainers and mentorship.
            </p>
            <button className="uppercase text-white bg-primary px-6 py-3 w-fit rounded">
              Register Now
            </button>
          </div>
        </div>
        <div className="register__right md:w-1/2 sm:w-full">
          <img
            className="w-full h-full md:max-h-[40vh] object-cover"
            src="https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrade-img.3fb6432a.png&w=1920&q=75"
            alt="img"
          />
        </div>
      </div>
      <div className="register2 bg-secondary md:flex md:flex-row sm:flex-col">
        <div className="register__left p-8 w-full">
          <div className="register__left__content text-white flex flex-col gap-6">
            <h2 className="relative text-3xl font-bold text-primary before:content-[''] before:w-16 before:h-1.5 before:bg-primary before:absolute before:-bottom-4">
              Why chose Infodal?
            </h2>
            <div className="points grid place-content-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-4 gap-4">
              <div className="point flex flex-col gap-4 bg-point-img h-72 bg-cover bg-center">
                <FaMapMarkerAlt className="text-4xl text-primary" />
                <h3 className="text-xl font-bold">
                  Learn Anything, Anytime Anywhere
                </h3>
                <p>
                  Leading learning platform. With hundreds of expertly-taught
                  courses,thousands of hours of instructional content and
                  personal learning fromthe experts. Learn anything, anytime,
                  anywhere.
                </p>
              </div>
              <div className="point flex flex-col gap-4 bg-point-img h-72 bg-cover bg-center">
                <SlScreenDesktop className="text-4xl text-primary" />
                <h3 className="text-xl font-bold">Become job ready</h3>
                <p>
                  Keep your job-hunting skills sharp with up-to-date industry
                  knowledge and help boost your CV. Nurture digital skills with
                  bit-sized short courses, or go a step further with expert
                  mentorship and live training.
                </p>
              </div>
              <div className="point flex flex-col gap-4 bg-point-img h-72 bg-cover bg-center">
                <FaMapMarkerAlt className="text-4xl text-primary" />
                <h3 className="text-xl font-bold">
                  Learn Anything, Anytime Anywhere
                </h3>
                <p>
                  Leading learning platform. With hundreds of expertly-taught
                  courses,thousands of hours of instructional content and
                  personal learning fromthe experts. Learn anything, anytime,
                  anywhere.
                </p>
              </div>
              <div className="point flex flex-col gap-4 bg-point-img h-72 bg-cover bg-center">
                <SlScreenDesktop className="text-4xl text-primary" />
                <h3 className="text-xl font-bold">Become job ready</h3>
                <p>
                  Keep your job-hunting skills sharp with up-to-date industry
                  knowledge and help boost your CV. Nurture digital skills with
                  bit-sized short courses, or go a step further with expert
                  mentorship and live training.
                </p>
              </div>
              <div className="point flex flex-col gap-4 bg-point-img h-72 bg-cover bg-center">
                <FaMapMarkerAlt className="text-4xl text-primary" />
                <h3 className="text-xl font-bold">
                  Learn Anything, Anytime Anywhere
                </h3>
                <p>
                  Leading learning platform. With hundreds of expertly-taught
                  courses,thousands of hours of instructional content and
                  personal learning fromthe experts. Learn anything, anytime,
                  anywhere.
                </p>
              </div>
              <div className="point flex flex-col gap-4 bg-point-img h-72 bg-cover bg-center">
                <SlScreenDesktop className="text-4xl text-primary" />
                <h3 className="text-xl font-bold">Become job ready</h3>
                <p>
                  Keep your job-hunting skills sharp with up-to-date industry
                  knowledge and help boost your CV. Nurture digital skills with
                  bit-sized short courses, or go a step further with expert
                  mentorship and live training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
