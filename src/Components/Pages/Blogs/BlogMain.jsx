import React, { useEffect, useState } from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { FaSearch, FaStar } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import mac from "../../../assets/images/mac.png";
import LatestPost from './LatestPost';
import BlogSlide from './BlogSlide';
import { ClipLoader } from 'react-spinners';

const BlogMain = () => {
    const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState({ blogs: [] });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch('https://marble-stone-server.vercel.app/blogs');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched data:', data);
                setBlogData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []); 

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen bg-[#FAFAFB]'>
                <ClipLoader size={150} color={"#123abc"} loading={loading} />
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex justify-center items-center min-h-screen bg-[#FAFAFB]'>
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className='h-fit bg-[#FAFAFB]'>
            <Navbar2 />
            <div className='max container mx-auto px-4'>
                <h2 className='lg:text-7xl font-medium my-4'>News & Articles</h2>
                <div className='flex lg:flex-row md:flex-row flex-col-reverse justify-between my-7'>
                    <p className='max-w-[562.047px] px-3 mt-2'>
                        Stay informed with the latest trends and insights from the world of real estate. Our articles cover everything from market analysis to property tips.
                    </p>
                    <div className='flex justify-center items-center w-fit'>
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Search for articles...'
                                className='w-80 py-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none'
                            />
                            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full'>
                                <FaSearch className='text-white' />
                            </button>
                        </div>
                    </div>
                </div>

                <BlogSlide blogData={blogData} />
            </div>

            <div className='bg-[#14161C] container mx-auto lg:p-28 md:p-10 p-5 rounded-2xl text-white relative my-20 flex lg:flex-row md:flex-col flex-col justify-between'>
                <div className='max-w-[447px] flex flex-col gap-7'>
                    <div className='flex items-center px-4 text-white gap-2 py-[10px] bg-[#202127] w-fit rounded-full'>
                        <FaStar className='p-1 text-3xl rounded-full bg-[#464851]' />
                        <p>Newsletter</p>
                    </div>
                    <h5 className='lg:text-5xl'>Subscribe to Our Weekly Newsletter</h5>
                    <p>
                        Get the latest updates, exclusive content, and insightful articles directly in your inbox. Don't miss out on the trends and tips that matter most.
                    </p>
                    <div className='relative w-full max-w-md flex items-center'>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            className='bg-gray-800 border-none text-white px-4 py-2 rounded-l-full placeholder-white placeholder:text-sm md:placeholder:text-base flex-grow h-12 focus:outline-none'
                        />
                        <button className='bg-white text-[#14161C] absolute top-0 -right-6 text-base font-medium rounded-full px-4 py-[12px] flex items-center gap-2 hover:bg-gray-600 h-12'>
                            Subscribe
                            <HiOutlineArrowSmRight className='text-xl' />
                        </button>
                    </div>
                </div>
                <div className='relative lg:absolute md:relative mt-4 lg:-top-10 lg:right-0'>
                    <img src={mac} alt='Mac' />
                </div>
            </div>

            <LatestPost blogData={blogData} />
        </div>
    );
};

export default BlogMain;
