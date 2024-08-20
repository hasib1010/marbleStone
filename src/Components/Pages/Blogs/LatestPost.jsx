import React, { useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { PiTreasureChest } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import { MdArticle } from "react-icons/md";
import CardLayout from './CardLayout';
import { FaArrowRight } from "react-icons/fa6";
import { BiArrowBack, BiArrowFromRight } from 'react-icons/bi';

const LatestPost = ({ blogData }) => {
    const [selected, setSelected] = useState('All');  // Default selected item is 'All'
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const blogsPerPage = 6; // Number of blogs to show per page

    const handleClick = (item) => {
        setSelected(item);
        setCurrentPage(1); // Reset to the first page when the category changes
    };

    // Filter the blogData based on the selected category
    const filteredBlogs = selected === 'All'
        ? blogData.blogs
        : blogData.blogs.filter(blog => blog.category === selected);

    // Calculate the blogs to display on the current page
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className='container mx-auto my-20'>
                <div className='flex items-center justify-between p-2'>
                    <h3 className='text-5xl font-medium'>Latest Post</h3>
                    <div className='flex items-center gap-6 px-10 border rounded-full bg-white py-4'>
                        <div
                            onClick={() => handleClick('All')}
                            className={`flex items-center gap-2 cursor-pointer font-medium rounded-full px-2 p-1 ${selected === 'All' ? 'bg-black text-white' : 'text-[#A4A6B0]'}`}
                        >
                            <IoSettingsSharp className='text-xl' />
                            <p>All</p>
                        </div>
                        <div
                            onClick={() => handleClick('Resources')}
                            className={`flex items-center gap-2 cursor-pointer font-medium rounded-full px-2 p-1 ${selected === 'Resources' ? 'bg-black text-white' : 'text-[#A4A6B0]'}`}
                        >
                            <PiTreasureChest className='text-xl' />
                            <p>Resources</p>
                        </div>
                        <div
                            onClick={() => handleClick('News')}
                            className={`flex items-center gap-2 cursor-pointer font-medium rounded-full px-2 p-1 ${selected === 'News' ? 'bg-black text-white' : 'text-[#A4A6B0]'}`}
                        >
                            <GrAnnounce className='text-xl' />
                            <p>News</p>
                        </div>
                        <div
                            onClick={() => handleClick('Articles')}
                            className={`flex items-center gap-2 cursor-pointer font-medium rounded-full px-2 p-1 ${selected === 'Articles' ? 'bg-black text-white' : 'text-[#A4A6B0]'}`}
                        >
                            <MdArticle className='text-xl' />
                            <p>Articles</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 w-fit gap-20 my-20 mx-auto'>
                    {
                        currentBlogs.map((blog, index) =>
                            <CardLayout key={index} blog={blog} />
                        )
                    }
                </div>

                {/* Pagination */}
                <div className='flex justify-between items-center gap-4 mt-8'>
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className='px-4  bg-black text-white rounded-full   disabled:bg-white disabled:text-black py-4'
                    >
                        <BiArrowBack></BiArrowBack>
                    </button>

                    {/* Page Number Display */}
                    <span className='text-xl font-medium'>
                        {currentPage}/{totalPages}
                    </span>

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className='px-4   bg-black text-white rounded-full   disabled:bg-white disabled:text-white py-4'
                    >
                        <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LatestPost;
