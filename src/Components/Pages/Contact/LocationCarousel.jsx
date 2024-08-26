import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationCarousel = () => {
    const sliderRef = useRef(null);

    const settings = {
    infinite: true, // This enables infinite looping
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    afterChange: current => {
        console.log('Current slide:', current);
    }
};


    const handleSlideClick = index => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    // Array of slide data
    const slides = [
        {
            location: 'San Francisco, CA',
            imageUrl: 'https://i.ibb.co/wrtcSVn/istockphoto-1494439599-612x612.webp'
        },
        {
            location: 'New York, NY',
            imageUrl: 'https://i.ibb.co/9NXCM8k/pexels-seven11nash-380768.jpg'
        },
        {
            location: 'Los Angeles, CA',
            imageUrl: 'https://i.ibb.co/2kJ4GSQ/3d-rendering-business-meeting-working-room-office-building-105762-1972.jpg'
        }
    ];

    return (
        <div className="container mx-auto lg:mb-40 px-5 lg:px-0 ">
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div key={slide.location} className="p-4">
                        <div
                            className="bg-gray-800 rounded-xl overflow-hidden relative cursor-pointer"
                            onClick={() => handleSlideClick(index)}
                        >
                            <img src={slide.imageUrl} alt={slide.location} className="w-full h-[250px] object-cover rounded-xl" />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                                <h2 className="lg:text-xl font-bold">{slide.location}</h2>
                                <p className="text-sm">Come and visit our office. We are always here to welcome you.</p>
                                <div className="flex items-center lg:mt-2">
                                    <FaMapMarkerAlt className="text-white mr-1" />
                                    <span className='text-sm'>{slide.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LocationCarousel;
