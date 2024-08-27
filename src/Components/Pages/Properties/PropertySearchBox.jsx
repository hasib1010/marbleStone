import React, { useState, useEffect } from 'react';

const PropertySearchBox = () => {
    // State to hold input values
    const [search, setSearch] = useState('');
    const [minRent, setMinRent] = useState('');
    const [maxRent, setMaxRent] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [petsPolicy, setPetsPolicy] = useState('');
    const [sortOptions, setSortOptions] = useState('');

    // Function to handle search (replace with actual implementation)
    const handleSearch = () => {
        console.log('Searching with params:', {
            search,
            minRent,
            maxRent,
            bed,
            bath,
            propertyType,
            petsPolicy,
            sortOptions
        });
        // Implement your search logic or API call here
    };

    // Effect to call handleSearch whenever input values change
    useEffect(() => {
        handleSearch();
    }, [search, minRent, maxRent, bed, bath, propertyType, petsPolicy, sortOptions]);

    return (
        <div className="w-[83%] mx-auto p-6 focus:ring-0 focus:outline-none  backdrop-blur-xl mt-6  rounded-lg shadow-md">
            <form>
                {/* First Line */}
                <div className="grid lg:grid-cols-6 gap-4 mb-6">
                    <div className="flex flex-col col-span-2 lg:w-[400px]">
                        <label htmlFor="search" className="block text-white font-medium">Search</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search for properties"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg w-full"
                        />
                    </div>
                    <div className="flex flex-col w-fit">
                        <label htmlFor="min-rent" className="block text-white font-medium">Min Rent</label>
                        <input
                            type="number"
                            id="min-rent"
                            placeholder="Min Rent"
                            min="0"
                            value={minRent}
                            onChange={(e) => setMinRent(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col w-fit">
                        <label htmlFor="max-rent" className="block text-white font-medium">Max Rent</label>
                        <input
                            type="number"
                            id="max-rent"
                            placeholder="Max Rent"
                            min="0"
                            value={maxRent}
                            onChange={(e) => setMaxRent(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col w-fit">
                        <label htmlFor="bed" className="block text-white font-medium">Beds</label>
                        <input
                            type="number"
                            id="bed"
                            placeholder="Beds"
                            min="0"
                            value={bed}
                            onChange={(e) => setBed(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col w-fit">
                        <label htmlFor="bath" className="block text-white font-medium">Baths</label>
                        <input
                            type="number"
                            id="bath"
                            placeholder="Baths"
                            min="0"
                            value={bath}
                            onChange={(e) => setBath(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg"
                        />
                    </div>
                </div>

                {/* Second Line */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label htmlFor="property-type" className="block mb-1 text-white font-medium">Property Type:</label>
                        <select
                            id="property-type"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg w-full"
                        >
                            <option value="">Select Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                            <option value="townhouse">Townhouse</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pets-policy" className="block mb-1 text-white font-medium">Pets Policy:</label>
                        <select
                            id="pets-policy"
                            value={petsPolicy}
                            onChange={(e) => setPetsPolicy(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg w-full"
                        >
                            <option value="">Select Policy</option>
                            <option value="allowed">Allowed</option>
                            <option value="not-allowed">Not Allowed</option>
                            <option value="negotiable">Negotiable</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sort-options" className="block mb-1 text-white font-medium">Sort By:</label>
                        <select
                            id="sort-options"
                            value={sortOptions}
                            onChange={(e) => setSortOptions(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none   rounded-lg w-full"
                        >
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="beds-asc">Beds: Low to High</option>
                            <option value="beds-desc">Beds: High to Low</option>
                            <option value="newest">Newest Listings</option>
                        </select>
                    </div>
                </div>

                {/* No Search button needed as search is triggered automatically */}
            </form>
        </div>
    );
};

export default PropertySearchBox;
