import React from 'react';
import banner1 from '../../../../assets/images/tabimage/banner1.png';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPersonShelter, FaStar } from "react-icons/fa6"; 
import { RiHomeGearFill, RiTeamFill } from "react-icons/ri";
import { GrAnnounce } from 'react-icons/gr';
import { MdBedroomParent } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';

const Overview = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col lg:flex-row items-center justify-evenly my-12'>
                <div className='lg:max-w-[613px] lg:text-7xl text-2xl mb-4 font-medium'><h2>Chicago Property Management</h2></div>
                <div className='lg:max-w-[472.098px] '>
                    <h5 className='lg:text-3xl text-xl text-center lg:text-left font-medium mb-4'>Let Us Manage Your Chicago Rental Property</h5>
                    <p className='text-[#464851]'>We offer a full range of property management services tailored to you as an investor, homeowner, or landlord. We have an extensive portfolio of single family homes, 2,3,4, flats in the south Chicago area.</p>
                </div>
            </div>
            <div className='w-fit mx-auto lg:mb-32'>
                <img src={banner1} alt="" />
            </div>
            <div className='flex flex-col lg:flex-row gap-4 bg-white'>
                <div className='lg:max-w-[588px] mx-auto p-8'>
                    <div>
                        <h5 className='text-3xl font-medium'>The Benefits of using Marblestone Property Group LLC</h5>
                        <div className='mt-2'>
                            <ul>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    No hassle management
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Automated owner statements
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Online Owner Portal Access
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Industry leading marketing tools
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    24/7 maintenance request handling
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Prompt Response to Tenant Requests
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Low vacancy rate
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Low time on market
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Industry specific local knowledge
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Connections with Private lending for you to expand
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Tax appeal experts
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Insurance discounts
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-[588px] mx-auto p-8'>
                    <div>
                        <h5 className='text-3xl font-medium'>What we do as your Chicago property manager</h5>
                        <div className='mt-2'>
                            <ul>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Fill vacancies
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Advertise your rental
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Handle tenant inquiries
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Background and credit investigations
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Application processing
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Lease signing
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Full service repair
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Rent collection
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Accounting
                                </li>
                                <li className='flex items-center gap-1 font-normal text-lg'><IoIosCheckmarkCircle className='text-xl my-4'></IoIosCheckmarkCircle>
                                    Coordinate Evictions
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* video section */}
            <div>
                <h3 className='lg:max-w-[908px] lg:text-5xl text-xl mx-auto text-center lg:px-32 font-medium my-7'>Service in Motion Our Video
                    Approach Explained</h3>
                <div className='relative w-full pb-[56.25%] mb-10 rounded-3xl'>
                    <iframe
                        className='absolute top-0 left-0 w-full h-full rounded-3xl'
                        src="https://www.youtube.com/embed/4jnzf1yj48M?si=45Ss-nHf0dpSI2qX&amp;controls=0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                </div>

            </div>

            {/* what we do */}

            <div className='flex lg:flex-row md:flex-col flex-col items-center lg:items-start md:items-center mb-20'>
                <div className='flex-1 lg:block md:flex sm:flex md:flex-col flex-col items-center lg:text-start md:text-center text-center'>
                   

                    <div className='flex flex-col gap-4 mt-4'>
                        <h4 className='lg:text-5xl text-2xl font-medium mb-4'>Explore What We Do</h4>
                        <p className='lg:max-w-[470px]'>
                            As your Chicago Property Manager
                        </p>

                    </div>
                </div>
                <div className='flex-1 '>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                        <div className='flex flex-col items-center lg:items-start lg:max-w-[300px]'>
                            <GrAnnounce className='text-3xl my-2'></GrAnnounce>
                            <h2 className='text-2xl font-medium'>Marketing</h2>
                            <p className='lg:text-left text-center mt-3'>
                                Marketing is key to successful rentals. We provide an expert market analysis for each property we manage to maximize your return on investment.
                            </p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start lg:max-w-[300px]'>
                            <FaPersonShelter className='text-3xl my-2'></FaPersonShelter>
                            <h2 className='text-2xl font-medium'>Tenant Screening</h2>
                            <p className='lg:text-left text-center mt-3'>
                                We conduct extensive screening on all tenants and handle every aspect of getting your investment rented in the shortest time possible.
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                        <div className='flex flex-col items-center lg:items-start lg:max-w-[300px]'>
                            <MdBedroomParent className='text-3xl my-2'></MdBedroomParent >
                            <h2 className='text-2xl font-medium'>Rent Collection</h2>
                            <p className='lg:text-left text-center mt-3'>
                                We make sure you get paid on time, every time. You no longer have to worry about rent showing up in your bank account because we take care of everything.
                            </p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start lg:max-w-[300px]'>
                            <RiHomeGearFill className='text-3xl my-2'></RiHomeGearFill>
                            <h2 className='text-2xl font-medium'>Maintenance</h2>
                            <p className='lg:text-left text-center mt-3'>
                                We conduct inspections upon move-in and move-out and ensure all maintenance issues are addressed in a timely manner.
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className=''>
                        <div className='flex flex-col items-center lg:items-start '>
                            <HiDocumentReport className='text-3xl my-2'></HiDocumentReport >
                            <h2 className='text-2xl font-medium'>Financial Reporting</h2>
                            <p className='lg:text-left text-center mt-3'>
                                With our detailed financial reporting tools, it's never been easier to keep tabs on your investment. Log into your owner portal to view statements & more.
                            </p>
                        </div>

                    </div>
                </div>
            </div> 
        </div>
    );
}


export default Overview;