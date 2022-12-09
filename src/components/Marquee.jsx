import React from "react";

const Marquee = () => {
  let marqueeElements = [
    {
      id: 1,
      name: "aws",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.9e2490d8.png&w=1080&q=75",
    },
    {
      id: 2,
      name: "azure",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.81c263cc.png&w=1080&q=75",
    },
    {
      id: 3,
      name: "linux",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.02b42867.png&w=1080&q=75",
    },
    {
      id: 4,
      name: "aws",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.9e2490d8.png&w=1080&q=75",
    },
    {
      id: 5,
      name: "azure",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.81c263cc.png&w=1080&q=75",
    },
    {
      id: 6,
      name: "linux",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.02b42867.png&w=1080&q=75",
    },
    {
      id: 7,
      name: "aws",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.9e2490d8.png&w=1080&q=75",
    },
    {
      id: 8,
      name: "azure",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.81c263cc.png&w=1080&q=75",
    },
    {
      id: 9,
      name: "linux",
      src: "https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.02b42867.png&w=1080&q=75",
    },
  ];
  return (
    <div className="marquee-wrapper my-16 w-screen flex flex-col gap-8 overflow-hidden">
      <h2 className="text-center text-primary text-3xl font-medium">
        Unlimited Access to 250+ Courses and 1800+ hands on labs
      </h2>
      <div className="marquee-content overflow-hidden">
        {marqueeElements.map((element) => {
          return (
            <div key={element.id} className="marquee-element">
              <img src={element.src || ""} alt={element.name || ""} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
