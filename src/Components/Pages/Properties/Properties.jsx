import React from 'react';
import Navbar from '../../Navbar/Navbar';

function Properties() {
    return (
        <div className="relative mx-auto lg:mb-20 bg-[#FAFAFB]
            h-[500px] sm:h-[900px] md:h-[600px] lg:h-[900px] xl:h-[1086px]
            bg-[url('./assets/images/RentAnimations/banner.png')] 
            bg-no-repeat bg-center bg-cover 
            rounded-[5px] md:rounded-[8px] lg:rounded-[10px]  w-[95%] md:w-[97%] lg:w-[98%]">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <h1 className='text-7xl font-medium text-white text-center mt-12 max-w-[716px] mx-auto'>Properties in Chicago, IL</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.
                </p>
            </div>
        </div>
    )
}

export default Properties;