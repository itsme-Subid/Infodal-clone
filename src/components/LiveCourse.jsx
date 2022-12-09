import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiUserVoiceFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

const LiveCourse = () => {
  let courseElements = [
    {
      id: 1,
      title: "Financial Accounting and Reporting",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_live_FINANCIAL%2520ACCOUNTING%2520AND%2520REPORTING.png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 2,
      title: "Internet of Things (IoT) Basics",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_Video_Internet%2520of%2520Things%2520(IoT)%2520Basics.png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 3,
      title: "Financial Accounting and Reporting",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_live_FINANCIAL%2520ACCOUNTING%2520AND%2520REPORTING.png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 4,
      title: "Internet of Things (IoT) Basics",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_Video_Internet%2520of%2520Things%2520(IoT)%2520Basics.png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 5,
      title: "Financial Accounting and Reporting",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_live_FINANCIAL%2520ACCOUNTING%2520AND%2520REPORTING.png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 6,
      title: "Internet of Things (IoT) Basics",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_Video_Internet%2520of%2520Things%2520(IoT)%2520Basics.png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 7,
      title: "Financial Accounting and Reporting",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_live_FINANCIAL%2520ACCOUNTING%2520AND%2520REPORTING.png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Live 1 to 1 Interactive Course",
    },
    {
      id: 8,
      title: "Internet of Things (IoT) Basics",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2Fsmall_Video_Internet%2520of%2520Things%2520(IoT)%2520Basics.png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Live 1 to 1 Interactive Course",
    },
  ];
  return (
    <div className="LiveCourse p-8">
      <div className="course-head flex flex-col gap-4">
        <h2 className="text-primary font-semibold text-xl">
          LIVE INTERACTIVE COURSES
        </h2>
        <p>
          Take specialized courses with a live instructor to enhance your
          skills.
        </p>
        <p>
          You'll learn new skills in a specific area with our live 1:1
          instructor-led training. Take a series of in-depth classes to improve
          your practical skills. Get a recognized digital certificate and show
          potential employers your new skills and accomplishments.
        </p>
      </div>
      <div className="course-body grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
        {courseElements.map((course) => (
          <Course key={course.id} element={course} />
        ))}
      </div>
      <div className="foot mx-auto w-fit">
        <button className="px-4 py-2 text-white bg-primary rounded shadow">
          <a href="/">Explore All Live Courses</a>
        </button>
      </div>
    </div>
  );
};

const Course = ({ element }) => {
  let { title, src, star, numRating, duration, feature } = element;
  return (
    <div className="card rounded bg-slate-100 shadow-md overflow-hidden">
      <div className="card-img-top w-full overflow-hidden relative">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover bg-center"
        />
        <div className="bg-secondary flex text-white justify-center items-center w-fit absolute bottom-1 right-0.5 p-0.5 rounded">
          {star}
          <AiFillStar className="text-yellow-400" />
          {numRating}
        </div>
      </div>
      <div className="card-body pt-4 px-4 pb-2 h-fit flex flex-col">
        <h5 className="card-title text-xl font-medium line-limit overflow-hidden">
          <span>{title}</span>
        </h5>
        <p className="card-feature my-2 flex flex-col gap-2">
          <span className="flex gap-4 items-center text-black/75 font-semibold text-sm">
            <BiTimeFive className="text-black/90 text-lg" />
            {duration}
          </span>
          <span className="flex gap-4 items-center text-black/75 font-semibold text-sm">
            <RiUserVoiceFill className="text-black/90 text-lg" />
            {feature}
          </span>
        </p>
        <div className="wrapper">
          <div className="card-footer w-full bg-secondary rounded py-1.5 my-2 text-center mt-auto">
            <a
              href="http://github.com/itsme-subid"
              target="_blank"
              rel="noreferrer"
              className="card-button text-lg text-white"
            >
              View Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourse;
