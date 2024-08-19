import React from 'react';
import logo from "./../../assets/logo/Group.png";
import arrow from './../../assets/logo/Element.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-[1400px] mx-auto mt-7">
            <div className="flex items-center justify-between py-7">
                <Link>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="hidden lg:flex items-center space-x-12">
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Property Management</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Owners</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Residents</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Rentals</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Apply</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Resources</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">About</li>
                    </Link>
                    <Link>
                        <li className="list-none text-white text-[16px] font-medium leading-5">Contact</li>
                    </Link>
                    <button className="flex items-center gap-2 pl-[16px] pr-[8px] py-[6px] rounded-3xl text-[16px] font-medium leading-5 bg-[#990A05] text-white">
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

            {/* Mobile and Tablet Menu */}
            {isOpen && (
                <div className="lg:hidden bg-gray-800 text-white">
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Property Management</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Owners</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Residents</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Rentals</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Apply</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Resources</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">About</li>
                    </Link>
                    <Link>
                        <li className="list-none px-4 py-2 text-[16px] font-medium leading-5">Contact</li>
                    </Link>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 mt-4 w-full rounded-3xl text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                        Book a call <img className="bg-white p-[10px] rounded-full" src={arrow} alt="Arrow" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;