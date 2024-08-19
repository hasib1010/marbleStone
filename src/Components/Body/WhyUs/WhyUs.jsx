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
        <div className='flex flex-col md:flex-col lg:flex-row items-center mb-20 px-4 md:px-0'>
            <div className='flex flex-col lg:gap-4 p-0 '>
                <div className='flex items-center gap-2 bg-[#EEEFF1] w-fit px-3 py-2 rounded-full mx-auto md:mx-0'>
                    <FaSearch className='text-2xl p-2 bg-slate-300 rounded-full text-white' />
                    <p className='text-base font-medium'>Why us?</p>
                </div>
                <h4 className='text-3xl md:text-5xl font-medium leading-snug text-center md:text-left'>
                    Innovation defines our <br className='hidden md:block' /> real estate
                </h4>
                <p className='text-center md:text-left'>
                    Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa.
                </p>
                <ul className='list-none flex flex-col gap-2'>
                    <li className='cursor-pointer flex items-center gap-2 text-lg md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='w-6 h-6' /> Green building materials and eco-friendly architecture.
                    </li>
                    <li className='cursor-pointer flex items-center gap-2 text-lg md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='w-6 h-6' /> Integration of IoT and smart home systems.
                    </li>
                    <li className='cursor-pointer flex items-center gap-2 text-lg md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='w-6 h-6' /> Designed to foster social interaction and connectivity.
                    </li>
                    <li className='cursor-pointer flex items-center gap-2 text-lg md:text-xl font-medium'>
                        <img src={unknown2} alt="Checkbox" className='w-6 h-6' /> High-end finishes and attention to detail in every project.
                    </li>
                </ul>
            </div>
            <div className='relative w-full  mt-8 md:mt-0'>
                <img className='w-full rounded-lg' src={image} alt="Property" />
                <div className='absolute lg:top-1/2 md:top-1/2 top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:p-4 p-5 md:p-1 '>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl shadow-xl'>
                        <MdBathtub className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> <span className='text-sm md:text-base font-medium'>2 Bathrooms</span>
                    </p>
                </div>
                <div className='absolute lg:top-1/2 md:top-5 top-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:p-4 p-5 md:p-1'>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl shadow-xl'>
                        <IoCarSport className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> <span className='text-sm md:text-base font-medium'>4 Parking zones</span>
                    </p>
                </div>
                <div className='absolute lg:bottom-1/4 bottom-1/4 left-1/4 md:bottom-11 md:-top-20 transform -translate-x-1/2 translate-y-1/2 lg:p-4 p-5 md:p-1'>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl shadow-xl'>
                        <FaBed className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> <span className='text-sm md:text-base font-medium'>4 Bedrooms</span>
                    </p>
                </div>
                <div className='absolute bottom-1/4 right-1/4 md:bottom-3 w-fit md:left-6 transform translate-x-1/2 -translate-y-1/2 lg:p-4 p-5 md:p-1'>
                    <p className='flex items-center lg:gap-3 gap-2 bg-white lg:p-3 rounded-xl shadow-xl'>
                        <LuScale3D className='text-white bg-slate-400 text-2xl md:text-3xl p-1 rounded-full' /> <span className='text-sm md:text-base font-medium'>4 Floors</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
