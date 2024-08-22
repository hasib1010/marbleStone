import React from 'react';
import unknown2 from "./../../../assets/logo/Checkbox.png";
import image from './../../../assets/images/img.png';
import { MdBathtub } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { LuScale3D } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const WhyUs = () => {
    return (
        <div className='flex flex-col md:flex-col lg:flex-row lg:gap-12 lg:justify-between mt-24 items-center mb-10 px-4 md:px-0'>
            <div className='flex flex-col lg:gap-6 p-4 lg:w-1/2'>
                <div className='flex w-fit items-center gap-2 bg-[#EEEFF1] py-2 px-4 rounded-full'>
                    <FaSearch className='text-3xl p-2 w-fit bg-slate-300 rounded-full text-white' />
                    <p className='text-base font-medium'>Why Us?</p>
                </div>
                <h4 className=' text-xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mt-4'>
                    Innovation Defines Our <br className='hidden md:block' /> Real Estate
                </h4>
                <p className='text-sm lg:text-sm text-gray-600 mt-2 lg:w-2/3'>
                    Discover how our commitment to innovation and quality sets us apart. We use cutting-edge technology and sustainable practices to create spaces that inspire and exceed expectations.
                </p>
                <ul className='list-none flex flex-col gap-4 mt-4'>
                    <li className='flex items-center gap-3 text-sm md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='lg:w-6 lg:h-6' />
                        Green building materials and eco-friendly architecture.
                    </li>
                    <li className='flex items-center gap-3 text-sm md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='lg:w-6 lg:h-6' />
                        Integration of IoT and smart home systems.
                    </li>
                    <li className='flex items-center gap-3 text-sm md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='lg:w-6 lg:h-6' />
                        Designed to foster social interaction and connectivity.
                    </li>
                    <li className='flex items-center gap-3 text-sm md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='lg:w-6 lg:h-6' />
                        High-end finishes and attention to detail in every project.
                    </li>
                </ul>
            </div>
            <div className='relative w-fit h-fit lg:mt-8 mt-2 md:mt-5 lg:fit'>
                <img className='w-fit rounded-lg' src={image} alt="Property" />
                <div className='absolute lg:top-1/2 lg:left-1 md:top-1/2 top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:p-4 p-5 md:p-1'>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl md:p-2 p-1  shadow-xl'>
                        <MdBathtub className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> 
                        <span className='text-sm md:text-base font-medium'>2 Bathrooms</span>
                    </p>
                </div>
                <div className='absolute lg:-bottom-40 lg:left-32 md:top-5 top-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:p-4 p-5 md:p-1'>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl  md:p-2 p-1 shadow-xl'>
                        <IoCarSport className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> 
                        <span className='text-sm md:text-base font-medium'>4 Parking zones</span>
                    </p>
                </div>
                <div className='absolute lg:-bottom-96 lg:left-96 w-fit bottom-1/4 left-1/4 md:bottom-11 md:-top-20 transform -translate-x-1/2 translate-y-1/2 lg:p-4 p-5 md:p-1'>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl md:p-2 p-1  shadow-xl'>
                        <FaBed className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> 
                        <span className='text-sm md:text-base font-medium'>4 Bedrooms</span>
                    </p>
                </div>
                <div className='absolute lg:top-20 lg:left-[95%]  lg:w-36 sm:right-72 bottom-2/3 md:bottom-3   md:left-6 h-fit md:p-1  lg:p-1'>
                    <p className='flex lg:p-2 items-center lg:gap-2 gap-2 bg-white rounded-xl md:p-2 p-1  shadow-xl'>
                        <LuScale3D className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' />
                        <span className='text-sm md:text-base font-medium'>2,553 sqtf</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
