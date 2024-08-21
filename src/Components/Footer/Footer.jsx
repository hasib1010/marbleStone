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
        <footer className='bg-[#14161C] text-white mx-6 md:py-24 rounded-2xl'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between gap-12'>
                    {/* Newsletter and Social Media */}
                    <div className='flex flex-col gap-6 md:w-1/3'>
                        <h5 className='text-2xl md:text-4xl font-normal'>Discover exclusive real estate opportunities</h5>
                        <p className='text-base md:text-lg'>
                            Stay updated with the latest real estate trends, exclusive listings, and valuable tips. Subscribe to our newsletter for all the latest updates delivered straight to your inbox.
                        </p>

                        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
                            <div className='relative w-full max-w-md flex items-center'>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className='bg-gray-800 border-none text-white px-4 py-2 rounded-l-full placeholder-white placeholder:text-sm md:placeholder:text-base flex-grow'
                                />
                                <button className='bg-white text-[#14161C] absolute -top-1 -right-6 text-base font-medium rounded-full px-4 py-[12px] flex items-center gap-2 hover:bg-gray-600'>
                                    Subscribe
                                    <HiOutlineArrowSmRight className='text-xl' />
                                </button>
                            </div>
                        </div>
                        <div className='flex gap-4 text-xl'>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className='flex flex-col md:w-2/3 md:flex-row justify-between gap-12'>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-xl font-medium mb-4'>Main Page</h4>
                            <ul className='space-y-2 text-sm'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/properties'>Properties</Link></li>
                                <li><Link to='/locations'>Location CMS</Link></li>
                                <li><Link to='/property-csm'>Property CSM</Link></li>
                                <li><Link to='/type-cms-sales'>Type CMS Sales</Link></li>
                                <li><Link to='/property-single'>Property Single</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-xl font-medium mb-4'>Agents</h4>
                            <ul className='space-y-2 text-sm'>
                                <li><Link to='/agents'>Agents</Link></li>
                                <li><Link to='/agent-single'>Agent Single</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/blog-post'>Blog Post</Link></li>
                                <li><Link to='/post-free-property'>Post a Free Property</Link></li>
                                <li><Link to='/post-paid-property'>Post a Paid Property</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-xl font-medium mb-4'>Resources</h4>
                            <ul className='space-y-2 text-sm'>
                                <li><Link to='/faqs'>FAQs</Link></li>
                                <li><Link to='/property-management'>Property Management</Link></li>
                                <li><Link to='/owner-resource-page'>Owner Resource Page</Link></li>
                                <li><Link to='/resident-resource-page'>Resident Resource Page</Link></li>
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
                                    <p className='text-base font-normal text-[#A4A6B0]'>Sales Executives</p>
                                    <p className='text-base font-normal'>sales@home.com</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaPhoneAlt className='text-3xl' />
                                <div>
                                    <p className='text-base font-normal text-[#A4A6B0]'>Phone number</p>
                                    <p className='text-base font-normal'>(123) 456-7890</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <PiChatCircleTextFill className='text-3xl' />
                                <div>
                                    <p className='text-base font-normal text-[#A4A6B0]'>Help & Support</p>
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
