import React, { useEffect, useState } from 'react';
import { FaHouse } from 'react-icons/fa6';
import PropertyCardLayout from './PropertyCardLayout';

function ListedProperties({ searchParams }) {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 6;

    useEffect(() => {
        fetch("properties.json")
            .then(res => res.json())
            .then(data => {
                setProperties(data);
                filterProperties(data);
            });
    }, []);

    useEffect(() => {
        filterProperties(properties);
    }, [searchParams, properties]);

    // Filter properties based on search parameters
    const filterProperties = (properties) => {
        const {
            search,
            minRent,
            maxRent,
            bed,
            bath,
            propertyType,
            petsPolicy,
            sortOptions
        } = searchParams;

        let filtered = properties;

        if (search) {
            filtered = filtered.filter(property =>
                property.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (minRent) {
            filtered = filtered.filter(property => property.rent >= minRent);
        }

        if (maxRent) {
            filtered = filtered.filter(property => property.rent <= maxRent);
        }

        if (bed) {
            filtered = filtered.filter(property => property.beds >= bed);
        }

        if (bath) {
            filtered = filtered.filter(property => property.baths >= bath);
        }

        if (propertyType) {
            filtered = filtered.filter(property => property.type === propertyType);
        }

        if (petsPolicy) {
            filtered = filtered.filter(property => property.petsPolicy === petsPolicy);
        }

        if (sortOptions) {
            switch (sortOptions) {
                case 'price-asc':
                    filtered.sort((a, b) => a.rent - b.rent);
                    break;
                case 'price-desc':
                    filtered.sort((a, b) => b.rent - a.rent);
                    break;
                case 'beds-asc':
                    filtered.sort((a, b) => a.beds - b.beds);
                    break;
                case 'beds-desc':
                    filtered.sort((a, b) => b.beds - a.beds);
                    break;
                case 'newest':
                    filtered.sort((a, b) => new Date(b.listedDate) - new Date(a.listedDate));
                    break;
                default:
                    break;
            }
        }

        setFilteredProperties(filtered);
    };

    // Calculate the index range for the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h1 className='flex gap-2 bg-[#EEEFF1] w-fit px-3 py-2 text-xl font-medium rounded-full items-center'>
                <FaHouse className='text-white bg-[#A4A6B0] p-[6px] text-3xl rounded-full ' />
                All properties
            </h1>
            <div className='flex items-center justify-between mt-5'>
                <h4 className='max-w-[345.25px] font-medium text-5xl my-10'>All available properties</h4>
                <p className='max-w-[562.047px]'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
            </div>
            <div className='grid grid-cols-3 gap-24'>
                {/* Property cards */}
                {currentProperties.map(item => (
                    <PropertyCardLayout key={item.id} item={item} />
                ))}
            </div>
            {/* Page navigation */}
            {totalPages > 1 && (
                <div className='flex justify-center mt-8'>
                    <nav>
                        <ul className='flex space-x-2'>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index + 1}>
                                    <button
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-[#8c98d5] text-white' : 'bg-white text-black'}`}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default ListedProperties;
