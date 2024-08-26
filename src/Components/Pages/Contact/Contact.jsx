import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { FaPencilAlt } from 'react-icons/fa';
import { MdCall, MdEmail, MdOutlineEmail } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
    return (
        <div>
            <div className='bg-[#14161C] w-[98%] rounded-xl mx-auto'>
                <div className="mx-auto container">
                    <Navbar />
                    <h1 className='text-center text-white text-2xl lg:text-7xl font-medium'>Contact Us</h1>
                    <p className='max-w-[562.047px] mx-auto mt-4 text-white'>
                        We're here to help! Whether you have a question about our services, need assistance, or just want to give feedback, feel free to reach out to us.
                    </p>

                    <div className='flex items-center gap-16 '>
                        <div className='bg-white px-12 py-11 rounded-2xl'>
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
                                    <select className='w-full pl-10 my-4' name="inquiryType">
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
                            </div>
                        </div>
                        <div className='text-white flex flex-col max-w-[700.074px] gap-4 items-start justify-center'>
                            <h4 className='text-xl font-medium'>Reach Us Directly</h4>
                            <p>
                                Have a question? Reach out to us directly via phone or email, and we’ll get back to you as soon as possible.
                            </p>
                            <div className='flex justify-evenly items-center'>
                                <div className='flex items-center gap-2'>
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
        </div>
    );
}

export default Contact;
