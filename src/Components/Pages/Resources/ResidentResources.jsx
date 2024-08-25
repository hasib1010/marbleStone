import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Ensure this path is correct
import r from "../../../assets/images/resourse/r.png"; // Ensure this path is correct
import { TiAttachment } from 'react-icons/ti';
import { FaDownload } from 'react-icons/fa';
import arrow from '../../../assets/logo/Element.png';
function ResidentResources() {
    return (
        <div className='bg-[#FAFAFB] w-[98%] mx-auto'>
            <div className='bg-[#14161C] p-10 md:p-0 lg:p-0 w-full mx-auto rounded-2xl h-fit'>
                <Navbar />
                <div className='lg:py-16 lg:mb-24 pb-3'>
                    <h4 className='max-w-[854.75px] mx-auto text-center my-2 text-white text-3xl md:text-4xl lg:text-7xl font-medium'>
                        Resident Resources
                    </h4>
                    <p className='max-w-[982px] mx-auto text-center my-2 text-[#A4A6B0] text-sm md:text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                    </p>
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className='lg:text-5xl text-3xl mt-4 lg:mt-0 lg:mb-11 font-medium'>Tenant Resources</h3>
                <div className='flex flex-col lg:flex-row  justify-between lg:my-10 my-0 p-6   gap-16'>
                    <div className='  flex flex-col  gap-8  '>

                        <div className='flex flex-col gap-6 '>
                            <h4 className='text-2xl font-medium'>Prospective Tenants</h4>
                            <h6 className='text-xl font-medium'>Find Your Perfect Home</h6>
                            <p className='max-w-[650px]'>If you are in the market for your perfect rental home, you have come to the right place. As a prospective tenant, we can help you through the process of finding and applying for the home of your dreams. Once you are a resident, we have a suite of tools to make your rental experience the best it can be.</p>
                        </div>
                        <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white ">
                            <span className=" ">View Properties</span>
                            <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </button>
                    </div>
                    <div className='max-w-[589px]   '>
                        <h5 className='text-3xl font-medium mb-6'>Resources</h5>
                        <div className='flex-wrap flex lg:w-[589px] md:max-w-[589px] gap-6'>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5   text-black bg-[#EAF4FF]">
                                <span className=" ">Qualifying</span>
                            </button>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5  text-black bg-[#EAF4FF] ">
                                <span className=" ">Apply Online</span>
                            </button>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5   text-black bg-[#EAF4FF]">
                                <span className=" ">Sample Lease Agreement</span>
                            </button>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5  text-black bg-[#EAF4FF] ">
                                <span className=" ">Sample Lease Agreement</span>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row-reverse flex-col-reverse  justify-between my-10 p-6   gap-16'>
                    <div className='  flex flex-col  gap-8  '>

                        <div className='flex flex-col gap-6 '>
                            <h4 className='text-2xl font-medium'>Current Residents</h4>
                            <h6 className='text-xl font-medium'>Resources to Make Your Stay Comfortable</h6>
                            <p className='max-w-[650px]'>If you are in the market for your perfect rental home, you have come to the right place. As a prospective tenant, we can help you through the process of finding and applying for the home of your dreams. Once you are a resident, we have a suite of tools to make your rental experience the best it can be.</p>
                        </div>
                        <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white ">
                            <span className=" ">Resident Portal</span>
                            <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </button>
                    </div>
                    <div className='max-w-[589px]   '>
                        <h5 className='text-3xl font-medium mb-6'>Link & Resources</h5>
                        <div className='flex-wrap flex lg:w-[389px] md:max-w-[589px] gap-6'>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5   text-black bg-[#EAF4FF]">
                                <span className=" ">Pay Online</span>
                            </button>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5  text-black bg-[#EAF4FF] ">
                                <span className=" ">Maintenance Request</span>
                            </button>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5   text-black bg-[#EAF4FF]">
                                <span className=" ">Contact Us</span>
                            </button>


                        </div>
                    </div>
                </div>

                <div className='max-w-[588px] flex flex-col items-center mx-auto gap-8 px-24 py-20 shadow-lg rounded-xl mb-10'>
                    <h4 className='lg:text-5xl md:text-3xl text-2xl  font-medium '>Have a Question?</h4>
                    <div className='flex flex-col lg:flex-row md:flex-row mt-3 items-center gap-6'>
                        <a href="/about/#ownerFaq" className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                            <span>Owner FAQs</span>
                            <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </a>

                        <a href='/about'>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white ">
                                <span className=" ">Contact Us</span>
                                <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                            </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentResources;