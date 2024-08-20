import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
const OurValue = () => {
    return (
        <div>
            <div>
                <h5 className='flex items-center text-base font-medium gap-2 bg-[#EEEFF1] w-fit px-3 py-2 rounded-full'><FaStar className='p-[6px] rounded-full text-3xl text-white bg-[#A4A6B0]'></FaStar> Our values</h5>
                <div>
                    <h4 className='text-5xl font-medium mb-4'>Core Values <br />(GO MPG)</h4>
                    <p>Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.</p>
                    <button

                        className="px-4 py-2 text-base font-medium rounded-full flex items-center  gap-3  bg-[#990A05] text-white "
                    >
                        CTA 1    <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                    </button>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
}


export default OurValue;