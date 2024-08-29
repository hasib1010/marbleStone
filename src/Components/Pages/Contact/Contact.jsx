import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { FaPencilAlt } from 'react-icons/fa';
import { MdCall, MdEmail, MdOutlineEmail } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

import arrow from '../../../assets/logo/Element.png';
import LocationCarousel from './LocationCarousel';

function Contact() {
    return (
        <div>
            <div className='bg-[#14161C] w-[98%] rounded-xl mx-auto'>
                <div className="mx-auto container">
                    <Navbar />
                    <h1 className='text-center text-white text-2xl lg:text-7xl font-medium'>Contact Us</h1>
                    <p className='max-w-[562.047px] mx-auto mt-4 text-white mb-9 px-2 '>
                        We're here to help! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out to us.
                    </p>

                    <div className='flex items-center flex-col lg:flex-row  lg:pb-[100px] lg:gap-16 gap-6 '>
                        <div className='bg-white px-12 py-11 rounded-2xl lg:w-[70%]'>
                            <div className="mb-6">
                                <div className="flex gap-7 lg:flex-row flex-col">
                                    <div className="mb-4 w-full">
                                        <label className="block font-medium mb-1">First Name</label>
                                        <div className='flex items-center gap-1'>
                                            <IoPerson className='text-gray-500' />
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First name"
                                                className="w-full p-2 rounded-md focus:outline-none border"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="block font-medium mb-1">Last Name</label>
                                        <div className="flex items-center gap-1">
                                            <IoPerson className='text-gray-500' />
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last name"
                                                className="w-full p-2 rounded-md focus:outline-none border"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-7 lg:flex-row flex-col">
                                    <div className="mb-4 w-full">
                                        <label className="block font-medium mb-1">Phone Number</label>
                                        <div className="flex items-center gap-1">
                                            <MdCall className='text-gray-500' />
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="(123) 456 - 7890"
                                                className="w-full p-2 rounded-md focus:outline-none border"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="block font-medium mb-1">Email Address</label>
                                        <div className="flex items-center gap-1">
                                            <MdOutlineEmail className='text-gray-500 text-xl' />
                                            <input
                                                type="email"
                                                name="emailAddress"
                                                placeholder="your.email@example.com"
                                                className="w-full p-2 rounded-md focus:outline-none border"
                                            />
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <label className="block font-medium mb-1">Inquiry Type</label>
                                    <select className='w-full pl-10 my-4 border-0 focus:ring-0 focus:outline-none ' name="inquiryType">
                                        <option className='text-[#464851]' value="general">General Inquiry</option>
                                        <option className='text-[#464851]' value="technical">Technical Support</option>
                                        <option className='text-[#464851]' value="property">Property Inquiry</option>
                                        <option className='text-[#464851]' value="rental">Rental Inquiry</option>
                                        <option className='text-[#464851]' value="other">Other</option>
                                    </select>

                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block font-medium mb-1">Comments</label>
                                    <div className="flex items-center gap-1">
                                        <FaPencilAlt className='text-gray-500' />
                                        <textarea
                                            name="comments"
                                            placeholder="Write your message here..."
                                            className="w-full p-2 rounded-md focus:outline-none border"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    value={"submit"}
                                    className="flex w-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white transition-transform duration-300 hover:bg-[#b72a1c] hover:shadow-lg hover:scale-105"
                                >
                                    <span>Send message</span>
                                    <img
                                        className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full transition-transform duration-300 hover:scale-110"
                                        src={arrow}
                                        alt="Arrow"
                                    />
                                </button>

                            </div>
                        </div>
                        <div className='text-white lg:w-[35%] flex p-10 lg:p-0 flex-col max-w-[700.074px] gap-4 items-start justify-center'>
                            <h4 className='text-3xl font-medium'>Reach Us Directly</h4>
                            <p>
                                Have a question? Reach out to us directly via phone or email, and we’ll get back to you as soon as possible.
                            </p>
                            <div className='flex justify-evenly gap-5 lg:items-center flex-col lg:flex-row'>
                                <div className='flex  items-center gap-2'>
                                    <MdEmail className='text-xl' />
                                    <div>
                                        <h6>Email Us</h6>
                                        <p>support@yourcompany.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MdCall className='text-xl' />
                                    <div>
                                        <h6>Call Us</h6>
                                        <p>(123) 456 - 7890</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='w-full' />
                            <h6 className='text-xl'>Follow Us on Social Media</h6>
                            <p>
                                Stay connected and follow us on social media for updates and more.
                            </p>
                            <div className='flex gap-4 text-xl mb-3'>
                                <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
                                <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container mx-auto'>
                <h3 className='flex items-center text-xl font-medium gap-2 px-3 lg:mt-40 mt-10 py-2 lg:mb-10 bg-[#EEEFF1] w-fit rounded-full'>
                    <FaLocationDot className='text-4xl text-white bg-[#A4A6B0] p-2 rounded-full' /> Our Offices
                </h3>
                <div className='flex justify-between flex-col p-4 lg:p-0 lg:items-start items-end lg:my-10'>
                    <div>
                        <h3 className='lg:text-5xl text-2xl font-medium mb-6'>Visit Our Offices</h3>
                        <p className='max-w-[480px] mt-4'>
                            We have several offices to serve you better. Here are the details of our locations:
                        </p>

                    </div>
                    <button
                        type="submit"
                        value={"submit"}
                        className="lg:mt-6 mt-0 flex w-fit h-fit items-center gap-2 px-4 py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white transition-colors duration-300 hover:bg-[#b72a1c] hover:shadow-lg hover:scale-105"
                    >
                        <span>Contact Us</span>
                        <img
                            className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full transition-transform duration-300 hover:scale-110"
                            src={arrow}
                            alt="Arrow"
                        />
                    </button>

                </div>
                <LocationCarousel />
            </div>
        </div >
    );
}

export default Contact;
