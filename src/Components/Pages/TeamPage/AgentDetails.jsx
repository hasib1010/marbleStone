import React, { useEffect, useState } from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { Link, useParams } from 'react-router-dom';
import cover from "../../../assets/images/cover.png"
import arrow from './../../../assets/logo/Element.png';
import { MdOutlineMail } from 'react-icons/md';
import { FaKey, FaPhone } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { RiSuitcase2Fill } from 'react-icons/ri';
import { GoHome, GoPlus } from 'react-icons/go';
import image1 from "./../../../assets/images/propertycard/1.png"
import image2 from "./../../../assets/images/propertycard/2.png"
import BlogSection from '../../Body/Blog/Blog';

function AgentDetails() {
    const { id } = useParams();
    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/user.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Fetched data:", data); // Log data to debug
                const foundAgent = data.find(agent => agent.id === parseInt(id)); // Replace "desired_id" with the actual id you need
                console.log(foundAgent);

                setAgent(foundAgent);
                setLoading(false);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;



    return (
        <div>
            <Navbar2 />
            <div className='container mx-auto'>
                <div className='flex items-center flex-col lg:flex-row gap-5 justify-evenly lg:mb-20 lg:mt-10'>
                    <div className='border w-fit p-3 rounded-3xl shadow-lg'>
                        <div className='w-fit h-fit relative mb-20 '>
                            <img className='rounded-t-3xl' src={cover} alt="" />
                            <div className='flex items-end lg:gap-40 lg:justify-center gap-10 absolute -bottom-12 left-2'>
                                <img className='rounded-full w-[100px] h-[97.857px]' src={agent.profile_picture} alt="" />
                                <button className="flex items-center gap-2 h-fit px-4 py-2 rounded-3xl lg:text-[14px]  w-fit font-medium leading-5 bg-[#990A05] text-white">
                                    <span className=" block">Contact me</span>
                                    <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                                </button>
                            </div>
                        </div>
                        <div className='pl-3 flex flex-col gap-8'>
                            <h4 className='text-2xl font-medium'>{agent.name}</h4>
                            <h4 className='text-base font-medium'>@{agent.username}</h4>
                            <div>
                                <div className="flex items-center gap-2 text-base"><MdOutlineMail className='text-xl' />
                                    <p>Email address</p>
                                </div>
                                <p className='pl-7 font-medium'>{agent.email}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-base"><FaPhone className='text-xl' />
                                    <p>Phone number</p>
                                </div>
                                <p className='pl-7 font-medium'>{agent.phone}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-base"><IoLocationSharp className='text-xl' />
                                    <p>Location</p>
                                </div>
                                <p className='pl-7 font-medium'>{agent.location}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-base"><RiSuitcase2Fill className='text-xl' />
                                    <p>Position</p>
                                </div>
                                <p className='pl-7 font-medium'>{agent.position}</p>
                            </div>
                            <p>marblestonepg.com/{agent.username}</p>
                        </div>
                    </div>
                    <div  className='text-center lg:text-left '>
                        <h4 className='text-4xl font-medium'>About me</h4>
                        <p className='max-w-[653px] mt-4'>{agent.about_me}</p>
                        <h4 className='text-4xl font-medium mt-6'>My experience</h4>
                        <div className='max-w-[653px]'>
                            {agent.experience.map(experience => <div className='mb-20 mt-10'>
                                <h3 className='text-2xl font-medium'>{experience?.company}</h3>
                                <p className='text-xl mt-2' >{experience?.role}</p>
                                <p className='text-sm font-medium text-gray-400'>{experience?.years}</p>
                                <p className='text-base'>{experience?.details}</p>
                            </div>)}

                        </div>
                    </div>
                </div>
                <div className='bg-[#14161C] lg:px-[100px] lg:py-[120px] text-white rounded-2xl px-2 py-2  my-10 lg:my-0'>
                    <h4 className='text-xl flex items-center gap-2 bg-[#202127] text-white font-medium w-fit px-2 py-1 rounded-full'><GoHome className='bg-[#464851] rounded-full p-2 text-4xl'></GoHome> All properties</h4>
                    <div className='flex items-end justify-between px-4 mt-5'>
                        <h4 className='lg:text-5xl max-w-[50%]  font-medium'>Properties in charge of {agent.name}</h4>
                        <Link to={"/rentals"} className='underline font-medium'>Browse all properties {">"}</Link>
                    </div>
                    <div className='flex justify-between flex-col lg:flex-row  my-10 px-2'>
                        <Link className='' to={`/rentals/1`}>
                            <div className=' '>
                                <div className=" rounded-lg   lg:mx-3   cursor-pointer overflow-hidden py-2 lg:px-4 relative   transition-transform duration-300 ease-in-out transform lg:hover:scale-105 lg:hover:shadow-lg">
                                    <img
                                        src={image1}
                                        alt=""
                                        className="rounded-xl  w-full  object-cover  transition-opacity duration-300 ease-in-out hover:opacity-80"
                                    />
                                    <div>
                                        <span className="bg-black text-white absolute top-5 left-8 text-sm md:text-base font-medium py-1 px-5 rounded-full flex items-center">

                                            <span className='flex items-center gap-2 x'><FaKey></FaKey>Rent</span>
                                        </span>
                                        <span className='absolute top-5 right-8'><GoPlus className='bg-white text-black rounded-full text-4xl'></GoPlus></span>
                                        <h2 className="text-lg mt-2 md:text-xl font-bold mb-2">Luxury Loft in Chicago</h2>
                                        <div className="flex my-4 md:flex-row lg:flex-row justify-between md:items-center">
                                            <p className="text-white text-sm gap-3 font-medium flex items-center">
                                                <IoLocationSharp className='text-xl' /> Chicago, IL
                                            </p>
                                            <div className='hidden'>
                                                { }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className='' to={`/rentals/2`}>
                            <div className=' '>
                                <div className=" rounded-lg   lg:mx-3   cursor-pointer overflow-hidden py-2 lg:px-4 relative   transition-transform duration-300 ease-in-out transform lg:hover:scale-105 lg:hover:shadow-lg">
                                    <img
                                        src={image2}
                                        alt=""
                                        className="rounded-xl  w-full  object-cover  transition-opacity duration-300 ease-in-out hover:opacity-80"
                                    />
                                    <div>
                                        <span className="bg-black text-white absolute top-5 left-8 text-sm md:text-base font-medium py-1 px-5 rounded-full flex items-center">

                                            <span className='flex items-center gap-2 x'><FaKey></FaKey>Rent</span>
                                        </span>
                                        <span className='absolute top-5 right-8'><GoPlus className='bg-white text-black rounded-full text-4xl'></GoPlus></span>
                                        <h2 className="text-lg mt-2 md:text-xl font-bold mb-2">Luxury Loft in Chicago</h2>
                                        <div className="flex my-4 md:flex-row lg:flex-row justify-between md:items-center">
                                            <p className="text-white text-sm gap-3 font-medium flex items-center">
                                                <IoLocationSharp className='text-xl' /> Chicago, IL
                                            </p>
                                            <div className='hidden'>
                                                { }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <BlogSection></BlogSection>

            </div>
        </div>
    );
}

export default AgentDetails;
