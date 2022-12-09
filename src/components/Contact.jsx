import React from "react";

const Contact = () => {
  return (
    <div className="Contact grid lg:grid-cols-2 md:grid-cols-1">
      <div className="thumbnail p-4 text-white flex flex-col gap-4">
        <h2 className="my-2 text-3xl font-semibold relative before:content-[''] before:w-16 before:h-1.5 before:bg-primary before:absolute before:-bottom-4">
          Request a Demo from <span className="text-primary">Infodal</span>
        </h2>
        <p>
          Get a FREE demo for the your preferred IT course and get a feel, how
          the live training at Infodal works.
        </p>
        <p>
          You can fill up the form below with appropriate module name and your
          email address, our team will get in touch with you within 24 hours
          along with the details of the demo.
        </p>
      </div>
      <div className="form p-4 flex justify-center items-center w-full h-full">
        <form className="flex flex-col gap-4 w-full bg-gray-100 rounded p-4 shadow-md">
          <h2 className="text-center">
            <span className="text-primary">REQUEST A DEMO</span>
          </h2>
          <div className="flex flex-col gap-2 bg-gray-200 rounded p-4 relative">
            <input type="text" name="name" id="name" className="w-full transition-all"/>
            <label className="absolute font-thin transition-all" htmlFor="name">Name*</label>
          </div>
          <div className="flex flex-col gap-2 bg-gray-200 rounded p-4 relative">
            <input type="email" name="email" id="email" className="w-full transition-all"/>
            <label className="absolute font-thin transition-all" htmlFor="email">Email*</label>
          </div>
          <div className="flex flex-col gap-2 bg-gray-200 rounded p-4 relative">
            <input type="tel" name="phone" id="phone" className="w-full transition-all"/>
            <label className="absolute font-thin transition-all" htmlFor="phone">Phone*</label>
          </div>
          <div className="flex flex-col gap-2 bg-gray-200 rounded p-4 relative">
            <input type="text" name="courseName" id="courseName" className="w-full transition-all"/>
            <label className="absolute font-thin transition-all" htmlFor="courseName">Course Name*</label>
          </div>
          <button className="submit text-white bg-primary rounded font-medium px-4 py-2 gap-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
