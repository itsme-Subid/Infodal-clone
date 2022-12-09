import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiUserVoiceFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

const VideoCourse = () => {
  let courseElements = [
    {
      id: 1,
      title: "Python Programming in a Nutshell",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(19).png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 2,
      title: "SalesForce Administrator",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(16).png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 3,
      title: "Python Programming in a Nutshell",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(19).png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 4,
      title: "SalesForce Administrator",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(16).png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 5,
      title: "Python Programming in a Nutshell",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(19).png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 6,
      title: "SalesForce Administrator",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(16).png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 7,
      title: "Python Programming in a Nutshell",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(19).png&w=1920&q=75",
      star: 4,
      numRating: 184,
      duration: "30h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
    {
      id: 8,
      title: "SalesForce Administrator",
      src: "https://www.infodal.com/_next/image?url=https%3A%2F%2Finfodalstorage.blob.core.windows.net%2Fassets%2Fassets%2FCourseImage%2520(16).png&w=1920&q=75",
      star: 4,
      numRating: 74,
      duration: "10h",
      feature: "Recorded Video Course",
      price: {
        current: "USD 4",
        old: "USD 12",
      },
    },
  ];
  return (
    <div className="LiveCourse p-8">
      <div className="course-head flex flex-col gap-4">
        <h2 className="text-primary font-semibold text-xl">VIDEO COURSES</h2>
        <p>
          One or two liner title: It helps the designer plan where the content
          will sit.
        </p>
        <p>
          Sub-content: It helps in creating drafts of the content on the pages
          of the website. It originates from the Latin text but is seen as
          gibberish.
        </p>
      </div>
      <div className="course-body grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
        {courseElements.map((course) => (
          <Course key={course.id} element={course} />
        ))}
      </div>
      <div className="foot mx-auto w-fit">
        <button className="px-4 py-2 text-white bg-primary rounded shadow">
          <a href="#">Explore All Live Courses</a>
        </button>
      </div>
    </div>
  );
};

const Course = ({ element }) => {
  let { title, src, star, numRating, duration, feature, price } = element;
  return (
    <div className="card rounded bg-slate-100 shadow-md overflow-hidden">
      <div className="card-img-top w-full overflow-hidden relative">
        <img src={src} alt="" />
        <div className="bg-secondary flex text-white justify-center items-center w-fit absolute bottom-1 right-0 p-0.5 rounded">
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
          <span>
            {price.current} <s className="line-through">{price.old}</s>
          </span>
        </p>
        <div className="wrapper">
          <div className="card-footer w-full bg-secondary rounded py-1.5 my-2 text-center mt-auto">
            <a
              href="google.com"
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

export default VideoCourse;
