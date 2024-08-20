import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
const OurValue = () => {
    return (
        <div className='flex mb-20'>
            <div className='flex-1 '>
                <h5 className='flex items-center text-base font-medium gap-2 bg-[#EEEFF1] w-fit px-3 py-2 rounded-full'><FaStar className='p-[6px] rounded-full text-3xl text-white bg-[#A4A6B0]'></FaStar> Our values</h5>
                <div className='flex flex-col gap-4 mt-4'>
                    <h4 className='text-5xl font-medium mb-4'>Core Values <br />(GO MPG)</h4>
                    <p className='max-w-[470px]'>Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.</p>
                    <button

                        className="px-4 py-2 w-fit text-base font-medium rounded-full flex items-center  gap-3  bg-[#990A05] text-white "
                    >
                        CTA 1    <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                    </button>
                </div>
            </div>
            <div className='flex-1 '>
                <div className='grid grid-cols-2 gap-10 items-center'>
                    <div>
                        <FaLightbulb className='text-3xl my-2'></FaLightbulb>
                        < h2 className='text-2xl font-medium' >Growth-Oriented</h2>
                        <p>We embrace a culture of continuous learning and development where everyone can
                            maximize their lives to their full potential, regardless of where their paths take them. MPG
                            helps its employees attain their personal and professional goals by providing opportunities
                            for training, mentorship, skill-building, and financial literacy workshops.</p>
                    </div>
                    <div>
                        <FaStar className='text-3xl my-2'></FaStar>
                        <h2 className='text-2xl font-medium' >Mastery</h2>
                        <p>At MPG, we don’t expect perfection, but we don’t half-ass anything, either. We encourage
                            everyone to maximize their potential by improving their skills, knowledge, and expertise
                            within their respective roles and preparing for their next ones.</p>
                    </div>
                </div>
                <br />
                <hr className='' />
                <br />
                <div className='grid grid-cols-2 gap-10 items-center'>
                    <div>
                        <GiNetworkBars className='text-3xl my-2'></GiNetworkBars>
                        <h2  className='text-2xl font-medium'>Positivity</h2>
                        <p>We keep our glasses half-full, thank you very much. We know that a constructive mindset
                            seizes opportunities in life and ultimately achieves more. Plus, it’s just more fun to be around
                            positive people. That’s why we cultivate a supportive and uplifting environment by fostering
                            optimism and enthusiasm.</p>
                    </div>
                    <div>
                        <RiTeamFill className='text-3xl my-2'></RiTeamFill>
                        < h2  className='text-2xl font-medium'>Get Shit Done</h2>
                        <p>Actions speak louder than words and good intentions. “Gonna-dos” don’t cut it here. When
                            we say we’re going to do something, we get shit done. Pronto. That’s the MPG Way.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OurValue;