import React from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import BlogSlide from './BlogSlide';
const Blog = () => {
    const blogData = useLoaderData();
    console.log(blogData);



    return (
        <div>
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
        </div>
    );
}
    ;

export default Blog;