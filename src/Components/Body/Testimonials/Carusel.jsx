import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from "./../../../assets/people/person.png";
import person2 from "./../../../assets/people/person2.png";
import "./Carusel.css";

const Carusel2 = () => {
    return (
        <div className='relative mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='shadow-xl py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12'>
                            <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full' src={person2} alt="Person 2" />
                            <div className='flex flex-col gap-3 text-center lg:text-left'>
                                <h3 className='text-lg sm:text-xl lg:text-2xl font-medium'>
                                    “Navigating properties made easy, unbeatable USA options.”
                                </h3>
                                <p className='font-normal text-sm sm:text-base'>
                                    Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.
                                </p>
                                <h4 className='text-lg sm:text-xl font-medium'>Andy Smith</h4>
                                <h4 className='text-base sm:text-lg'>Chicago, IL</h4>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12'>
                            <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full' src={person1} alt="Person 1" />
                            <div className='flex flex-col gap-3 text-center lg:text-left'>
                                <h3 className='text-lg sm:text-xl lg:text-2xl font-medium'>
                                    “Navigating properties made easy, unbeatable USA options.”
                                </h3>
                                <p className='font-normal text-sm sm:text-base'>
                                    Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.
                                </p>
                                <h4 className='text-lg sm:text-xl font-medium'>Andy Smith</h4>
                                <h4 className='text-base sm:text-lg'>Chicago, IL</h4>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Carusel2;
