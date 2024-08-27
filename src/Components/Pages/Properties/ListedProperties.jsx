import React, { useEffect, useState } from 'react';
import { FaHouse } from 'react-icons/fa6';
import PropertyCardLayout from './PropertyCardLayout';

function ListedProperties() {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch("properties.json")
            .then(res => res.json())
            .then(data => setProperties(data)
            )
    }, [])


    return (
        <div>
            <h1 className='flex gap-2 bg-[#EEEFF1] w-fit px-3 py-2 text-xl font-medium rounded-full items-center'>
                <FaHouse className='text-white bg-[#A4A6B0] p-[6px] text-3xl rounded-full ' />
                All properties</h1>
            <div className='flex items-center justify-between mt-5'>
                <h4 className='max-w-[345.25px] font-medium text-5xl my-10'>All available properties</h4>
                <p className='max-w-[562.047px]'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
            </div>
            <div className='grid grid-cols-3 gap-24   '>
                {
                    properties.map(item =>
                        <PropertyCardLayout  item={item}></PropertyCardLayout>
                    )
                }
            </div>
        </div>
    )
}

export default ListedProperties;