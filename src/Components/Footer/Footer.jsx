import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from "./../../assets/logo/Group.png";
import { IoIosMail } from "react-icons/io";
import { PiBagSimpleFill, PiChatCircleTextFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className='bg-[#14161C] text-white py-12 md:py-24 rounded-2xl'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between gap-12'>
                    {/* Newsletter and Social Media */}
                    <div className='flex flex-col gap-6 md:w-1/3'>
                        <h5 className='text-2xl md:text-4xl font-normal'>Discover exclusive real estate opportunities</h5>
                        <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur. Egestas eu amet dictum tellus. Purus morbi lorem viverra cras.</p>

                        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
            <div className='relative w-full max-w-md flex items-center'>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className='bg-gray-800 border-none  text-white px-4 py-2 rounded-l-full placeholder-white placeholder:text-sm md:placeholder:text-base flex-grow   '
                />
                <button className='bg-white text-[#14161C] absolute -top-1 -right-6  text-base font-medium rounded-full px-4 py-[12px] flex items-center gap-2 hover:bg-gray-600'>
                    Subscribe
                    <HiOutlineArrowSmRight className='text-xl' />
                </button>
            </div>
        </div>
                        <div className='flex gap-4 text-xl'>
                            <FaFacebookF />
                            <BsTwitterX />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className='flex flex-col md:w-2/3 md:flex-row justify-between gap-12'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-xl font-medium mb-4'>Main Page</h4>
                            <ul className='space-y-2 text-sm'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Properties</Link></li>
                                <li><Link>Location CMS</Link></li>
                                <li><Link>Property CSM</Link></li>
                                <li><Link>Type CMS Sales</Link></li>
                                <li><Link>Property single</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-xl font-medium mb-4'>Agents</h4>
                            <ul className='space-y-2 text-sm'>
                                <li><Link>Agents</Link></li>
                                <li><Link>Agents single</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>Blog post</Link></li>
                                <li><Link>Post a free property</Link></li>
                                <li><Link>Post a paid property</Link></li>
                                <li><Link>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-xl font-medium mb-4'>Resources</h4>
                            <ul className='space-y-2 text-sm'>
                                <li><Link>FAQs</Link></li>
                                <li><Link>Property Management</Link></li>
                                <li><Link>Owner Resource Page</Link></li>
                                <li><Link>Resident Resource Page</Link></li>
                                <li><Link>Resident Resource Page</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='flex flex-col md:flex-row items-center justify-between mt-12'>
                    <div className='flex items-center gap-4'>
                        <img className='h-12 md:h-14' src={logo} alt="Logo" />
                        <p className='text-base md:text-xl mt-2'>Powered by DataSolve</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h4 className='text-xl font-medium mb-5'>Contact Us</h4>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-sm'>
                            <div className='flex items-center space-x-3'>
                                <IoIosMail className='text-3xl' />
                                <div>
                                    <p className='text-base font-normal text-[#A4A6B0]'>Email address</p>
                                    <p className='text-base font-normal'>info@home.com</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <PiBagSimpleFill className='text-3xl' />
                                <div>
                                    <p className='text-base font-normal text-[#A4A6B0]'>Sales executives</p>
                                    <p className='text-base font-normal'>sales@home.com</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaPhoneAlt className='text-3xl' />
                                <div>
                                    <p className='text-base font-normal text-[#A4A6B0]'>Phone number</p>
                                    <p className='text-base font-normal'>(123) 456 - 7890</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <PiChatCircleTextFill className='text-3xl' />
                                <div>
                                    <p className='text-base font-normal text-[#A4A6B0]'>Help & support</p>
                                    <p className='text-base font-normal'>support@home.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
