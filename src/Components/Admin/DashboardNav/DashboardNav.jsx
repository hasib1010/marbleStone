import React, { useContext, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "./../../../assets/logo/Group2.png";
import { BsArrowRight, BsChevronDown, BsThreeDotsVertical } from 'react-icons/bs';
import { AuthContext } from '../../Providers/Provider';

const DashboardNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showUserActions, setShowUserActions] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();



    const toggleUserActions = () => {
        setShowUserActions((prev) => !prev);
    };

    const isActive = (path) => {
        return location.pathname.startsWith(path) ? 'text-red-500' : '';
    };





    return (
        <div className="relative list-none">
            <div className="container mx-auto  ">
                <div className="flex items-center justify-evenly w-full gap-28 py-7">
                    <Link to="/">
                        <img className='w-[142.038px] h-[32px]' src={logo} alt="Logo" />
                    </Link>
                     
                        <Link to="/">
                            <li className={`lg:text-[16px] text-black font-medium py-2 leading-5 ${isActive('/home')}`}>Home</li>
                        </Link>
                        <Link to="/admin">
                            <li className={`lg:text-[16px] text-black font-medium py-2 leading-5 ${isActive('/admin')}`}>Admin</li>
                        </Link>

                        {
                            user && (
                                <div className="relative">
                                    <div className='flex items-center'>
                                        <div
                                            className="w-14 h-14 rounded-full bg-cover bg-center cursor-pointer"
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


            </div>
        </div>
    );
}

export default DashboardNav;
