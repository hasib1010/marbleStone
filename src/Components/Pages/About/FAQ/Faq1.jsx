import React, { useState } from 'react';
import { FaPlus, } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

const Faq1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-4 md:py-4 lg:py-8 my-20">
            <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-0">
                <div className="flex flex-col    lg:flex-row lg:items-start items-center  lg:gap-[98px]">

                    <div className='text-center'>
                        <h1 className='text-5xl font-medium'>Owner FAQs</h1>
                        <p className='max-w-[600px] mt-4'>Find answers to some of the most common questions property owners ask us.</p>
                    </div>
                    <div className="w-full ">
                        <div className="">
                            <div className="accordion-group flex flex-col gap-0">
                                {[
                                    {
                                        title: "What are your management fees?",
                                        content: "Our management fees are competitive and tailored to the specific needs of your property. We offer a transparent fee structure with no hidden charges. Contact us for a detailed quote based on your property type and requirements."
                                    },
                                    {
                                        title: "What is your realtor sale commission?",
                                        content: "Our realtor sale commission typically ranges between 5-6%, depending on the property and market conditions. We are committed to providing value through expert marketing, negotiation, and sale services to ensure you get the best possible price for your property."
                                    },
                                    {
                                        title: "Which type of house do you take for promoting?",
                                        content: "We promote a wide range of properties, from single-family homes to luxury estates and multi-unit dwellings. Our marketing strategies are customized to highlight the unique features of your property and attract the right buyers."
                                    },
                                    {
                                        title: "What’s the average time to sell a house?",
                                        content: "The average time to sell a house varies depending on the location, market conditions, and property type. On average, our listings sell within 30-60 days, thanks to our targeted marketing efforts and extensive network of potential buyers."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`accordion lg:p-10 md:p-4 p-4 shadow-sm border-b-[0.5pt] w-[]   bg-white ${openIndex === index ? 'active' : ''}`}>
                                        <button
                                            className="accordion-toggle group inline-flex text-left items-center gap-2 justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-400"
                                            onClick={() => handleToggle(index)}
                                            aria-controls={`collapse-${index}`}
                                        >
                                            <h5 className='lg:text-xl md:text-xl text-base font-medium'>{index + 1}. {item.title}</h5>
                                            {openIndex === index ? (
                                                <FaCircleMinus className="text-gray-900 text-xl transition duration-500" />
                                            ) : (
                                                <FaPlus className="text-gray-900 text-xl transition duration-500" />
                                            )}
                                        </button>
                                        <div
                                            id={`collapse-${index}`}
                                            className={`accordion-content w-full px-0 overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                                            style={{ transition: 'max-height 0.3s ease' }}
                                            aria-labelledby={`heading-${index}`}
                                        >
                                            <p className="text-sm ml-5 lg:text-base max-w-[470px] md:text-base mt-4 text-gray-600 font-normal">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-0 lg:mt-40">
                <div className="flex flex-col lg:flex-row lg:items-start items-center lg:gap-[98px]">
                    <div className='text-center'>
                        <h1 className='text-5xl font-medium'>Resident FAQs</h1>
                        <p className='max-w-[600px] mt-4'>
                            Find answers to common questions about living in our properties. Whether it's maintenance, rent, or policies, we've got you covered.
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <div className="accordion-group flex flex-col gap-0">
                                {[
                                    {
                                        title: "How do I submit a maintenance request?",
                                        content: "To submit a maintenance request, log in to your resident portal and navigate to the 'Maintenance Request' section. Provide details about the issue, and our team will respond promptly to schedule a service."
                                    },
                                    {
                                        title: "What should I do if I lose my keys?",
                                        content: "If you lose your keys, please contact our management office immediately. We can arrange for a replacement key or, if necessary, change the locks. There may be a fee associated with this service."
                                    },
                                    {
                                        title: "How can I pay my rent?",
                                        content: "Rent can be paid online through the resident portal using a bank transfer, credit card, or automatic payment setup. If you prefer, you can also pay via check at the management office."
                                    },
                                    {
                                        title: "What are the rules regarding pets in the property?",
                                        content: "Our properties are pet-friendly, but certain restrictions apply. Residents must register their pets with the management office and comply with our pet policy, which includes guidelines on breed, size, and the number of pets allowed. Additional pet fees or deposits may be required."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`accordion lg:p-10 md:p-4 p-4 shadow-sm border-b-[0.5pt] bg-white ${openIndex === index ? 'active' : ''}`}>
                                        <button
                                            className="accordion-toggle group inline-flex text-left items-center gap-2 justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-400"
                                            onClick={() => handleToggle(index)}
                                            aria-controls={`collapse-${index}`}
                                        >
                                            <h5 className='lg:text-xl md:text-xl text-base font-medium'>{index + 1}. {item.title}</h5>
                                            {openIndex === index ? (
                                                <FaCircleMinus className="text-gray-900 text-xl transition duration-500" />
                                            ) : (
                                                <FaPlus className="text-gray-900 text-xl transition duration-500" />
                                            )}
                                        </button>
                                        <div
                                            id={`collapse-${index}`}
                                            className={`accordion-content w-full px-0 overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                                            style={{ transition: 'max-height .5s ease' }}
                                            aria-labelledby={`heading-${index}`}
                                        >
                                            <p className="text-sm lg:text-base ml-5 max-w-[470px] md:text-base mt-4 text-gray-600 font-normal">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Faq1;
