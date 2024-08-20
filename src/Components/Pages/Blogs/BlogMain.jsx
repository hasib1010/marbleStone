import React from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import BlogSlide from './BlogSlide';
import { FaStar } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import mac from "../../../assets/images/mac.png"
import LatestPost from './LatestPost';
const BlogMain = () => {
    const blogData = useLoaderData();




    return (
        <div className=' h-fit bg-[#FAFAFB]'>
            <Navbar2 />  {/* Navbar Component */}
            <div className='max w-[1400px] mx-auto'>
                <h2 className='text-7xl font-medium my-4'>News & articles</h2>
                <div className='flex justify-between my-7'>
                    <p className='max-w-[562.047px]'>
                        Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                    </p>
                    <div>
                        <div className="flex justify-center items-center w-fit ">
                            <div className="relative">
                                <input type="text" placeholder="Search for articles..." className="w-80 py-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none  " />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full">
                                    <FaSearch className='text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog slide show */}
                <BlogSlide blogData={blogData} />  {/* Passing the prop */}
            </div>
            <div className='bg-[#14161C] mx-6 p-28 rounded-2xl text-white relative my-20'>

                <div className='max-w-[447px] flex flex-col gap-7'>
                    <div className='flex items-center px-4 text-white gap-2 py-[10px] bg-[#202127] w-fit rounded-full'>
                        <FaStar className='p-1 text-3xl rounded-full bg-[#464851]'></FaStar> <p>Newsletter</p>
                    </div>
                    <h5 className='text-5xl '>Subscribe to our weekly newsletter</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Volutpat et lacinia sit aenean consequat. Id tellus eget libero eget non odio tristique.</p>
                    <div className='relative w-full max-w-md flex items-center'>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className='bg-gray-800 border-none text-white px-4 py-2 rounded-l-full placeholder-white placeholder:text-sm md:placeholder:text-base flex-grow h-12 focus:outline-none'
                        />
                        <button
                            className='bg-white text-[#14161C] absolute top-0 focus:border-none focus:ring-0 -right-6 text-base font-medium rounded-full px-4 py-[12px] flex items-center gap-2 hover:bg-gray-600 h-12'
                        >
                            Subscribe
                            <HiOutlineArrowSmRight className='text-xl' />
                        </button>
                    </div>
                </div>
                <div className='absolute -top-10 right-0'>
                    <img src={mac} alt="" />
                </div>
            </div>
            <LatestPost blogData={blogData}></LatestPost>

        </div>
    );
}
    ;

export default BlogMain;