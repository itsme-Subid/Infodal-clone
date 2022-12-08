import React from "react";

const Whatsapp = () => {
  return (
    <>
      <div className="fixed left-4 bottom-4 z-10">
        <img
          className="w-16 drop-shadow-md"
          src="https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhatsapp.0c40bca6.png&w=1080&q=75"
          alt="whatsapp"
        />
      </div>
      <div className="fixed right-4 bottom-4 z-10">
        <div className="wrapper w-16 h-16 drop-shadow-md bg-chatIconColor rounded-full grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            role="img"
            className="tawk-min-chat-icon w-8 fill-white"
            alt="Chat icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Whatsapp;
