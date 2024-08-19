import React from 'react';
import unknown from "./../../../assets/logo/blank.png";
import image from "./../../../assets/images/banner2.png";
import image2 from "./../../../assets/images/phone.png";
import arrow from './../../../assets/logo/Element.png';

const AboutUs = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center md:justify-between items-center h-auto md:h-[800px] lg:mb-52 md:mb-52 mb-7 px-4 md:px-0'>
            <div className='relative w-full mt-3 md:w-[600px]'>
                <img className='w-full rounded-xl' src={image} alt="Main Banner" />
                <img className='absolute top-16 right-0 md:right-[-10px] w-[100px] md:w-[200px]' src={image2} alt="Phone Illustration" />
            </div>
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <div className='flex items-center gap-3 bg-[#EEEFF1] w-fit px-3 py-2 rounded-full mx-auto md:mx-0'>
                    <img className='w-12 bg-slate-400 p-2 rounded-full' src={unknown} alt="Icon" />
                    <p className='text-base font-medium'>About Us</p>
                </div>
                <h3 className='text-3xl md:text-5xl font-medium'>
                    The heart of real <br className='md:hidden' /> estate innovation
                </h3>
                <p className='w-full md:w-[422px] mx-auto md:mx-0'>
                    Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum.
                </p>
                <div className='flex justify-center md:justify-start items-center gap-4'>
                    <button className='flex items-center gap-2 pl-4 pr-2 py-2 rounded-3xl text-[16px] font-medium leading-5 bg-[#990A05] text-white'>
                        <img className='bg-white p-2 rounded-full' src={arrow} alt="Arrow Icon" />
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
