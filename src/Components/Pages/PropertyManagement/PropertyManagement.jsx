import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';

const PropertyManagement = () => {
    const [toggleTab, setToggleTab] = useState(1);
    const toggleIndexTab = (index) => {

        setToggleTab(index);
        console.log(toggleTab);
    }
    return (
        <div className='bg-[#FAFAFB]'>
            <div className='bg-[#14161C] w-[98%] mx-auto rounded-2xl h-fit'>
                <Navbar></Navbar>
                <div className='py-16 mb-24'>
                    <h4 className='max-w-[854.75px] mx-auto text-center my-2 text-white text-7xl font-medium'>Property Management Essentials Best Practices </h4>
                    <p className='max-w-[854.75px] mx-auto text-center my-2 text-[#A4A6B0]'>Property management involves overseeing residential or commercial properties to ensure they are well-maintained, financially viable, and effectively occupied. To succeed in this field, several best practices are essential.</p>
                </div>

            </div>
            <div className='container mx-auto bg-[#FAFAFB]'>
                <div className='list-none flex items-center px-10  py-[25px] w-fit mx-auto gap-5 mt-10  rounded-full bg-white'>
                    <li onClick={() => toggleIndexTab(1)}
                        className={`x-[18px] font-medium text-[#464851] py-[14px] px-3 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                            ${toggleTab === 1 ? "active_tabX" : "tabX"}
                            `}
                    >
                        Overview
                    </li>
                    <li onClick={() => toggleIndexTab(2)}
                        className={`x-[18px] font-medium text-[#464851] py-[14px] px-3 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                            ${toggleTab === 2 ? "active_tabX" : "tabX"}
                            `}
                    >
                        Marketing
                    </li>
                    <li onClick={() => toggleIndexTab(3)}
                        className={`x-[18px] font-medium text-[#464851] py-[14px] px-3 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                            ${toggleTab === 3 ? "active_tabX" : "tabX"}
                            `}
                    >
                        Tenant Screening
                    </li>
                    <li onClick={() => toggleIndexTab(4)}
                        className={`x-[18px] font-medium text-[#464851] py-[14px] px-3 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                            ${toggleTab === 4 ? "active_tabX" : "tabX"}
                            `}
                    >
                        Rent Collection
                    </li>
                    <li onClick={() => toggleIndexTab(5)}
                        className={`x-[18px] font-medium text-[#464851] py-[14px] px-3 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                            ${toggleTab === 5 ? "active_tabX" : "tabX"}
                            `}
                    >
                        Maintenance
                    </li>
                    <li onClick={() => toggleIndexTab(6)}
                        className={`x-[18px] font-medium text-[#464851] py-[14px] px-3 bg-[#FAFAFB] rounded-full shadow-lg cursor-pointer
                            ${toggleTab === 6 ? "active_tabX" : "tabX"}
                            `}
                    >
                        Financial Reporting
                    </li>
                </div>
                {/* content */}
                <div>
                    <div className={`${toggleTab === 1 ? "block" : "hidden"}`}>
                        1
                    </div>
                    <div className={`${toggleTab === 2 ? "block" : "hidden"}`}>
                        2
                    </div>
                    <div className={`${toggleTab === 3 ? "block" : "hidden"}`}>
                        3
                    </div>
                    <div className={`${toggleTab === 4 ? "block" : "hidden"}`}>
                        4
                    </div>
                    <div className={`${toggleTab === 5 ? "block" : "hidden"}`}>
                        5
                    </div>
                    <div className={`${toggleTab === 6 ? "block" : "hidden"}`}>
                        6
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PropertyManagement;