import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import DashboardNav from '../DashboardNav/DashboardNav';

function PostProperties() {
    const [formData, setFormData] = useState({
        id: '',
        price: '',
        parking: '',
        bed: '',
        bath: '',
        propertyType: '',
        petsPolicy: false,
        location: '',
        title: '',
        thumbnail: '',
        imageGallery: [],
        forRentOrSale: '',
        aboutProperty: '',
        highlights: '',
        space: '',
        amenities: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (name === 'thumbnail') {
            if (files.length > 0) {
                const url = URL.createObjectURL(files[0]);
                setFormData({ ...formData, thumbnail: url });
            }
        } else if (name === 'imageGallery') {
            const urls = Array.from(files).map(file => URL.createObjectURL(file));
            setFormData({ ...formData, imageGallery: urls });
        }
    };

    return (
        <div className='flex min-h-screen bg-gray-100'>
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNav />
                <div className="flex-1 p-6 overflow-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-semibold mb-6">Post Property</h1>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700">ID:</label>
                                    <input
                                        type="number"
                                        name="id"
                                        value={formData.id}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Price:</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Parking:</label>
                                    <input
                                        type="number"
                                        name="parking"
                                        value={formData.parking}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Bedrooms:</label>
                                    <input
                                        type="number"
                                        name="bed"
                                        value={formData.bed}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Bathrooms:</label>
                                    <input
                                        type="number"
                                        name="bath"
                                        value={formData.bath}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Property Type:</label>
                                    <input
                                        type="text"
                                        name="propertyType"
                                        value={formData.propertyType}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="petsPolicy"
                                            checked={formData.petsPolicy}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <span className="text-gray-700">Pets Policy</span>
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-gray-700">Location:</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Title:</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Thumbnail:</label>
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 file:cursor-pointer focus:outline-none"
                                    />
                                    {formData.thumbnail && (
                                        <img src={formData.thumbnail} alt="Thumbnail Preview" className="mt-2 w-32 h-32 object-cover rounded-md border border-gray-200" />
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700">Image Gallery:</label>
                                    <input
                                        type="file"
                                        name="imageGallery"
                                        accept="image/*"
                                        multiple
                                        onChange={handleFileChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 file:cursor-pointer focus:outline-none"
                                    />
                                    {formData.imageGallery.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {formData.imageGallery.map((url, index) => (
                                                <img key={index} src={url} alt={`Gallery ${index}`} className="w-32 h-32 object-cover rounded-md border border-gray-200" />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700">For Rent or Sale:</label>
                                    <input
                                        type="text"
                                        name="forRentOrSale"
                                        value={formData.forRentOrSale}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">About Property:</label>
                                    <textarea
                                        name="aboutProperty"
                                        value={formData.aboutProperty}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        rows="4"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Highlights:</label>
                                    <textarea
                                        name="highlights"
                                        value={formData.highlights}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        rows="4"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Space:</label>
                                    <input
                                        type="text"
                                        name="space"
                                        value={formData.space}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Amenities (comma separated):</label>
                                    <input
                                        type="text"
                                        name="amenities"
                                        value={formData.amenities.join(', ')}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            amenities: e.target.value.split(', ').map(amenity => amenity.trim())
                                        })}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostProperties;
