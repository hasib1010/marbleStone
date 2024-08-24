import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../assets/logo/Group.png";
import arrow from './../../assets/logo/Element.png';
import { BsArrowRight, BsChevronDown } from 'react-icons/bs';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sideMenuDropdownOpen, setSideMenuDropdownOpen] = useState(false);

    const toggleSideMenuDropdown = () => {
        setSideMenuDropdownOpen(!sideMenuDropdownOpen);
    };

    return (
        <div className="relative">
            <div className="container mx-auto md:px-10 px-5 lg:px-0">
                <div className="flex items-center justify-between py-7">
                    <Link to="/">
                        <img className='w-[142.038px] h-[32px]' src={logo} alt="Logo" />
                    </Link>
                    <div className="hidden lg:flex items-center space-x-12">
                        <Link to="/property-management">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">Property Management</li>
                        </Link>
                        <Link to="/owners">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">Owners</li>
                        </Link>
                        <Link to="/residents">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">Residents</li>
                        </Link>
                        <Link to="/rentals">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">Rentals</li>
                        </Link>
                        <Link to="/apply">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">Apply</li>
                        </Link>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <div className="flex items-center">
                                <Link to={'/resources'}>
                                    <button
                                        className="list-none  text-white font-medium lg:text-[16px] leading-5   flex items-center"
                                    >
                                        Resources
                                    </button>
                                </Link>
                                <BsChevronDown onClick={toggleSideMenuDropdown} className={`text-white cursor-pointer text-xl ml-2 transition-transform ${sideMenuDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {sideMenuDropdownOpen && (
                                <ul className="absolute left-0 top-2 mt-2 w-48  rounded-md  py-2 z-50">
                                    <Link to="/owner-resources">
                                        <li className="block px-4 py-2 text-white font-medium cursor-pointer">Owner Resources</li>
                                    </Link>
                                    <Link to="/resident-resources">
                                        <li className="block px-4 py-2 text-white font-medium cursor-pointer">Resident Resources</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <Link to="/about">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">About</li>
                        </Link>
                        <Link to="/contact">
                            <li className="list-none text-white lg:text-[16px] font-medium leading-5">Contact</li>
                        </Link>
                        <button className="flex items-center gap-2 pl-[16px] pr-[8px] py-[6px] rounded-3xl lg:text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                            Book a call <img className="bg-white p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </button>
                    </div>

                    {/* Menu icon */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Side Menu */}
                <div className={`fixed top-0 right-0 h-full w-full bg-black text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-10 md:top-8 right-5 md:right-10 w-10 h-10 flex items-center justify-center text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col items-start justify-center h-full space-y-4 mt-1">
                        <Link to="/property-management" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">Property Management</li>
                        </Link>
                        <Link to="/owners" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">Owners</li>
                        </Link>
                        <Link to="/residents" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">Residents</li>
                        </Link>
                        <Link to="/rentals" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">Rentals</li>
                        </Link>
                        <Link to="/apply" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">Apply</li>
                        </Link>
                        <div className="relative ml-12">
                            <div className="flex items-center">
                                <Link to={'/resources'}>
                                    <button
                                        className="list-none  text-white font-medium lg:text-[16px] leading-5   flex items-center"
                                    >
                                        Resources
                                    </button>
                                </Link>
                                <BsChevronDown onClick={toggleSideMenuDropdown} className={`text-white cursor-pointer text-xl ml-2 transition-transform ${sideMenuDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            {sideMenuDropdownOpen && (
                                <ul className="absolute left-full top-10 mt-2 w-48  rounded-md   py-2 z-50">
                                    <Link to="/owner-resources">
                                        <li className="block px-4 py-2 text-white font-medium cursor-pointer">Owner Resources</li>
                                    </Link>
                                    <Link to="/resident-resources">
                                        <li className="block px-4 py-2 text-white font-medium cursor-pointer">Resident Resources</li>
                                    </Link>
                                </ul>
                            )}
                        </div>
                        <Link to="/about" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">About</li>
                        </Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <li className="list-none pl-12 py-2 lg:text-[16px] font-medium leading-5 hover:bg-gray-700">Contact</li>
                        </Link>
                        <button className="flex pl-0 items-center justify-center gap-2 py-2 mt-4 w-full rounded-3xl lg:text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                            Book a call <BsArrowRight className='text-3xl bg-white text-black rounded-full p-1' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
