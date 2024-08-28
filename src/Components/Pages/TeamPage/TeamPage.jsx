import React from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { FaPeopleGroup } from 'react-icons/fa6';   
import Team from '../About/OurTeam/Team';

function TeamPage() {
    return (
        <div className='container mx-auto'>
            <Navbar2></Navbar2>
            <div className='my-14'>
                <h5 className='text-2xl flex items-center gap-2 font-medium w-fit mx-auto bg-[#EEEFF1] px-2 py-1 rounded-full'> <FaPeopleGroup className='bg-[#A4A6B0] p-1 text-white rounded-full text-3xl' /> Our team/agents</h5>
                <h5 className='text-7xl font-medium text-center mt-4'>Meet our team/agents</h5>
                <p className='text-center mt-4 mb-12'>We can use this page for both, one for only agents and one for the MPG team.</p> 
            </div>
            <div>
                 <Team></Team>
            </div>
        </div>
    )
}

export default TeamPage;