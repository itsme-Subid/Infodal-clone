import React from "react";

const Register = () => {
  return (
    <div className="register bg-secondary md:flex md:flex-row sm:flex-col">
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
  );
};

export default Register;
