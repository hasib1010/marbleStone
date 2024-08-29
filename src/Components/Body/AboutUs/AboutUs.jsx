import React from 'react';
import unknown from "./../../../assets/logo/blank.png";
import image from "./../../../assets/images/banner2.png";
import image2 from "./../../../assets/images/phone.png";
import arrow from './../../../assets/logo/Element.png';

const AboutUs = () => {
    return (
        <div className='  flex flex-col-reverse items-center  lg:flex-row justify-between lg:gap-40 lg:mt-20 px-4 lg:px-0'>
            {/* Image Section */}
            <div className='relative  mt-3 md:w-[600px]  w-fit'>
                <img className=' rounded-xl shadow-lg lg:w-full md:w-[70%] w-[80%] mx-auto' src={image} alt="Main Banner" />
                <img className='absolute lg:top-10 md:top-2/4 top-10 lg:-right-10 right-5  md:right-[-10px] lg:w-[200px]  md:w-[100px] w-[90px] shadow-md' src={image2} alt="Phone Illustration" />
            </div>

            {/* Content Section */}
            <div className='flex flex-col gap-4 text-center md:text-left  flex-1   mt-6 w-fit'>
                <div className='flex items-center gap-3 bg-[#EEEFF1] w-fit px-4 py-2 rounded-full mx-auto md:mx-0'>
                    <img className='w-8 bg-slate-400 p-2 rounded-full' src={unknown} alt="Icon" />
                    <p className='text-base font-medium text-gray-700'>About Us</p>
                </div>
                <h3 className='text-xl lg:text-5xl md:text-2xl max-w-  font-semibold text-gray-800'>
                The heart of real estate innovation
                </h3>
                <p className='text-base md:text-lg   text-gray-600 leading-relaxed'>
                    At the forefront of real estate, we combine cutting-edge technology with unparalleled expertise to deliver exceptional service. Our mission is to redefine the real estate experience through innovation, transparency, and client-centric solutions.
                    <br /><br />
                    <div className='flex justify-center md:justify-start items-center gap-4'>
                        <button className='flex items-center gap-2 px-4 py-2 rounded-3xl text-[16px] font-medium leading-5 bg-[#990A05] text-white hover:bg-[#b02e1e] transition-colors'>
                            <img className='bg-white p-2 rounded-full' src={arrow} alt="Arrow Icon" />
                            <span>Learn More</span>
                        </button>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
