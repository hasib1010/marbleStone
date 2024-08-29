import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import image5 from '../../../../assets/images/aboutimg/img3.png';
import { FaArrowRight } from "react-icons/fa";

const OurMission = () => {
    return (
        <div className='flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:my-40'>
            <div className='flex-1'>
                <img 
                    className='rounded-2xl lg:ml-8 lg:mx-0 mx-auto w-fit transition-transform transform hover:scale-105'
                    src={image5} 
                    alt="Mission Image" 
                />
            </div>
            <div className='flex-1 flex flex-col items-center lg:items-start justify-between lg:gap-[200px] gap-5'>
                <div>
                    <h1 className='flex mx-auto lg:mx-0 items-center bg-[#EEEFF1] w-fit rounded-full px-4 py-2 gap-2 text-[14px] font-medium'>
                        <IoPersonSharp className='text-[#FFFFFFF5] bg-[#A4A6B0] text-3xl rounded-full p-[6px] transition-transform transform hover:scale-105' />
                        Our Mission
                    </h1>
                    <h1 className='max-w-[507px] lg:text-5xl text-center lg:text-left text-3xl font-medium mt-6'>
                        We have only one goal: To help you find your dream home
                    </h1>
                </div>
                <div className='flex flex-col justify-between gap-[24px]'>
                    <p className='max-w-[480.098px]'>
                        At Marblestone Property Group, our mission is to make your dream home a reality. We are dedicated to providing personalized real estate solutions that meet your unique needs. Whether you're buying, selling, or investing, we strive to offer unparalleled service and expertise every step of the way. Your perfect home is our priority.
                    </p>
                    <button
                        className="px-4 py-2 w-fit mx-auto lg:mx-0 mb-4 text-base font-medium rounded-full flex items-center gap-3 bg-[#990A05] text-white transition-transform transform hover:scale-105 hover:bg-[#d72d2a]"
                    >
                        Start exploring <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl transition-transform transform hover:translate-x-1' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OurMission;
