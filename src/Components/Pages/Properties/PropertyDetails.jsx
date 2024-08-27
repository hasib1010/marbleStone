import React from 'react';

function PropertyDetails({ property }) {
    console.log(property);

    return (
        <div className='container mx-auto'>
            <h1>Property Details</h1> 
            {property.imageGallery && property.imageGallery.length > 0 ? (
                <div className='image-gallery'>
                   
                    <div className='grid grid-cols-2 gap-4 mb-4'>
                        {property.imageGallery.slice(0, 2).map((imgUrl, index) => (
                            <img
                                key={index}
                                src={imgUrl}
                                alt={`Property image ${index + 1}`}
                                className='w-full h-auto'
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
                                    className='w-full h-auto'
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p>No images available</p>
            )}
        </div>
    );
}

export default PropertyDetails;
