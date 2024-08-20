import React from 'react';
import Navbar2 from '../../Navbar/Navbar2';
import { FaSearch } from "react-icons/fa";
const Blog = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className='max w-[1400px] mx-auto'>
                <h2 className='text-7xl font-medium my-4'>News & articles</h2>
                <div className='flex justify-between my-7'>
                    <p className='max-w-[562.047px]'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                    <div>
                        <body class="flex justify-center items-center w-fit ">
                            <div class="relative">
                                <input type="text" placeholder="Search for articles..." class="w-80 py-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none  " />
                                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full">
                                    <FaSearch className='text-white'></FaSearch>
                                </button>
                            </div>
                        </body>
                    </div>
                </div>
            </div>
        </div>
    );
}
    ;

export default Blog;