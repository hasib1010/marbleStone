import React, { useEffect, useState } from 'react';
import banner from '../../../../assets/images/tabimage/banner6.png';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import arrow from './../../../..//assets/logo/Element.png';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCallSharp } from 'react-icons/io5';

const FinancialReporting = () => {
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
    return (
        <div>
            <div className='flex flex-col lg:flex-row  items-center lg:p-0 text-center lg:text-left px-16  lg:items-start justify-between lg:mt-[100px] lg:mb-12 mb-4 mt-2'>
                <h3 className='lg:text-7xl text-3xl font-medium'>Financial Reporting</h3>
                <p className='lg:max-w-[472.098px] lg:text-base text-sm mt-3 font-normal'>We track your financials and reports to you monthly through our secure, advanced and fully automated web-based accounting system. With our detailed financial reporting tools, it's never been easier to keep tabs on your investment.</p>
            </div>
            <img className='mb-12' src={banner} alt="" />
            <div className='mb-10 flex flex-col lg:flex-row gap-6'>
                <div className='p-8 bg-white shadow-sm rounded-xl'>
                    <p className='max-w-[524px]'>How this benefits you:</p>

                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-3xl my-4'></IoIosCheckmarkCircle>
                        All reports and tracking are further available at all times through the Owner Portal – just login and go!
                    </li>
                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Convenience and self service for review of all statements
                    </li>
                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Download owner statements & income reports
                    </li>

                </div>
                <div className='p-8 bg-white shadow-sm rounded-xl flex flex-col just'>
                    <p className='max-w-[524px]'>Log into your owner portal to view statements & more, such as:</p>
                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Rent collection and processing
                    </li>
                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Payment of maintenance vendor bills
                    </li>
                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                        Payment of monthly items at the request of owners
                    </li>
                    <li className='flex items-center justify-start gap-1 font-normal mb-4 text-lg'><IoIosCheckmarkCircle className='text-3xl my-4'></IoIosCheckmarkCircle>
                        Owner statement and direct deposit by ACH processing to
                        your bank account
                    </li>
                </div>

            </div>
            <div>
                <h3 className='text-5xl font-medium text-center'>Behind the Finance Department</h3>
                <p className='text-center max-w-[716px] mx-auto my-3'>
                    The finance department is essential to the successful management of any property, overseeing the financial health and stability of operations. Their role involves budgeting, financial reporting, managing cash flow, and ensuring accurate accounting practices. They handle rent collections, expense tracking, and financial planning to optimize profitability and maintain fiscal responsibility. By analyzing financial data and generating insightful reports, the finance team helps guide strategic decision-making and ensures that resources are allocated efficiently. A strong finance department is crucial for maintaining financial transparency and supporting long-term property success.
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


export default FinancialReporting;