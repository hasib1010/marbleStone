import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const LocationCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            location: 'San Francisco, CA',
            imageUrl: 'https://i.ibb.co/wrtcSVn/istockphoto-1494439599-612x612.webp',
        },
        {
            location: 'New York, NY',
            imageUrl: 'https://i.ibb.co/9NXCM8k/pexels-seven11nash-380768.jpg',
        },
        {
            location: 'Los Angeles, CA',
            imageUrl: 'https://i.ibb.co/2kJ4GSQ/3d-rendering-business-meeting-working-room-office-building-105762-1972.jpg',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative carousel-container px-4 lg:px-0">
            <div className="carousel-content flex flex-wrap gap-6 mb-10  lg:flex-nowrap lg:h-fit lg:w-full lg:justify-between  ">
                {/* Main Slide */}
                <div
                    className="carousel-slide basis-4/5 relative main-slide    flex-shrink-0 lg:w-[954.563px] lg:h-[440.139px] mx-auto w-full h-[300px] md:w-[600px] md:h-[350px]" 
                >
                    <img
                        src={slides[currentIndex].imageUrl}
                        alt={slides[currentIndex].location}
                        className="slide-image   h-full w-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end">
                        <div className="slide-info absolute bottom-5 z-50 left-5 text-white">
                            <h2 className="text-base md:text-lg lg:text-xl font-medium mb-2">{slides[currentIndex].location}</h2>
                            <p className="mb-4 text-xs md:text-sm lg:text-base">
                                Come and visit our office. We are always here to welcome you.
                            </p>
                            <p className='flex items-center gap-3 text-3xl'><IoLocationSharp></IoLocationSharp> {slides[currentIndex].location}</p>
                        </div>
                        {/* Overlay */}
                        <div className="rounded-b-2xl absolute inset-x-0 z-30 bottom-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                </div>
                {/* Secondary Slide */}
                <div
                    className="opacity-45 lg:block hidden carousel-slide secondary-slide flex-shrink-0 lg:w-[300px] lg:h-[441.075px] w-full h-[200px] md:h-[300px]  bg-left bg-cover bg-no-repeat rounded-xl cursor-pointer"
                    onClick={handleNext}
                    style={{
                        backgroundImage: `url(${slides[(currentIndex + 1) % slides.length].imageUrl})`,
                        backgroundPosition: 'left center',
                        backgroundSize: 'cover',
                    }}
                />

                {/* Navigation Buttons (Only visible on mobile and tablet) */}
                <button
                    className=" absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full lg:hidden"
                    onClick={handlePrev}
                >
                    &lt;
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full lg:hidden"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default LocationCarousel;
