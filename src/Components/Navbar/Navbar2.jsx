import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logo/Group2.png";
import arrow from './../../assets/logo/Element.png';
import { BsArrowRight, BsChevronDown } from 'react-icons/bs';

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);  

    const location = useLocation();

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
    };

    const isActive = (path) => {
        return location.pathname.startsWith(path) ? 'text-red-500' : '';
    };

    return (
        <div className="relative">
            <div className="container mx-auto md:px-10 px-5 lg:px-0">
                <div className="flex items-center justify-between py-7">
                    <Link to="/">
                        <img className='w-[142.038px] h-[32px]' src={logo} alt="Logo" />
                    </Link>
                    <div className="hidden lg:flex items-center space-x-12">
                        <div className="relative">
                            <div className="flex items-center">
                                <Link className={`list-none lg:text-[16px] font-medium leading-5 text-black ${isActive('/property-management')}`} to={'/property-management'}>
                                    <button className="list-none lg:text-[16px] font-medium leading-5 text-black">Property Management</button>
                                </Link>
                                <BsChevronDown 
                                    onClick={() => toggleDropdown('propertyManagement')} 
                                    className={`text-black cursor-pointer text-xl ml-2 transition-transform ${activeDropdown === 'propertyManagement' ? 'rotate-180' : ''}`} 
                                />
                            </div>
                            {activeDropdown === 'propertyManagement' && (
                                <ul className="absolute left-0 top-2 ml-10 mt-2 w-48 rounded-md py-2 z-50">
                                    <Link to="/property-management/pricing">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Pricing</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <div className="relative">
                            <div className="flex items-center">
                                <Link className={`list-none lg:text-[16px] font-medium leading-5 text-black ${isActive('/owners')}`} to={'/owners'}>
                                    <button className="list-none lg:text-[16px] font-medium leading-5 text-black">Owners</button>
                                </Link>
                                <BsChevronDown 
                                    onClick={() => toggleDropdown('owners')} 
                                    className={`text-black cursor-pointer text-xl ml-2 transition-transform ${activeDropdown === 'owners' ? 'rotate-180' : ''}`} 
                                />
                            </div>
                            {activeDropdown === 'owners' && (
                                <ul className="absolute left-0 top-2 ml-10 mt-2 w-48 rounded-md py-2 z-50">
                                    <Link to="/owners/owner-resources">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Owner Resources</li>
                                    </Link>
                                    <Link to="/owners/portal">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Owner Portal</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <div className="relative">
                            <div className="flex items-center">
                                <Link className={`list-none lg:text-[16px] font-medium leading-5 text-black ${isActive('/residents')}`} to={'/residents'}>
                                    <button className="list-none lg:text-[16px] font-medium leading-5 text-black">Residents</button>
                                </Link>
                                <BsChevronDown 
                                    onClick={() => toggleDropdown('residents')} 
                                    className={`text-black cursor-pointer text-xl ml-2 transition-transform ${activeDropdown === 'residents' ? 'rotate-180' : ''}`} 
                                />
                            </div>
                            {activeDropdown === 'residents' && (
                                <ul className="absolute left-0 top-2 ml-10 mt-2 w-48 rounded-md py-2 z-50">
                                    <Link to="/residents/residents-resources">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Resident Resources</li>
                                    </Link>
                                    <Link to="/residents/residents-portal">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Resident Portal</li>
                                    </Link>
                                    <Link to="/residents/maintenance">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Maintenance Request</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <Link to="/blogs">
                            <li className={`list-none text-black lg:text-[16px] font-medium leading-5 ${isActive('/blogs')}`}>Blogs</li>
                        </Link>
                        <Link to="/rentals">
                            <li className={`list-none text-black lg:text-[16px] font-medium leading-5 ${isActive('/rentals')}`}>Rentals</li>
                        </Link>
                        <Link to="/apply">
                            <li className={`list-none text-black lg:text-[16px] font-medium leading-5 ${isActive('/apply')}`}>Apply</li>
                        </Link>
                        <Link to="/about">
                            <li className={`list-none text-black lg:text-[16px] font-medium leading-5 ${isActive('/about')}`}>About</li>
                        </Link>
                        <Link to="/contact">
                            <li className={`list-none text-black lg:text-[16px] font-medium leading-5 ${isActive('/contact')}`}>Contact</li>
                        </Link>
                        <button className="flex items-center gap-2 pl-[16px] pr-[8px] py-[6px] rounded-3xl lg:text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                            Book a call <img className="bg-white p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </button>
                    </div>

                    {/* Menu icon */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Side Menu */}
                <div className={`fixed top-0 right-0 h-screen w-screen bg-yellow-100 text-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-10 md:top-8 right-5 md:right-10 w-10 h-10 flex items-center justify-center text-black"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col items-start justify-start mt-10 h-full space-y-4">
                        <Link onClick={() => setIsOpen(false)} className="list-none ml-12 py-2 lg:text-[16px] font-medium leading-5" to={'/'}>
                            <img src={logo} alt="" />
                        </Link>
                        <div className="ml-12">
                            <div className="flex items-center">
                                <Link className={`list-none lg:text-[16px] font-medium leading-5 text-black ${isActive('/property-management')}`} to={'/property-management'}>
                                    <button className="list-none lg:text-[16px] font-medium leading-5 text-black">Property Management</button>
                                </Link>
                                <BsChevronDown 
                                    onClick={() => toggleDropdown('propertyManagement')} 
                                    className={`text-black cursor-pointer text-xl ml-2 transition-transform ${activeDropdown === 'propertyManagement' ? 'rotate-180' : ''}`} 
                                />
                            </div>
                            {activeDropdown === 'propertyManagement' && (
                                <ul className="ml-10 mt-2 w-48 rounded-md z-50">
                                    <Link onClick={() => setIsOpen(false)} to="/property-management/pricing">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Pricing</li>
                                    </Link>
                                </ul>
                            )}
                        </div>
                        <div className="ml-12">
                            <div className="flex items-center">
                                <Link className={`list-none lg:text-[16px] font-medium leading-5 text-black ${isActive('/owners')}`} to={'/owners'}>
                                    <button className="list-none lg:text-[16px] font-medium leading-5 text-black">Owners</button>
                                </Link>
                                <BsChevronDown 
                                    onClick={() => toggleDropdown('owners')} 
                                    className={`text-black cursor-pointer text-xl ml-2 transition-transform ${activeDropdown === 'owners' ? 'rotate-180' : ''}`} 
                                />
                            </div>
                            {activeDropdown === 'owners' && (
                                <ul className="ml-10 mt-2 w-48 rounded-md z-50">
                                    <Link onClick={() => setIsOpen(false)} to="/owners/owner-resources">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Owner Resources</li>
                                    </Link>
                                    <Link onClick={() => setIsOpen(false)} to="/owners/portal">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Owner Portal</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <div className="ml-12">
                            <div className="flex items-center">
                                <Link className={`list-none lg:text-[16px] font-medium leading-5 text-black ${isActive('/residents')}`} to={'/residents'}>
                                    <button className="list-none lg:text-[16px] font-medium leading-5 text-black">Residents</button>
                                </Link>
                                <BsChevronDown 
                                    onClick={() => toggleDropdown('residents')} 
                                    className={`text-black cursor-pointer text-xl ml-2 transition-transform ${activeDropdown === 'residents' ? 'rotate-180' : ''}`} 
                                />
                            </div>
                            {activeDropdown === 'residents' && (
                                <ul className="ml-10 mt-2 w-48 rounded-md z-50">
                                    <Link onClick={() => setIsOpen(false)} to="/residents/residents-resources">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Resident Resources</li>
                                    </Link>
                                    <Link onClick={() => setIsOpen(false)} to="/residents/residents-portal">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Resident Portal</li>
                                    </Link>
                                    <Link onClick={() => setIsOpen(false)} to="/residents/maintenance">
                                        <li className="block px-4 py-2 text-black font-medium cursor-pointer">Maintenance Request</li>
                                    </Link>
                                </ul>
                            )}
                        </div>

                        <Link to="/blogs" onClick={() => setIsOpen(false)}>
                            <li className={`list-none ml-12 py-2 lg:text-[16px] font-medium leading-5 ${isActive('/blogs')}`}>Blogs</li>
                        </Link>
                        <Link to="/rentals" onClick={() => setIsOpen(false)}>
                            <li className={`list-none ml-12 py-2 lg:text-[16px] font-medium leading-5 ${isActive('/rentals')}`}>Rentals</li>
                        </Link>
                        <Link to="/apply" onClick={() => setIsOpen(false)}>
                            <li className={`list-none ml-12 py-2 lg:text-[16px] font-medium leading-5 ${isActive('/apply')}`}>Apply</li>
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>
                            <li className={`list-none ml-12 py-2 lg:text-[16px] font-medium leading-5 ${isActive('/about')}`}>About</li>
                        </Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <li className={`list-none ml-12 py-2 lg:text-[16px] font-medium leading-5 ${isActive('/contact')}`}>Contact</li>
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

export default Navbar2;
