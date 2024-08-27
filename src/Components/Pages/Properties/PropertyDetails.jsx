import React from 'react';
import { FaArrowRight, FaBed, FaCar, FaRegLightbulb } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { TbSquareOff } from 'react-icons/tb';
import image from "../../../assets/people/person.png"
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';

function PropertyDetails({ property }) {
    // Ensure amenities is defined and is an array
    const amenities = Array.isArray(property.amenities) ? property.amenities : [];

    return (
        <div className='container mx-auto mb-20'>
            <h1>Properties {'>'} Property Details</h1>
            {property.imageGallery && property.imageGallery.length > 0 ? (
                <div className='image-gallery my-3 mb-14'>
                    <div className='grid grid-cols-2 gap-4 mb-4'>
                        {property.imageGallery.slice(0, 2).map((imgUrl, index) => (
                            <img
                                key={index}
                                src={imgUrl}
                                alt={`Property image ${index + 1}`}
                                className='w-full rounded-xl h-auto'
                            />
                        ))}
                    </div>
                    {property.imageGallery.length > 2 && (
                        <div className='grid grid-cols-3 gap-4'>
                            {property.imageGallery.slice(2).map((imgUrl, index) => (
                                <img
                                    key={index + 2} // Adjust index for unique key
                                    src={imgUrl}
                                    alt={`Property image ${index + 3}`}
                                    className='w-full rounded-xl h-auto'
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p>No images available</p>
            )}

            <div className='grid grid-cols-6 gap-24'>
                <div className='col-span-4'>
                    <h4 className='flex items-center font-medium gap-2'>
                        <IoLocationSharp /> {property.location}
                    </h4>
                    <h3 className='text-5xl font-medium my-4'>{property.title}</h3>
                    <p className='max-w-[653px] my-6'>{property.highlights}</p>
                    <div className='flex items-center gap-6 my-7'>
                        <h3 className='flex items-center gap-2 text-[#A4A6B0] font-medium'>
                            <TbSquareOff /> {property.space}
                        </h3>
                        <h3 className='flex items-center gap-2 text-[#A4A6B0] font-medium'>
                            <GiBathtub /> {property.bath}
                        </h3>
                        <h3 className='flex items-center gap-2 text-[#A4A6B0] font-medium'>
                            <FaBed /> {property.bed}
                        </h3>
                        <h3 className='flex items-center gap-2 text-[#A4A6B0] font-medium'>
                            <FaCar /> {property.parking}
                        </h3>
                    </div>
                    <hr className='w-full mb-7' />
                    <h4 className='text-4xl font-medium my-4'>About the property</h4>
                    <p>{property.aboutProperty}</p>
                    <h4 className='text-4xl font-medium my-4'>Amenities</h4>
                    <div className='grid grid-cols-3'>
                        {amenities.length > 0 ? (
                            amenities.map((item, index) => (
                                <p className='flex items-center my-10 gap-2 text-xl w-fit shadow-md px-5 py-1 rounded-full font-medium' key={index}><FaRegLightbulb className='text-4xl text-white bg-black p-1 rounded-full' /> {item}</p>
                            ))
                        ) : (
                            <p>No amenities listed</p>
                        )}
                    </div>
                </div>
                <div className='col-span-2 flex flex-col gap-6'>
                    <div className='shadow-md px-12 py-10 w-full rounded-2xl'>
                        <p className='text-5xl font-medium'>{property.price} <span className='text-xl text-[#A4A6B0]'>USD</span></p>
                        <p className=' text-xl font-medium text-[#A4A6B0]'>Property for {property.forRentOrSale}</p>
                    </div>
                    <div className='shadow-md px-12 py-10 w-full rounded-2xl '>
                        <p className='text-xl font-medium'>Get in touch to receive more info</p>
                        <p className='   my-4 '>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
                        <div className='flex gap-3'>
                            <button

                                className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 bg-[#990A05] text-white `}
                            >
                                Apply <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>

                            </button>
                            <button

                                className={`px-4 py-2 text-base font-medium rounded-full flex items-center gap-3 bg-[#EAF4FF] text-black `}
                            >
                                Application process <FaArrowRight className='bg-white text-black rounded-full p-[3px] text-xl'></FaArrowRight>

                            </button>
                        </div>
                    </div>
                    <div className='shadow-md px-12 py-10 w-full rounded-2xl '>
                        <p className='text-xl font-medium'>Get in touch with the agent</p>
                        <p className='   my-4 '>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas lorem.</p>
                        <div className='flex gap-5 '>
                            <img className='rounded-full w-[79.746px] h-[79.683px]' src={image} alt="" />
                            <div>
                                <p className='text-xl font-medium'>Sophie Moore</p>
                                <p className='flex items-center gap-2 text-[#A4A6B0]'><MdOutlineEmail />sophiemoore@casa.com</p>
                                <p className='flex items-center gap-2 text-[#A4A6B0]'><IoMdCall />(414) 325 - 427</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetails;
