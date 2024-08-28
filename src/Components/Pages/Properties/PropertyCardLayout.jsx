import React from 'react';
import { FaKey } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function PropertyCardLayout({ item }) {

    const {id, thumbnail, forRentOrSale, location, title } = item
    const renderCategoryIcon = (forRentOrSale) => {
        switch (forRentOrSale) {
            case 'Rent':
                return <FaKey className="text-base mr-2" />;
            case 'Sale':
                return <GiPriceTag className="text-base mr-2" />;
            default:
                return null;
        }
    };
    return (
        <Link to={`/rentals/${id}`}>
            <div className=' '>
                <div className="bg-white rounded-lg   lg:mx-3   cursor-pointer overflow-hidden py-2 lg:px-4 relative   transition-transform duration-300 ease-in-out transform lg:hover:scale-105 lg:hover:shadow-lg">
                    <img
                        src={thumbnail}
                        alt=""
                        className="rounded-xl  w-full  object-cover  transition-opacity duration-300 ease-in-out hover:opacity-80"
                    />
                    <div>
                        <span className="bg-black text-white absolute top-5 left-8 text-sm md:text-base font-medium py-1 px-5 rounded-full flex items-center">
                            <Symbol className="mr-2 lg:text-lg md:text-xl" />
                            {renderCategoryIcon(forRentOrSale)} <span>{forRentOrSale}</span>
                        </span>
                        <h2 className="text-lg mt-2 md:text-xl font-bold mb-2">{title}</h2>
                        <div className="flex my-4 md:flex-row lg:flex-row justify-between md:items-center">
                            <p className="text-black text-sm gap-3 font-medium flex items-center">
                                <IoLocationSharp className='text-xl' /> {location}
                            </p>
                            <div className='hidden'>
                                { }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default PropertyCardLayout;