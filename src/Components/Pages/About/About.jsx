import React, { useEffect, useState } from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import image1 from "../../../assets/images/aboutimg/img1.png";
import image2 from "../../../assets/images/aboutimg/img2.png";
import OurValue from './OurValue/OurValue';
import OurMission from './OurMission/OurMission';
import OurBlog from './OurBlog/OurBlog';
import Faq1 from './FAQ/Faq1';
import OurTeam from './OurTeam/Ourteam';

const About = () => {
  useEffect(() => {
    // Function to scroll to the element with the hash ID
    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    const timer = setTimeout(() => {
      scrollToHash();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const [activeButton, setActiveButton] = useState("cta1");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className='bg-[#FAFAFB] p-4 lg:p-0'>
      <div className='mb-[56px] '>
        <Navbar2 />
      </div>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row md:flex-col flex-col items-center justify-center'>
          <h2 className='lg:text-7xl md:text-3xl text-2xl font-medium max-w-[613px]'>Marblestone Property Group</h2>
          <div className='ml-8'>
            <p className='text-[16px] leading-[150%] my-6 max-w-[585px]'>
              At Marblestone Property Group, we are committed to transforming real estate experiences through innovative solutions and exceptional service. Our expertise spans residential, commercial, and industrial properties, ensuring we meet the diverse needs of our clients.
            </p>
            <div className='flex lg:gap-4 justify-evenly md:justify-evenly lg:justify-start'>
              <button
                onClick={() => handleButtonClick('cta1')}
                className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 ${activeButton === 'cta1' ? 'bg-[#990A05] text-white' : 'text-black'}`}
              >
                Our Vision
                {
                  activeButton === "cta1" ? (
                    <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                  ) : (
                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                  )
                }
              </button>
              <button
                onClick={() => handleButtonClick('cta2')}
                className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 ${activeButton === 'cta2' ? 'bg-[#990A05] text-white' : 'text-black'}`}
              >
                Our History
                {
                  activeButton === "cta2" ? (
                    <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                  ) : (
                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                  )
                }
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-14 flex flex-col md:flex-col lg:flex-row w-fit gap-6  mx-auto  lg:mb-20 mb-5'>
        <div className=' flex flex-col items-center'>
          <img className=' lg:h-[443px] rounded-xl ' src={image1} alt="Property 1" />
          <div className='flex mt-4 lg:gap-8 md:text-center lg:text-left text-center'>
            <div className='max-w-[200px] '>
              <h5 className='text-[18px] font-medium'>Properties Managed</h5>
              <p className='text-7xl font-medium'>10k<span className='text-[#A4A6B0]'>+</span></p>
              <p className='text-[#464851]'>We have successfully managed over 10,000 properties, delivering consistent value to our clients.</p>
            </div>
            <div className='max-w-[200px]'>
              <h5 className='text-[18px] font-medium'>Happy Clients</h5>
              <p className='text-7xl font-medium'>500<span className='text-[#A4A6B0]'>+</span></p>
              <p className='text-[#464851]'>Over 500 satisfied clients trust Marblestone for their property management needs.</p>
            </div>
          </div>
        </div>
        <div>
          <img className='rounded-xl lg:h-[662px]' src={image2} alt="Property 2" />
        </div>
      </div>
      <div className='container mx-auto'>
        <OurValue />
        <OurMission />
        <OurBlog />
        <Faq1></Faq1>
        <OurTeam></OurTeam>
      </div>
    </div>
  );
}

export default About;
