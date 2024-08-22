import React from 'react';
import { FaUsersGear } from "react-icons/fa6";
import FaqSection from './Faq';

const OurProcess = () => {
    return (
        <div className='px-4 md:px-8 lg:px-5 py-2'>
            <div className='flex items-center gap-4 md:gap-5 bg-[#EEEFF1] w-fit px-3 py-2 rounded-full mx-auto'>
                <FaUsersGear className='text-xl lg:text-4xl md:text-2xl bg-slate-400 p-1 text-white rounded-full' />
                <p className='text-base md:text-lg font-medium'>Our Process</p>
            </div>
            <h3 className='text-xl md:text-2xl lg:text-5xl font-medium text-center my-4'>
                Find your dream house as easy as <br className='hidden md:hidden lg:block' /> 1, 2, 3
            </h3>
            <p className='text-base md:text-lg tracking-wider font-normal text-center w-2/3 md:w-4/5 lg:w-full mx-auto'>
            Discover how easy it is to find your ideal home. <br className='hidden md:hidden lg:block' /> Our streamlined process ensures a smooth and efficient experience, guiding you every step of the way.
            </p>
            <div className=''>
                <FaqSection />
            </div>
        </div>
    );
}

export default OurProcess;
