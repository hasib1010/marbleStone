import React, { useEffect, useState } from 'react';
import banner from '../../../../assets/images/tabimage/banner5.png';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import arrow from './../../../..//assets/logo/Element.png';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCallSharp } from 'react-icons/io5';
const Maintenance = () => {
    const [agent, setAgent] = useState([]);
    useEffect(() => {
        fetch("user.json")
            .then(res => res.json())
            .then(data => {
                const user = data.find(
                    (user) => user.position === "Senior Real Estate Agent");
                setAgent(user);
            }
            )
    }, [])
    return (
        <div>
            <div className='flex flex-col lg:flex-row  items-center lg:p-0 text-center lg:text-left px-16  lg:items-start justify-between lg:mt-[100px] lg:mb-12 mb-4 mt-2'>
                <h3 className='lg:text-7xl text-3xl font-medium'>Maintenance</h3>
                <p className='lg:max-w-[472.098px] lg:text-base text-sm mt-3 font-normal'>We strive to get your investment rented quickly, but feel it is important to get the RIGHT tenant versus the FAST tenant! Spending time up front and finding the BEST tenant for your rental creates a good experience all around, versus one that is stressful and frustrating.</p>
            </div>
            <img className='mb-12' src={banner} alt="" />
            <div className='mb-10 flex flex-col lg:flex-row gap-6'>
                <div className='p-8 bg-white shadow-sm rounded-xl'>
                    <p className='max-w-[524px]'>How this benefits you:</p>
                    <li className='flex items-start justify-start mt-4    gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        We offer quality repairs at competitive prices
                    </li>
                    <li className='flex items-start justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        You can rest easy knowing your home is protected nights, weekends and holidays
                    </li>
                    <li className='flex items-start justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Accurate billing so you can keep track of your investment
                    </li>
                    <li className='flex items-start justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Prompt response to protect your property and keep your tenants happy
                    </li>

                </div>
                <div className='p-8 bg-white shadow-sm rounded-xl flex flex-col justify-between'>
                    <p className='max-w-[524px]'>Vendor bills and receipts are emailed monthly with Owner Statements and are also available through our online Owner Portal.</p>
                    <button className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5         bg-[#990A05] text-white">
                        <span className="hidden sm:block">Get Started</span>
                        <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                    </button>
                </div>

            </div>
            <div>
                <h3 className='text-5xl font-medium text-center'>Behind the Maintenance Team</h3>
                <p className='text-center max-w-[716px] mx-auto my-3'>
                    The maintenance team plays a vital role in property management, ensuring that properties remain in excellent condition and addressing any issues that arise promptly. Their responsibilities include routine inspections, handling repair requests, performing preventive maintenance, and ensuring compliance with safety standards. A well-functioning maintenance team not only preserves the property's value but also enhances tenant satisfaction by providing timely and effective solutions to maintenance concerns. Effective communication, organization, and a proactive approach are key to a successful maintenance operation.
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


export default Maintenance;