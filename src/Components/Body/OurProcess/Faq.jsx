import React, { useState } from 'react';
import image2 from "./../../../assets/images/card.png";
import image from "./../../../assets/images/img2.png";

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-8 md:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 lg:gap-16 xl:gap-28 lg:flex-row lg:justify-between">
                    
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="accordion-group flex flex-col gap-8">
                                {[
                                    {
                                        title: "Search for your favorite house in your location",
                                        content: "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor."
                                    },
                                    {
                                        title: "Make a visit appointment with one of our agents",
                                        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolorum, cupiditate voluptates beatae sapiente aut unde blanditiis eveniet corrupti voluptatum!"
                                    },
                                    {
                                        title: "Get your dream house in a month, or less",
                                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam, quod commodi laborum autem dolores tempora! Voluptatem, deleniti. Eius delectus necessitatibus velit dolor animi dolorum magni rerum commodi aut recusandae!"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`accordion pb-8 shadow-xl px-2 rounded-md border-solid border-gray-200 ${openIndex === index ? 'active' : ''}`}>
                                        <button
                                            className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                                            onClick={() => handleToggle(index)}
                                            aria-controls={`collapse-${index}`}
                                        >
                                            <h5 className='text-xl font-medium'>{index + 1}. {item.title}</h5>
                                            <svg
                                                className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 ${openIndex === index ? 'rotate-180' : ''}`}
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                    stroke="currentColor"
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div
                                            id={`collapse-${index}`}
                                            className={`accordion-content w-full px-0 overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                                            style={{ transition: 'max-height 0.3s ease' }}
                                            aria-labelledby={`heading-${index}`}
                                        >
                                            <p className="text-base text-gray-600 font-normal">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                        <img
                            src={image}
                            alt="FAQ tailwind section"
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl"
                        />
                        <img className='absolute bottom-0 right-0 md:bottom-[-10%] md:right-[-10%] lg:bottom-[-10%] lg:right-[-15%] w-1/2 md:w-1/3 lg:w-1/4 drop-shadow-xl' src={image2} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqSection;
