import React, { useEffect, useState } from 'react';
import banner from '../../../../assets/images/tabimage/banner4.png'; 
import arrow from './../../../..//assets/logo/Element.png';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCallSharp } from 'react-icons/io5';

const RentCollection = () => {
    const [agent, setAgent] = useState([]);
    useEffect(() => {
        fetch("user.json")
            .then(res => res.json())
            .then(data => {
                const user = data.find(
                    (user) => user.position === "Real Estate Agent");
                setAgent(user);
            }
            )
    }, [])
    return (
        <div>
            <div className='flex flex-col lg:flex-row  items-center lg:p-0 text-center lg:text-left px-16  lg:items-start justify-between lg:mt-[100px] lg:mb-12 mb-4 mt-2'>
                <h3 className='lg:text-7xl text-3xl font-medium'>Rent Collection</h3>
                <p className='lg:max-w-[472.098px] lg:text-base text-sm mt-3 font-normal'>Collecting rent is easy if you have the perfect tenant who pays on time! But what if they don’t? Having someone in your corner who knows tenant law and the proper notices to send is critical!</p>
            </div>
            <img className='mb-12' src={banner} alt="" />
            <div className='mb-10 '>

                <div className='p-8  flex flex-col justify-between'>
                    <p className='mb-10'>If a tenant has gone beyond the grace period of the lease we provide them with a late rent notice, where we collect the appropriate late fees along with the normal rent amount. Worse case, if we have a tenant that does stop paying rent, we will assist in the eviction process and re-renting the property quickly.

                        We make paying rent easy for tenants with the online tenant portal that can be accessed 24/7. We encourage tenants to pay online, which means we can pay you out faster.</p>
                    <button className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5         bg-[#990A05] text-white">
                        <span className="hidden sm:block">Get Started</span>
                        <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                    </button>
                </div>

            </div>
            <div>
                <h3 className='text-5xl font-medium text-center'>Behind Rent Collections</h3>
                <p className='text-center max-w-[716px] mx-auto my-3'>
                    Rent collection is a crucial aspect of property management that involves the process of collecting monthly rental payments from tenants. Efficient rent collection ensures a steady cash flow for property owners and helps maintain the financial stability of the property. It includes setting clear payment terms, using reliable collection methods, and addressing any payment issues promptly. Implementing effective rent collection practices, such as offering various payment options and sending timely reminders, can enhance tenant satisfaction and minimize late payments.
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

RentCollection.propTypes = {};

export default RentCollection;