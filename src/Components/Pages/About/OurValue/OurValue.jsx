import React from 'react';
import { FaStar, FaArrowRight, FaLightbulb } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

const OurValue = () => {
    return (
        <div className='flex lg:flex-row md:flex-col flex-col items-center lg:items-start md:items-center mb-20'>
            <div className='flex-1 lg:block md:flex sm:flex md:flex-col flex-col items-center lg:text-start md:text-center text-center'>
                <h5 className='flex mx-auto lg:mx-0 items-center text-base font-medium gap-2 bg-[#EEEFF1] w-fit px-3 py-2 rounded-full'>
                    <FaStar className='p-[6px] rounded-full text-3xl text-white bg-[#A4A6B0]'></FaStar> Our Values
                </h5>
                <div className='flex flex-col gap-4 mt-4'>
                    <h4 className='text-5xl font-medium mb-4'>Core Values <br />(GO MPG)</h4>
                    <p className='max-w-[470px]'>
                        At Marblestone Property Group, our values drive everything we do. These core principles
                        guide our team in delivering excellence, fostering growth, and maintaining a positive and
                        action-oriented culture.
                    </p>
                    <button
                        className="px-4 py-2 w-fit mx-auto lg:mx-0 md:mx-auto mb-5 text-base font-medium rounded-full flex items-center gap-3 bg-[#990A05] text-white transition-transform transform hover:bg-[#d72d2a] hover:scale-105"
                    >
                        Learn More <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                    </button>
                </div>
            </div>
            <div className='flex-1'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <div className='flex flex-col items-center lg:items-start max-w-[300px] hover:scale-105 transition-transform'>
                        <FaLightbulb className='text-3xl my-2 text-[#990A05] hover:text-[#d72d2a] transition-colors' />
                        <h2 className='text-2xl font-medium hover:text-[#990A05] transition-colors'>Growth-Oriented</h2>
                        <p className='lg:text-left text-center mt-3'>
                            We foster a culture of continuous improvement, where learning and development are key
                            to our success. We empower our employees to reach their full potential through ongoing
                            training, mentorship, and skill-building opportunities.
                        </p>
                    </div>
                    <div className='flex flex-col items-center lg:items-start max-w-[300px] hover:scale-105 transition-transform'>
                        <FaStar className='text-3xl my-2 text-[#990A05] hover:text-[#d72d2a] transition-colors' />
                        <h2 className='text-2xl font-medium hover:text-[#990A05] transition-colors'>Mastery</h2>
                        <p className='lg:text-left text-center mt-3'>
                            Excellence is our standard. We encourage our team to strive for mastery in their roles,
                            continually enhancing their skills and knowledge to deliver the best results for our clients
                            and prepare for future challenges.
                        </p>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <div className='flex flex-col items-center lg:items-start max-w-[300px] hover:scale-105 transition-transform'>
                        <GiNetworkBars className='text-3xl my-2 text-[#990A05] hover:text-[#d72d2a] transition-colors' />
                        <h2 className='text-2xl font-medium hover:text-[#990A05] transition-colors'>Positivity</h2>
                        <p className='lg:text-left text-center mt-3'>
                            A positive mindset is key to unlocking potential and seizing opportunities. We cultivate a
                            supportive environment that promotes optimism, enthusiasm, and a can-do attitude in
                            everything we do.
                        </p>
                    </div>
                    <div className='flex flex-col items-center lg:items-start max-w-[300px] hover:scale-105 transition-transform'>
                        <RiTeamFill className='text-3xl my-2 text-[#990A05] hover:text-[#d72d2a] transition-colors' />
                        <h2 className='text-2xl font-medium hover:text-[#990A05] transition-colors'>Get Shit Done</h2>
                        <p className='lg:text-left text-center mt-3'>
                            Action over intention. We believe in executing our plans with precision and urgency. When
                            we commit to something, we ensure it gets done—quickly and effectively. That's the MPG
                            way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurValue;
