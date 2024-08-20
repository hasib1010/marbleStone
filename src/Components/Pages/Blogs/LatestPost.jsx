import React, { useState } from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { PiTreasureChest } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import { MdArticle } from "react-icons/md"; 
import CardLayout from './CardLayout';

const LatestPost = ({blogData}) => {
     
    
    
    const [selected, setSelected] = useState('All'); // Default selected item

    const handleClick = (item) => {
        setSelected(item); // Update selected item
    };

    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between p-2 '>
                    <h3 className='text-5xl font-medium'>Latest Post</h3>
                    <div className='flex items-center gap-6 px-10 border rounded-full bg-white py-4'>
                        <div
                            onClick={() => handleClick('All')}
                            className={`flex items-center gap-2 cursor-pointer font-medium rounded-full px-2 p-1 ${selected === 'All' ? 'bg-black text-white ' : 'text-[#A4A6B0]'}`}
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
                        blogData.blogs.map((blog)=> 
                            <CardLayout blog={blog}></CardLayout>
                        )
                    }
                </div>
                

            </div>

        </div>
    );
}


export default LatestPost;