import React, { useEffect, useState } from 'react';
import { FaHouse } from 'react-icons/fa6';
import PropertyCardLayout from './PropertyCardLayout';

function ListedProperties({ searchParams }) {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 6;

    useEffect(() => {
        // Fetch properties when the component mounts
        fetch("properties.json")
            .then(res => res.json())
            .then(data => {
                setProperties(data);
                setFilteredProperties(data); // Default to showing all properties
            })
            .catch(err => console.error("Error fetching properties:", err));
    }, []);

    useEffect(() => {
        // Filter properties based on searchParams
        filterProperties(properties);
    }, [searchParams, properties]);

    const filterProperties = (properties) => {
        const {
            search,
            minRent,
            maxRent,
            bed,
            bath,
            forRentOrSale,
            petsPolicy,
            sortOptions
        } = searchParams;

        let filtered = properties;

        // Filtering logic
        if (search) {
            filtered = filtered.filter(property =>
                property.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (minRent) {
            filtered = filtered.filter(property => property.price >= parseFloat(minRent));
        }

        if (maxRent) {
            filtered = filtered.filter(property => property.price <= parseFloat(maxRent));
        }

        if (bed) {
            filtered = filtered.filter(property => property.bed >= parseInt(bed, 10));
        }

        if (bath) {
            filtered = filtered.filter(property => property.bath >= parseInt(bath, 10));
        }

        if (forRentOrSale) {
            filtered = filtered.filter(property => property.forRentOrSale === forRentOrSale);
        }

        if (petsPolicy) {
            filtered = filtered.filter(property => property.petsPolicy === (petsPolicy === 'true'));
        }

        console.log("Filtered properties before sorting:", filtered);

        // Sorting logic
        if (sortOptions) {
            switch (sortOptions) {
                case 'price-asc':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'beds-asc':
                    filtered.sort((a, b) => a.bed - b.bed);
                    break;
                case 'beds-desc':
                    filtered.sort((a, b) => b.bed - a.bed);
                    break;
                case 'newest':
                    filtered.sort((a, b) => new Date(b.listedDate) - new Date(a.listedDate));
                    break;
                default:
                    break;
            }
        }

        console.log("Filtered properties after sorting:", filtered);
        setFilteredProperties(filtered);
    };

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

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
            <div className='grid grid-cols-2 gap-14 '>
                {/* Property cards */}
                {currentProperties.length > 0 ? (
                    currentProperties.map(item => (
                        <PropertyCardLayout key={item.id} item={item} />
                    ))
                ) : (
                    <p>No properties found</p>
                )}
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
