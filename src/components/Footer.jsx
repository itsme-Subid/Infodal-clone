import React from "react";

const Footer = () => {
  return (
    <div className="Footer bg-secondary">
      <div className="row grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-white px-6 py-16 gap-4">
        <div className="col flex sm:justify-center">
          <img
          className="w-72"
            src="https://www.infodal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f6b0a682.png&w=640&q=75"
            alt="logo"
          />
        </div>
        <div className="col font-semibold lg:text-left sm:text-center">
          <div className="col-header">
            <h2 className="text-xl mb-2">Company</h2>
          </div>
          <div className="col-body text-sm">
            <ul>
              <li>
                <a
                  href="http://github.com/itsme-subid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us/Contact Us
                </a>
              </li>
              <li>
                <a
                  href="http://linkedin.com/in/itsme-subid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Course
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/ItsmeSubid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refund and Cancellation
                </a>
              </li>
              <li>
                <a
                  href="http://instagram.com/itsme-subid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/itsme-subid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/itsme-subid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shipping & Delivery policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col lg:text-left sm:text-center">
          <div className="col-header">
            <h2 className="text-xl mb-2 font-semibold">Trending Courses</h2>
          </div>
          <div className="col-body text-sm">
            <ul>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>AWS Certified Solutions Architect Certification</li>
              <li>DevOps Training</li>
            </ul>
          </div>
        </div>
        <div className="col text-center">
          <div className="col-header">
            <h2 className="text-xl mb-2 font-semibold">Reach Out to Us</h2>
          </div>
          <div className="col-body text-sm flex flex-col gap-4">
            <span>
              H-749 DIV Tech park, Republic of Whitefield, Bangalore - 560066
            </span>
            <span>
              <a href="https://wa.me/+447454666010?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F">
                +44 7454 666010
              </a>
            </span>
            <span>
              <a href="https://wa.me/+919302584342?text=Hi%2C+I+am+exploring+some+Courses+on+Infodal%2C+will+you+be+able+to+assist+me%3F">
                +91 93025 84342
              </a>
            </span>
            <span>
              <a
                className="hover:underline font-semibold"
                href="mailto:contact@infodal.com"
              >
                contact@infodal.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="credits text-center bg-black text-white p-4 text-sm">
        © 2022 itsme-Subid. All Rights Reserved. The certification names are the
        trademarks of their respective owners.
      </div>
    </div>
  );
};

export default Footer;
