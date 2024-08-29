import React from 'react';
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { PiPlus } from 'react-icons/pi'; 
const AgentCard = ({ agent }) => {
    console.log(agent);
    const {  name, position, profile_picture } = agent;
    return (
        <div    className="">
            <div className="relative flex flex-col items-center gap-6 bg-white shadow-sm px-28 py-10 rounded-xl min-h-[380px]  animate-fadeIn">
                <img className="rounded-full" src={profile_picture} alt="" />
                <h3 className="lg:text-2xl text-xl text-center text-[#464851] font-medium">{name}</h3>
                <p className="max-w-52 text-center text-base text-[#464851] font-normal mx-auto">{position}</p>
                <div className="flex gap-5">
                    <IoMailOutline className="text-2xl cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform duration-200"></IoMailOutline>
                    <IoMdCall className="text-2xl cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform duration-200"></IoMdCall>
                </div>
                <PiPlus className="text-white bg-black text-4xl p-1 rounded-full absolute top-5 right-7 cursor-pointer "></PiPlus>
            </div>
        </div>

    );
}


export default AgentCard;