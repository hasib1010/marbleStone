import React from 'react';
import { FaBed, FaCar } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { TbSquareOff } from 'react-icons/tb';

function PropertyDetails({ property }) {
    return (
        <div className='container mx-auto'>
            <h1 >Properties {'>'} Property Details</h1>
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

            <div>
                <h4 className='flex items-center  font-medium gap-2 '><IoLocationSharp></IoLocationSharp> {property.location}</h4>
                <h3 className='text-5xl font-medium my-4'>{property.title}</h3>
                <p className='max-w-[653px] my-6'>{property.highlights}</p>
                <div className='flex items-center gap-6 my-7'>
                    <h3 className='flex items-center gap-2  text-[#A4A6B0] font-medium'><TbSquareOff /> {property.space}</h3>
                    <h3 className='flex items-center gap-2  text-[#A4A6B0] font-medium'><GiBathtub />{property.bath}</h3>
                    <h3 className='flex items-center gap-2  text-[#A4A6B0] font-medium'><FaBed />{property.bed}</h3>
                    <h3 className='flex items-center gap-2  text-[#A4A6B0] font-medium'><FaCar />{property.parking}</h3>
                </div>
                <hr className='w-full mb-7' />
                <h4 className='text-4xl font-medium my-4'>About the property</h4>
                <p>{property.aboutProperty}</p>
                <h4 className='text-4xl font-medium my-4'>  Amenities</h4>
                <div className='grid grid-cols-3'>
                    {
                        property.amenities.map(item =>
                            <p>{item}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default PropertyDetails;
