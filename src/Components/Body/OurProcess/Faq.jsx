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
                <div className="flex flex-col gap-8 lg:gap-16 xl:gap-28 lg:flex-row items-center lg:justify-between">

                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <div className="accordion-group flex flex-col gap-8">
                                {[
                                    {
                                        title: "Search for your favorite house in your location",
                                        content: "Start by exploring properties in your preferred neighborhoods. Our advanced search filters help you find homes that match your criteria, whether it's location, size, or amenities. Use our interactive maps to see nearby schools, parks, and shopping areas."
                                    },
                                    {
                                        title: "Make a visit appointment with one of our agents",
                                        content: "Once you've found potential homes, schedule a visit with one of our experienced agents. They will provide you with a personalized tour of the property, answer all your questions, and offer expert advice to help you make an informed decision."
                                    },
                                    {
                                        title: "Get your dream house in a month, or less",
                                        content: "After your visit, if you decide to move forward, we'll guide you through the purchasing process. Our team will handle the paperwork, negotiations, and inspections to ensure a smooth transaction. With our streamlined approach, you could be settling into your new home in less than a month!"
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
                            alt="FAQ illustration"
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl"
                        />
                        <img className='absolute -bottom-16 right-0 md:bottom-[-10%] md:right-[-5%] lg:bottom-[-10%] lg:right-[-15%] w-1/3 md:w-1/3 lg:w-2/4 drop-shadow-xl' src={image2} alt="Additional illustration" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqSection;
