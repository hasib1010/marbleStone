import React, { useCallback, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropertySearchBox from './PropertySearchBox';
import ListedProperties from './ListedProperties';

function Properties() {
    const [activeButton, setActiveButton] = useState("cta1");
    const [searchParams, setSearchParams] = useState({});

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleSearch = useCallback((params) => {
        setSearchParams(params);
    }, []);  

    return (
        <div className='bg-[#FAFAFB]'>
            <div className="relative mx-auto lg:mb-20 h-fit p-5 lg:p-0 lg:h-[695px]
               bg-[url('./assets/images/RentAnimations/banner.png')] 
               bg-no-repeat bg-center bg-cover 
               rounded-[5px] md:rounded-[8px] lg:rounded-[10px]  w-[95%] md:w-[97%] lg:w-[98%]">
                {/* Overlay Div */}
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                
                <Navbar />
                <div className="container mx-auto relative z-10">
                    <h1 className='lg:text-7xl text-2xl font-medium text-white text-center lg:mt-12 max-w-[854.75px] mx-auto'>
                        Discover Your Perfect Property
                    </h1>
                    <div className='max-w-[640px] mx-auto flex flex-col items-center gap-5 text-center lg:mt-9'>
                        <p className='text-white'>
                            Explore our extensive range of properties that cater to every need. Whether you're looking for a new home, a vacation getaway, or investment opportunities, we have something for you. Our listings are updated regularly to ensure you have access to the latest and most relevant information.
                        </p>
                        <div className='flex gap-3'>
                            <div className='flex lg:gap-4 justify-evenly md:justify-evenly lg:justify-start'>
                                <button
                                    onClick={() => handleButtonClick('cta1')}
                                    className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 transition-transform transform hover:scale-105 ${activeButton === 'cta1' ? 'bg-[#990A05] text-white' : 'bg-[#e0e0e0] text-black'}`}
                                >
                                    Start Exploring
                                    {
                                        activeButton === "cta1" ? (
                                            <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl' />
                                        ) : (
                                            <MdKeyboardArrowRight />
                                        )
                                    }
                                </button>
                                <button
                                    onClick={() => handleButtonClick('cta2')}
                                    className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 transition-transform transform hover:scale-105 ${activeButton === 'cta2' ? 'bg-[#990A05] text-white' : 'bg-[#e0e0e0] text-black'}`}
                                >
                                    Post Properties
                                    {
                                        activeButton === "cta2" ? (
                                            <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl' />
                                        ) : (
                                            <MdKeyboardArrowRight />
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <PropertySearchBox onSearch={handleSearch} />
                </div>
            </div>
            <div className='lg:mt-32 mt-4 mb-20 container mx-auto'>
                <ListedProperties searchParams={searchParams} />
            </div>
        </div>
    );
}

export default Properties;
