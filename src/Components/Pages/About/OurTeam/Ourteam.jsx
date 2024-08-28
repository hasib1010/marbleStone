import React from 'react';
import { RiGroup2Fill } from "react-icons/ri";
import Team from './Team';
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <div>
            <h1 className='flex items-center justify-center gap-1 bg-[#EEEFF1] w-fit mx-auto px-4 py-[6px] mb-4 text-xl font-medium rounded-full'>
                <RiGroup2Fill className='p-1 text-4xl bg-[#A4A6B0] rounded-full text-white' />
                Our Team
            </h1>
            <h4 className='text-5xl font-medium text-center mb-4'>Meet Our Dedicated Team</h4>
            <p className='max-w-[562.047px] mx-auto text-center mb-8'>
                Our team of experienced professionals is committed to providing exceptional service and expertise. Get to know the people who are passionate about helping you find the perfect property and making your real estate journey smooth and successful.
            </p>
            <div className='flex justify-end'>
                <div></div>
                <Link to={'/team'} className='mr-20 underline underline-offset-2 font-medium   '>See Our full team</Link> </div>
            <Team />
        </div>
    );
}

export default OurTeam;
