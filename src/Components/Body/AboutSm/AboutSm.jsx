import React from 'react';
import img1 from "./../../../assets/logo/Company.png"
import img2 from "./../../../assets/logo/Agency.png"
import img3 from "./../../../assets/logo/Venture.png"
import img4 from "./../../../assets/logo/Enterprise.png"
import img5 from "./../../../assets/logo/Institute.png"
import img6 from "./../../../assets/logo/Application.png"
import Carusel from './Slide';
import Marquee from "react-fast-marquee";

const AboutSm = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8">
      <p className="text-center text-[#A4A6B0]">As seen on:</p>

      <Marquee>
        <div className="mt-6 flex flex-wrap justify-center lg:gap-14 md:gap-8 gap-4">
          <li className="list-none">
            <img className="w-[80px] lg:w-auto" src={img1} alt="" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-auto" src={img2} alt="" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-auto" src={img3} alt="" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-auto" src={img4} alt="" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-auto" src={img5} alt="" />
          </li>
          <li className="list-none">
            <img className="w-[80px] lg:w-auto" src={img6} alt="" />
          </li>
        </div>

      </Marquee>

      <div className="mt-[40px] md:mt-[80px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h2 className="text-lg sm:text-xl font-medium">Our Project</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium">
              10k<span className="text-[#A4A6B0]">+</span>
            </h1>
            <p className="font-normal text-sm sm:text-base">
              Lorem ipsum dolor sit amet <br /> consectetur fermentum
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-medium">Our Customer</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium">
              200<span className="text-[#A4A6B0]">k</span>
            </h1>
            <p className="font-normal text-sm sm:text-base">
              Lorem ipsum dolor sit amet <br /> consectetur fermentum
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Carusel />
        </div>
      </div>
    </div>

  );
}

export default AboutSm;