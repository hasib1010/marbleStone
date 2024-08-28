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
        <div>
            <div className="relative mx-auto lg:mb-20 bg-[#FAFAFB]
            h-[300px] sm:h-[300px] md:h-[300px] lg:h-[602px] xl:h-[602px]
            bg-[url('./assets/images/RentAnimations/banner.png')] 
            bg-no-repeat bg-center bg-cover 
            rounded-[5px] md:rounded-[8px] lg:rounded-[10px]  w-[95%] md:w-[97%] lg:w-[98%]">
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <h1 className='lg:text-7xl text-2xl font-medium text-white text-center lg:mt-12 max-w-[854.75px] mx-auto'>Check on all properties we have available</h1>
                    <div className='max-w-[640px] mx-auto flex flex-col items-center gap-5 text-center mt-9'>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                        </p>
                        <div className='flex gap-3'>
                            <div className='flex lg:gap-4 justify-evenly md:justify-evenly lg:justify-start'>
                                <button
                                    onClick={() => handleButtonClick('cta1')}
                                    className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 ${activeButton === 'cta1' ? 'bg-[#990A05] text-white' : 'text-white'}`}
                                >
                                    Start exploring
                                    {
                                        activeButton === "cta1" ? (
                                            <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                                        ) : (
                                            <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                        )
                                    }
                                </button>
                                <button
                                    onClick={() => handleButtonClick('cta2')}
                                    className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 ${activeButton === 'cta2' ? 'bg-[#990A05] text-white' : 'text-white'}`}
                                >
                                    Post properties
                                    {
                                        activeButton === "cta2" ? (
                                            <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>
                                        ) : (
                                            <MdKeyboardArrowRight></MdKeyboardArrowRight>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <PropertySearchBox onSearch={handleSearch} />
                </div>
            </div>
            <div className='mt-32 mb-20 container mx-auto'>
                <ListedProperties searchParams={searchParams} />
            </div>
        </div>
    )
}

export default Properties;
