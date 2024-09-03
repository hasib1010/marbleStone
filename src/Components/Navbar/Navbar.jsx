import React, { useContext, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logo/Group.png";
import arrow from './../../assets/logo/Element.png';
import { BsArrowRight, BsChevronDown, BsThreeDotsVertical } from 'react-icons/bs';
import { AuthContext } from '../Providers/Provider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showUserActions, setShowUserActions] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const handleLinkClick = () => {
        setShowUserActions(false);  // Close user actions dropdown
        setIsOpen(false);  // Close mobile menu
    };
    const toggleDropdown = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    };

    const toggleUserActions = () => {
        setShowUserActions((prev) => !prev);
    };

    const isActive = (path) => {
        const isActive = location.pathname.startsWith(path);
        console.log(`Path: ${path}, IsActive: ${isActive}`);
        return isActive ? 'text-red-500' : '';
    };



    const Dropdown = ({ title, link, dropdownName, children }) => (
        <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={() => toggleDropdown(dropdownName)}>
                <Link to={link} style={{ color: location.pathname === link ? 'red' : 'white' }}>
                    {title}
                </Link>
                <BsChevronDown
                    className={`text-white ml-2 text-xl transition-transform ${openDropdown === dropdownName ? 'rotate-180' : ''}`}
                />
            </div>
            {openDropdown === dropdownName && (
                <ul className="absolute left-0 mt-2 w-48 rounded-md py-2 bg-white shadow-lg z-50">
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { closeDropdown: () => setOpenDropdown(null) })
                    )}
                </ul>
            )}
        </div>
    );


    const DropdownItem = ({ to, href, children, closeDropdown }) => {
        if (href) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-black font-medium cursor-pointer" onClick={closeDropdown}>
                    {children}
                </a>
            );
        }
        return (
            <Link to={to} onClick={closeDropdown}>
                <li className="block px-4 py-2 text-black font-medium cursor-pointer">{children}</li>
            </Link>
        );
    };

    return (
        <div className="relative list-none z-50">
            <div className="container mx-auto md:px-10 px-5 lg:px-0">
                <div className="flex items-center gap-28 py-7">
                    <Link to="/">
                        <img className='w-[142.038px] h-[32px]' src={logo} alt="Logo" />
                    </Link>
                    <div className="hidden lg:flex lg:items-center w-full justify-evenly  ">
                        <Dropdown
                            title="Property Management"
                            link="/property-management"
                            dropdownName="propertyManagement"
                            dropdownLinks={[
                                '/property-management',
                                '/property-management/pricing',
                            ]}
                        >
                            <DropdownItem to="/property-management/pricing">Pricing</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            title="Owners"
                            link="/owners"
                            dropdownName="owners"
                            dropdownLinks={[
                                '/owners',
                                '/owners/owner-resources',
                                'https://marblestonepg.managebuilding.com/manager/public/authentication/login?ReturnUrl=%2Fmanager%2F',
                            ]}
                        >
                            <DropdownItem to="/owners/owner-resources">Owner Resources</DropdownItem>
                            <DropdownItem href="https://marblestonepg.managebuilding.com/manager/public/authentication/login?ReturnUrl=%2Fmanager%2F">Owner Portal</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            title="Residents"
                            link="/residents"
                            dropdownName="residents"
                            dropdownLinks={[
                                '/residents',
                                '/residents/residents-resources',
                                'https://marblestonepg.managebuilding.com/Resident/portal/login',
                                'https://app.propertymeld.com/tenant/marblestone-pg/',
                            ]}
                        >
                            <DropdownItem to="/residents/residents-resources">Resident Resources</DropdownItem>
                            <DropdownItem href="https://marblestonepg.managebuilding.com/Resident/portal/login">Resident Portal</DropdownItem>
                            <DropdownItem href="https://app.propertymeld.com/tenant/marblestone-pg/">Maintenance Request</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            title="Rentals"
                            link="/rentals"
                            dropdownName="rentals"
                            dropdownLinks={[
                                '/rentals',
                                '/rentals',
                                'https://rentbutter.com/apply/marblestone',
                            ]}
                        >
                            <DropdownItem to="/rentals">Properties</DropdownItem>
                            <DropdownItem href="https://rentbutter.com/apply/marblestone">Apply</DropdownItem>
                        </Dropdown>


                        <Link to="/blogs">
                            <li className={`lg:text-[16px] text-white font-medium py-2 leading-5 ${isActive('/blogs')}`}>Blogs</li>
                        </Link>

                        <a target='_blank' href="https://rentbutter.com/apply/marblestone">
                            <li className={`lg:text-[16px] text-white font-medium py-2 leading-5 ${isActive('/apply')}`}>Apply</li>
                        </a>
                        <Link to="/about">
                            <li className={`lg:text-[16px] text-white font-medium py-2 leading-5 ${isActive('/about')}`}>About</li>
                        </Link>
                        <Link to="/admin">
                            <li className={`lg:text-[16px] text-white font-medium py-2 leading-5 ${isActive('/admin')}`}>Admin</li>
                        </Link>
                        <Link to="/contact">
                            <li className={`lg:text-[16px] text-white font-medium py-2 leading-5 ${isActive('/contact')}`}>Contact</li>
                        </Link>
                        <button className="flex items-center gap-2 h-fit px-4 py-2 rounded-3xl lg:text-[14px] w-fit font-medium leading-5 bg-[#990A05] text-white transition-transform duration-300 hover:bg-[#b72a1c] hover:shadow-lg hover:scale-105">
                            Book a call <img className="bg-white p-[10px] rounded-full" src={arrow} alt="Arrow" />
                        </button>
                        {
                            user && (
                                <div className="relative">
                                    <div className='flex items-center'>
                                        <div
                                            className="w-20 h-20 rounded-full bg-cover bg-center cursor-pointer"
                                            style={{ backgroundImage: `url(${user?.photoURL || "https://i.ibb.co/dpGJZDt/avatar.webp"})` }}
                                            onClick={toggleUserActions}
                                        >
                                        </div>
                                    </div>
                                    {showUserActions && (
                                        <div className="absolute right-0 mt-2 w-48 rounded-md py-2 bg-white shadow-lg z-50">
                                            <Link to='/profile_dashboard' className="block px-4 py-2 text-black font-medium cursor-pointer" onClick={() => setShowUserActions(false)}>
                                                Profile
                                            </Link>
                                            <button className="block px-4 py-2 text-black font-medium cursor-pointer" onClick={logOut}>
                                                Sign Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    </div>

                    {/* Mobile Menu icon */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>

                    </div>
                </div>

                {/* Mobile Side Menu */}
                <div className={`pl-10 fixed top-0 right-0 h-full w-full bg-black text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-10 right-5 w-10 h-10 flex items-center justify-center text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col items-start justify-start mt-10 h-full space-y-4">
                        <Link onClick={() => setIsOpen(false)} className="list-none lg:text-[16px] font-medium py-2 leading-5" to={'/'}>
                            <img src={logo} alt="Logo" />
                        </Link>

                        <Dropdown
                            title="Property Management"
                            link="/property-management"
                            dropdownName="propertyManagement"
                            dropdownLinks={[
                                '/property-management',
                                '/property-management/pricing',
                            ]}
                        >
                            <DropdownItem to="/property-management/pricing">Pricing</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            title="Owners"
                            link="/owners"
                            dropdownName="owners"
                            dropdownLinks={[
                                '/owners',
                                '/owners/owner-resources',
                                'https://marblestonepg.managebuilding.com/manager/public/authentication/login?ReturnUrl=%2Fmanager%2F  ',
                            ]}
                        >
                            <DropdownItem to="/owners/owner-resources">Owner Resources</DropdownItem>
                            <DropdownItem href="https://marblestonepg.managebuilding.com/manager/public/authentication/login?ReturnUrl=%2Fmanager%2F">Owner Portal</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            title="Residents"
                            link="/residents"
                            dropdownName="residents"
                            dropdownLinks={[
                                '/residents',
                                '/residents/residents-resources',
                                'https://marblestonepg.managebuilding.com/Resident/portal/login',
                                '/residents/maintenance',
                            ]}
                        >
                            <DropdownItem to="/residents/residents-resources">Resident Resources</DropdownItem>
                            <DropdownItem href="https://marblestonepg.managebuilding.com/Resident/portal/login">Resident Portal</DropdownItem>
                            <DropdownItem href="https://app.propertymeld.com/tenant/marblestone-pg">Maintenance Request</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            title="Rentals"
                            link="/rentals"
                            dropdownName="rentals"
                            dropdownLinks={[
                                '/rentals',
                                '/rentals ',
                                'https://rentbutter.com/apply/marblestone',
                            ]}
                        >
                            <DropdownItem to="/rentals">Properties</DropdownItem>
                            <DropdownItem href="https://rentbutter.com/apply/marblestone">Apply</DropdownItem>
                        </Dropdown>

                        <Link to="/blogs" onClick={() => setIsOpen(false)}>
                            <li className={`lg:text-[16px] font-medium py-2 leading-5 ${isActive('/blogs')}`}>Blogs</li>
                        </Link>

                        <a target='_blank' href="https://rentbutter.com/apply/marblestone">
                            <li className={`lg:text-[16px] font-medium py-2 leading-5 ${isActive('/apply')}`}>Apply</li>
                        </a>

                        <Link to="/about" onClick={() => setIsOpen(false)}>
                            <li className={`lg:text-[16px] font-medium py-2 leading-5 ${isActive('/about')}`}>About</li>
                        </Link>

                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <li className={`lg:text-[16px] font-medium py-2 leading-5 ${isActive('/contact')}`}>Contact</li>
                        </Link>

                        <button className="flex items-center gap-2 h-fit px-4 py-2 rounded-3xl lg:text-[14px] w-fit font-medium leading-5 bg-[#990A05] text-white transition-transform duration-300 hover:bg-[#b72a1c] hover:shadow-lg hover:scale-105">
                            Book a call <BsArrowRight className="text-white bg-[#C32723] rounded-full p-2 w-8 h-8" />
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
