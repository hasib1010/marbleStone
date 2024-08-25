import React from 'react';
import Navbar from '../../Navbar/Navbar'; // Ensure this path is correct
import r from "../../../assets/images/resourse/r.png"; // Ensure this path is correct
import { TiAttachment } from 'react-icons/ti';
import { FaDownload } from 'react-icons/fa';
import arrow from '../../../assets/logo/Element.png';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div className='bg-[#FAFAFB] w-[98%] mx-auto'>
            <div className='bg-[#14161C] p-10 md:p-0 lg:p-0 w-full mx-auto rounded-2xl h-fit'>
                <Navbar />
                <div className='lg:py-16 lg:mb-24 pb-3'>
                    <h4 className='max-w-[854.75px] mx-auto text-center my-2 text-white text-3xl md:text-4xl lg:text-7xl font-medium'>
                        Owner Resources
                    </h4>
                    <p className='max-w-[982px] mx-auto text-center my-2 text-[#A4A6B0] text-sm md:text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                    </p>
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className='text-5xl mb-11 font-medium'>Info You Need</h3>
                <div className='flex  gap-6 justify-evenly my-10'>
                    <div className='  flex flex-col  gap-8 justify-between'>
                        <img className=' ' src={r} alt="Resource" />
                        <div className='flex flex-col gap-6 p-8 bg-white rounded-xl'>
                            <h4 className='text-2xl font-medium'>Resources & Forms</h4>
                            <div className='flex items-center gap-2 mx-6 cursor-pointer'>
                                <TiAttachment className='text-xl text-[#64A7FF]' />
                                <p className='text-base underline text-[#64A7FF]'>Example Management Agreement</p>
                            </div>
                            <div className='flex items-center gap-2 mx-6 cursor-pointer'>
                                <FaDownload className='text-xl text-[#00BA00]' />
                                <p className='text-base underline text-[#000000]'>Form W-9 Download</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[690px] flex flex-col justify-between'>
                        <p>
                            To our future client:
                            <br /><br />
                            Much like using a good accountant or financial planner, a good property manager will protect your investment, provide professional service, reduce costs and increase your income.
                            <br /><br />
                            Marblestone Property Group can work with you to align your strategy with focus and care, just like we would our own investment to ensure long-term sustainability and growth.
                            <br /><br />
                            Marblestone Property Group was started by an owner and is designed to focus on the owner. We love to hear that our owners worry less once they let us care for their investment and that they are doing better once they have joined our services.
                            <br /><br />
                            Since 2013, Marblestone Property Group has been specializing in property management. We offer our clients a low property to manager ratio, as well as a high level of professional and personalized service. We provide 24-hour support, so whether we are onsite or offsite, our team is readily available to provide assistance. Your success is our business.
                            <br /><br />
                            Sincerely,
                            <br />
                            Jared Kott, Managing Partner
                        </p>
                        <div className='flex items-center gap-6'>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white ">
                                <span className=" ">Owner Portal</span>
                                <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                            </button>
                            <button type="submit" value={"submit"} className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white ">
                                <span className=" ">Our Services</span>
                                <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='max-w-[588px] flex flex-col items-center mx-auto gap-8 px-24 py-20 shadow-lg rounded-xl mb-10'>
                    <h4 className=' '>Have a Question?</h4>
                    <div className='flex items-center gap-6'>
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
    );
};

export default Resources;
