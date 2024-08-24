import React, { useEffect, useState } from 'react';
import banner1 from '../../../../assets/images/tabimage/banner2.png';
import arrow from './../../../..//assets/logo/Element.png';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCallSharp } from 'react-icons/io5';

const Marketing = () => {
    const [agent, setAgent] = useState([]);
    useEffect(() => {
        fetch("user.json")
            .then(res => res.json())
            .then(data => {
                const user = data.find(
                    (user) => user.position === "Commercial Real Estate Specialist");
                setAgent(user);
            }
            )
    }, [])

    console.log(agent);

    return (
        <div className='bg-[#FAFAFB]'>
            <div className='flex flex-col lg:flex-row  items-center lg:p-0 text-center lg:text-left px-16  lg:items-start justify-between lg:mt-[100px] lg:mb-12 mb-4 mt-2'>
                <h3 className='lg:text-7xl text-3xl font-medium'>Marketing</h3>
                <p className='lg:max-w-[472.098px] lg:text-base text-sm mt-3 font-normal'>We offer a full range of property management services tailored to you as an investor, homeowner, or landlord. We have an extensive portfolio of single family homes, 2,3,4, flats in the south Chicago area.</p>
            </div>
            <img className='lg:mb-[120px]' src={banner1} alt="" />
            <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-6 pb-7'>
                <div className='bg-white lg:shadow-sm shadow-lg rounded-xl lg:p-8 px-3 py-2 mt-3 lg:mt-0 flex flex-col gap-4'>
                    <h4 className=' lg:text-3xl text-2xl font-medium'>Dedicated Leasing Specialist</h4>
                    <p>During the leasing process you will work with an assigned leasing professional whose only goal is to get your property marketed and get it rented quickly. During this time, you can expect us to be checking on your property and showing it to prospective tenants, as well as updating the listing on various websites, answering potential tenant questions and communicating with you. Our team will ensure that your property is presented in its best light online and in person to get you a great tenant.</p>
                </div>
                <div className='bg-white lg:shadow-sm shadow-lg rounded-xl lg:p-8 px-3 py-2 mt-3 lg:mt-0 flex flex-col gap-4'>
                    <h4 className=' lg:text-3xl text-2xl font-medium'>Professional Rental Market Analysis</h4>
                    <p>Pricing the home correctly is one of the most important factors in getting it rented quickly. Overpricing the home will cause the property to rent less quickly, costing you time and money.

                        We start with a competitive rental price analysis which combines market data with our professional knowledge of current market conditions to give you the most accurate rental price possible. This will get the home rented fast and for the most that the
                        market will bear.</p>
                </div>
                <div className='bg-white lg:shadow-sm shadow-lg rounded-xl lg:p-8 px-3 py-2 mt-3 lg:mt-0 flex flex-col gap-4'>
                    <h4 className=' lg:text-3xl text-2xl font-medium'>Professional Photos and Video Tours</h4>
                    <p>If your property doesn’t look good online then prospective tenants will not want to want to come view it in person. We take professional photos and video tours of our homes - In our experience properties that have professional photos get rented much faster.</p>
                </div>
                <div className='bg-white lg:shadow-sm shadow-lg rounded-xl lg:p-8 px-3 py-2 mt-3 lg:mt-0 flex flex-col gap-4'>
                    <h4 className=' lg:text-3xl text-2xl font-medium'>Online Advertising Exposure</h4>
                    <p>We market your property through our property management software called Appfolio. It then syndicates the listing out to several websites, including all the popular rental sites like Zillow and Trulia.</p>
                    <div className="">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                            <span className="hidden sm:block">Get Started</span>
                            <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-5xl font-medium text-center'>Behind Marketing</h3>
                <p className='text-center max-w-[716px] mx-auto my-3'>
                    Effective marketing is more than just promoting a product or service; it involves a deep understanding of the market, customer behavior, and strategic planning. Successful marketing strategies are built on thorough research and analysis, creative thinking, and a clear understanding of your target audience. From crafting compelling messages to choosing the right channels and measuring results, every aspect of marketing plays a crucial role in driving brand awareness and business growth.
                </p>

                <div className='bg-white text-center lg:text-left lg:px-16 lg:py-10 py-5 cursor-pointer hover:shadow-2xl hover:shadow-green-100 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  lg:mt-10 duration-300  px-5 shadow-lg w-fit mx-auto rounded-xl  flex flex-col lg:flex-row  items-center lg:gap-28 gap-4 '>
                    <div className='flex flex-col items-center lg:items-start lg:gap-4'>
                        <img className='rounded-full shadow-xl h-28 w-28' src={agent.profile_picture} alt="" />
                        <h4 className='text-2xl font-medium'>{agent.name}</h4>
                        <div className='text-xl text-[#A4A6B0] flex items-center gap-2'><AiOutlineMail ></AiOutlineMail>{agent.email}</div>
                        <div className='text-xl text-[#A4A6B0] flex items-center gap-2'><IoCallSharp ></IoCallSharp >{agent.phone}</div>
                    </div>
                    <hr className='border border-[#D2D2D5]  lg:h-52 w-full lg:w-0' />
                    <div className='max-w-[340px]'>
                        <h5 className='text-2xl font-medium mb-5'>Get in touch with the agent</h5>
                        <p>{agent.about_me}</p>
                    </div>
                </div>
                <div>
                    <p className='h-10'></p>
                </div>
            </div>
        </div>
    );
}


export default Marketing;