import React from 'react';
import Navbar from '../Navbar';
import arrow from './../../../assets/logo/Element.png' 

const Header = () => {
    return (
        <div className="mx-auto mb-20 
    h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1086px]
    bg-[url('./assets/images/banner.png')] 
    bg-no-repeat bg-center bg-cover 
    rounded-[5px] md:rounded-[8px] lg:rounded-[10px] 
    w-[95%] md:w-[97%] lg:w-[98%]">
            <Navbar />
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between mt-[24px] md:mt-[44px]">
                    <h3 className="text-[36px] md:text-[48px] lg:text-[72px] font-medium text-white leading-tight lg:leading-[82.8px]">
                        Chicago’s Southside <br className="hidden lg:block" /> Property Management
                    </h3>
                    <div className="mt-8 lg:mt-0">
                        <p className="w-full lg:w-[346px] text-white mb-6 text-[14px] md:text-[16px]">
                            Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                        </p>
                        <div className="">
                            <button className="flex items-center gap-2 px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 rounded-3xl text-[14px] md:text-[16px] font-medium leading-5 bg-[#990A05] text-white">
                                <div className="w-8 sm:w-10 md:w-14"></div>
                                <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;