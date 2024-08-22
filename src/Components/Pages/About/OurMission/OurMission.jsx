import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import image5 from '../../../../assets/images/aboutimg/img3.png';
import { FaArrowRight } from "react-icons/fa";
const OurMission = () => {
    return (
        <div className='flex justify-between my-40'>
            <div className='flex-1'>
                <img className='rounded-2xl   ml-8' src={image5} alt="" />
            </div>
            <div className='flex-1 flex flex-col justify-between gap-[200px'>
                <div>
                    <h1 className='flex items-center bg-[#EEEFF1] w-fit rounded-full px-4 py-2 gap-2 text-[14px] font-medium'><IoPersonSharp className='text-[#FFFFFFF5] bg-[#A4A6B0] text-3xl rounded-full p-[6px]'></IoPersonSharp> Our Mission</h1>
                    <h1 className='max-w-[507px] text-5xl font-medium mt-6'>We have only one goal: To help you find your dream home</h1>
                </div>
                <div className='flex flex-col justify-between gap-[24px]'>
                    <p className='max-w-[480.098px]'>Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.</p>
                    <button

                        className="px-4 py-2 w-fit text-base font-medium rounded-full flex items-center  gap-3  bg-[#990A05] text-white "
                    >
                       Start exploring  <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OurMission;