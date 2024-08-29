import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdCall, MdOutlineEmail } from 'react-icons/md';
import arrow from '../../../assets/logo/Element.png';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zipCode: '',
        propertyType: '',
        status: '',
        propertyValue: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        comments: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // handle form submission
    };

    const usStates = [
        { label: "Select state", value: "" },
        { label: "Alabama", value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },
        { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },
        { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },
        { label: "Hawaii", value: "HI" },
        { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },
        { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },
        { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },
        { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },
        { label: "Maryland", value: "MD" },
        { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },
        { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },
        { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },
        { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },
        { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },
        { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },
        { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },
        { label: "Ohio", value: "OH" },
        { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },
        { label: "Pennsylvania", value: "PA" },
        { label: "Rhode Island", value: "RI" },
        { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },
        { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },
        { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },
        { label: "Virginia", value: "VA" },
        { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },
        { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" }
    ];

    return (
        <div className='lg:mb-40 mb-10'>
            <h2 className="text-center lg:text-5xl text-2xl font-medium mb-4">Inquire About Our Services</h2>
            <p className="text-center lg:text-2xl  text-[#464851] mb-6">Property Information</p>

            <form onSubmit={handleSubmit} className="mx-auto p-12 max-w-[937px] bg-white rounded-lg shadow-md">


                <div className="mb-6">
                    <h3 className='text-2xl font-medium mb-5'>Property Information</h3>
                    <div className="flex gap-7 flex-col lg:flex-row ">
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Type your address"
                                className=" p-2 w-full none rounded-md focus:outline-none border  "
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Type your city name"
                                className=" w-full  p-2 none rounded-md focus:outline-none border  "
                            />
                        </div>
                    </div>
                    <div className="flex justify-between flex-col lg:flex- gap-7">
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">State</label>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full  p-2 none rounded-md focus:outline-none border  "
                            >
                                {usStates.map((state) => (
                                    <option key={state.value} value={state.value}>
                                        {state.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Zip Code</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                placeholder="Type your zip code"
                                className="w-full p-2 none rounded-md focus:outline-none border  "
                            />
                        </div>
                    </div>
                    <div className='flex justify-between flex-col lg:flex-row   gap-7 '>
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Property Type</label>
                            <select
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleChange}
                                className="w-full  p-2 none rounded-md focus:outline-none border  "
                            >
                                <option value="">Select your property type</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full  p-2 none rounded-md focus:outline-none border  "
                            >
                                <option value="">Select one</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block font-medium mb-1">Property Value</label>
                        <input
                            type="text"
                            name="propertyValue"
                            value={formData.propertyValue}
                            onChange={handleChange}
                            placeholder="Type here..."
                            className="w-full  p-2 none rounded-md focus:outline-none border  "
                        />
                    </div>
                </div>



                <div className="mb-6">
                    <p className="text-2xl font-medium mb-5">Contact Information</p>
                    <div className="flex  gap-7 lg:flex-row flex-col">
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">First name</label>
                            <div className='flex items-center gap-1'>
                                <IoPerson className='text-gray-500'></IoPerson>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className="w-full  p-2 none rounded-md focus:outline-none border  "
                                />
                            </div>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Last name</label>
                            <div className="flex items-center gap-1">
                                <IoPerson className='text-gray-500'></IoPerson>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className=" w-full p-2 none rounded-md focus:outline-none border  "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-7 lg:flex-row flex-col">
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Phone number</label>
                            <div className="flex items-center gap-1">
                                <MdCall className='text-gray-500'></MdCall>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="(123) 456 - 7890"
                                    className="w-full  p-2 none rounded-md focus:outline-none border  "
                                />
                            </div>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block font-medium mb-1">Email address</label>
                            <div className="flex items-center gap-1">
                                <MdOutlineEmail className='text-gray-500 text-xl'></MdOutlineEmail>
                                <input
                                    type="email"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    placeholder="example@youremail.com"
                                    className="w-full  p-2 none rounded-md focus:outline-none border  "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block font-medium mb-1">Comments</label>
                        <div className="flex items-center gap-1">
                            <FaPencilAlt className='text-gray-500 '></FaPencilAlt>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className=" w-full  p-2 none rounded-md focus:outline-none border  "
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" value={"submit"} className="relative flex items-center gap-2 px-4 py-2 rounded-3xl text-[16px] font-medium leading-5 text-white
        transition-all transform hover:scale-105 hover:shadow-lg button-gradient button-gradient-hover ">
                    <span className=" ">Send message</span>
                    <img className="bg-white p-2 sm:p-[8px] md:p-[10px] rounded-full" src={arrow} alt="Arrow" />
                </button>
            </form>
        </div>

    );
};

export default InquiryForm;
