import React, { useState, useEffect } from 'react';

const PropertySearchBox = ({ onSearch }) => {
    const [search, setSearch] = useState(sessionStorage.getItem('search') || '');
    const [minRent, setMinRent] = useState(sessionStorage.getItem('minRent') || '');
    const [maxRent, setMaxRent] = useState(sessionStorage.getItem('maxRent') || '');
    const [bed, setBed] = useState(sessionStorage.getItem('bed') || '');
    const [bath, setBath] = useState(sessionStorage.getItem('bath') || '');
    const [forRentOrSale, setForRentOrSale] = useState(sessionStorage.getItem('forRentOrSale') || '');
    const [petsPolicy, setPetsPolicy] = useState(sessionStorage.getItem('petsPolicy') || '');
    const [sortOptions, setSortOptions] = useState(sessionStorage.getItem('sortOptions') || '');

    useEffect(() => {
        const searchData = {
            search,
            minRent: minRent ? parseInt(minRent, 10) : '',
            maxRent: maxRent ? parseInt(maxRent, 10) : '',
            bed: bed ? parseInt(bed, 10) : '',
            bath: bath ? parseInt(bath, 10) : '',
            forRentOrSale: forRentOrSale || '',
            petsPolicy: petsPolicy ? (petsPolicy === 'true') : '',
            sortOptions: sortOptions || ''
        };

        // Save state to sessionStorage
        Object.keys(searchData).forEach(key => {
            sessionStorage.setItem(key, searchData[key]);
        });

        onSearch(searchData);
    }, [search, minRent, maxRent, bed, bath, forRentOrSale, petsPolicy, sortOptions, onSearch]);

    return (
        <div className="lg:w-[83%] mx-auto p-6 focus:ring-0 focus:outline-none backdrop-blur-md  mt-6 rounded-lg shadow-md">
            <form>
                {/* First Line */}
                <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-4 gap-3  mb-6">
                    <div className="flex flex-col col-span-2   ">
                        <label htmlFor="search" className="block text-white font-medium">Search</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search for properties"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg w-full border"
                        />
                    </div>
                    <div className="flex flex-col  w-full">
                        <label htmlFor="min-rent" className="block text-white font-medium">Min Rent</label>
                        <input
                            type="number"
                            id="min-rent"
                            
                            min="0"
                            value={minRent}
                            onChange={(e) => setMinRent(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg border"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="max-rent" className="block text-white font-medium">Max Rent</label>
                        <input
                            type="number"
                            id="max-rent"
 
                            min="0"
                            value={maxRent}
                            onChange={(e) => setMaxRent(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg border"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="bed" className="block text-white font-medium">Beds</label>
                        <select
                            id="bed"
                            value={bed}
                            onChange={(e) => setBed(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg w-full border"
                        >
                            <option value="">Bed Rooms</option>
                            <option value={1}>1 Bed Room</option>
                            <option value={2}>2 Bed Rooms</option>
                            <option value={3}>3 Bed Rooms</option>
                            <option value={4}>4 Bed Rooms</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="bath" className="block text-white font-medium">Baths</label>
                        <select
                            id="bath"
                            value={bath}
                            onChange={(e) => setBath(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg w-full border"
                        >
                            <option value="">Baths</option>
                            <option value={1}>1 Bath Room</option>
                            <option value={2}>2 Bath Rooms</option>
                            <option value={3}>3 Bath Rooms</option>
                            <option value={4}>4 Bath Rooms</option>
                            <option value={5}>5 Bath Rooms</option>
                        </select>
                    </div>
                </div>

                {/* Second Line */}
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-4 mb-6">
                    <div>
                        <label htmlFor="forRentOrSale" className="block mb-1 text-white font-medium">Property Type</label>
                        <select
                            id="forRentOrSale"
                            value={forRentOrSale}
                            onChange={(e) => setForRentOrSale(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg w-full border"
                        >
                            <option value="">Any</option>
                            <option value="Sale">For Sale</option>
                            <option value="Rent">For rent</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pets-policy" className="block mb-1 text-white font-medium">Pets Policy</label>
                        <select
                            id="pets-policy"
                            value={petsPolicy}
                            onChange={(e) => setPetsPolicy(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg w-full border"
                        >
                            <option value="">Any Policy</option>
                            <option value="true">Allowed</option>
                            <option value="false">Not Allowed</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sort-options" className="block mb-1 text-white font-medium">Sort</label>
                        <select
                            id="sort-options"
                            value={sortOptions}
                            onChange={(e) => setSortOptions(e.target.value)}
                            className="p-2 focus:ring-0 focus:outline-none rounded-lg w-full border"
                        >
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="beds-asc">Beds: Low to High</option>
                            <option value="beds-desc">Beds: High to Low</option>
                            <option value="newest">Newest Listings</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PropertySearchBox;
