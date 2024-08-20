import React, { useState } from 'react';
import Navbar2 from './Components/Navbar/Navbar2';
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import image1 from "./assets/images/aboutimg/img1.png"
import image2 from "./assets/images/aboutimg/img2.png"
import { FaStar } from "react-icons/fa6";
const About = () => {

    const [activeButton, setActiveButton] = useState("cta1");


    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div>
            <div className='mb-[56px]'>
                <Navbar2 />
            </div>
            <div className='max-w-[1400px] mx-auto'>
                <div className='flex items-center'>
                    <h2 className='text-[72px] font-medium'>Marblestone Property Group</h2>
                    <div className='ml-8'>
                        <p className='text-[16px] leading-[150%] mb-6 '>
                            Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                        </p>
                        <div className='flex gap-4'>
                            <button
                                onClick={() => handleButtonClick('cta1')}
                                className={`px-4 py-2 text-base font-medium rounded-full flex items-center  gap-3 ${activeButton === 'cta1' ? '  bg-[#990A05] text-white' : ' text-black'}`}
                            >
                                CTA 1
                                {/* icon 1 */}
                                {
                                    activeButton == "cta1" ? (
                                        <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>) :
                                        (<MdKeyboardArrowRight>  </MdKeyboardArrowRight>)
                                }
                            </button>
                            <button
                                onClick={() => handleButtonClick('cta2')}
                                className={`px-4 py-2 text-base font-medium rounded-full flex items-center  gap-3 ${activeButton === 'cta2' ? '  bg-[#990A05] text-white' : ' text-black'}`}
                            >
                                CTA 2 {
                                    activeButton == "cta2" ? (<FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>) :
                                        (<MdKeyboardArrowRight></MdKeyboardArrowRight>)
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-14 flex w-full justify-evenly mb-20'>
                <div className='px-6 flex flex-col items-center'>
                    <img src={image1} alt="" />
                    <div className='flex gap-8'>
                        <div className='max-w-[215px]'>
                            <h5 className='text-[18px] font-medium'>Stat 1</h5>
                            <p className='text-7xl font-medium'>10k<span className='text-[#A4A6B0]'>+</span></p>
                            <p className='text-[#464851]'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                        <div className='max-w-[215px]'>
                            <h5 className='text-[18px] font-medium'>Stat 2</h5>
                            <p className='text-7xl font-medium'>500<span className='text-[#A4A6B0]'>+</span></p>
                            <p className='text-[#464851]'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className='text-center mt-8'>
                About
            </div>
        </div>
    );
}

export default About;
