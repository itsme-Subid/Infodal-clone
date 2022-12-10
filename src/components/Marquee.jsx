import React from "react";

const Marquee = () => {
  let images = [
    "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.9e2490d8.png&w=1080&q=75",
    "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.81c263cc.png&w=1080&q=75",
    "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.02b42867.png&w=1080&q=75",
  ];
  let marqueeElements = [
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
    {
      name: "aws",
      src: images[0],
    },
    {
      name: "azure",
      src: images[1],
    },
    {
      name: "linux",
      src: images[2],
    },
  ];
  return (
    <div className="marquee my-16 w-screen flex flex-col gap-8 overflow-hidden">
      <h2 className="text-center text-primary text-3xl font-medium">
        Unlimited Access to 250+ Courses and 1800+ hands on labs
      </h2>
      <div className="marquee-content">
        {marqueeElements.map((element, key) => {
          return (
            <div key={key} className="marquee-element">
              <img src={element.src || ""} alt={element.name || ""} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
