import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../../Navbar/Navbar2';
import PropertyDetails from './PropertyDetails';

function PropertyLayout() {
    const { id } = useParams()
    const [property, seProperty] = useState([]);
    useEffect(() => {
        fetch("/properties.json")
            .then(res => res.json())
            .then(data => {
                const propertyInfo = data.find(item => item.id === parseInt(id));
               seProperty(propertyInfo); 
            })
    }, []);
    console.log(property);
    
    return (
        <div>
           <Navbar2></Navbar2>
           <PropertyDetails property={property}></PropertyDetails>
        </div>
    )
}

export default PropertyLayout;