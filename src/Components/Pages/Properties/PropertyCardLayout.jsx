import React from 'react';
import { FaKey } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';

function PropertyCardLayout({ item }) {
    console.log(item);
    const { thumbnail, forRentOrSale, location, title } = item
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
        <div className=' '>
          <div className="bg-white rounded-lg border p-1 cursor-pointer overflow-hidden px-1 relative w-fit transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  <img
    src={thumbnail}
    alt=""
    className="rounded-xl h-48 object-cover md:h-64 transition-opacity duration-300 ease-in-out hover:opacity-80"
  />
  <div>
    <span className="bg-black text-white absolute top-3 left-5 text-sm md:text-base font-medium py-1 px-5 rounded-full flex items-center">
      <Symbol className="mr-2 text-lg md:text-xl" />
      {renderCategoryIcon(forRentOrSale)} <span>{forRentOrSale}</span>
    </span>
    <h2 className="text-lg mt-2 md:text-xl font-bold mb-2">{title}</h2>
    <div className="flex my-4 md:flex-row lg:flex-row justify-between md:items-center">
      <p className="text-black text-sm gap-3 font-medium flex items-center">
        <IoLocationSharp className='text-xl' /> {location}
      </p>
    </div>
  </div>
</div>

        </div>
    )
}

export default PropertyCardLayout;