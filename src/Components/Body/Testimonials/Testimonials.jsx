import React from 'react';
import { BiSolidMessageRounded } from "react-icons/bi";
import Carusel2 from './Carusel';

const Testimonials = () => {
    return (
        <section className="py-8 md:py-16 lg:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className='flex items-center justify-center gap-3 bg-[#EEEFF1] w-fit px-4 py-2 rounded-full font-medium mx-auto mb-4'>
                        <BiSolidMessageRounded className='bg-[#A4A6B0] text-white text-3xl p-1 rounded-full' />
                        Testimonials
                    </h3>
                    <h4 className='text-3xl md:text-4xl lg:text-5xl font-medium mb-4'>
                        Look at what people <br /> say about us
                    </h4>
                    <p className='text-base md:text-lg lg:text-xl mb-4'>
                        Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam <br /> 
                        ultrices augue convallis nunc ultrices amet consequat adipiscing.
                    </p>
                </div>

                <div className="mt-8">
                    <Carusel2 />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
