import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrAnnounce } from 'react-icons/gr'; // Example icon for 'News'
import { MdArticle } from 'react-icons/md'; // Example icon for 'Articles'
import { PiTreasureChest } from 'react-icons/pi'; // Example icon for 'Resources'

const CardLayout = ({ blog }) => {
    const { title, published_date, blog_image, category } = blog;
 
    const renderCategoryIcon = (category) => {
        switch (category) {
            case 'News':
                return <GrAnnounce className="text-lg mr-2" />;
            case 'Articles':
                return <MdArticle className="text-lg mr-2" />;
            case 'Resources':
                return <PiTreasureChest className="text-lg mr-2" />;
            default:
                return null; // Or a default icon
        }
    };

    return (
        <div>
            <div className="w-[380px] h-[459px] shadow-md p-2 relative">
                <img
                    className='rounded-xl w-[382.473px] h-[300px]'
                    src={blog_image}
                    alt="Blog_Template"
                />

                <div>
                    <h2 className="my-6 text-xl font-medium">{title}</h2>
                    <div className='flex items-center justify-between'>
                        <p className="text-[#A4A6B0] text-xl font-medium flex items-center gap-2 mb-4">
                            <FaRegCalendarAlt /> {published_date}
                        </p>
                        <Link className='text-black flex items-center gap-3 font-medium hover:underline'>
                            Read More <MdKeyboardArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Category and Icon */}
                <p className='absolute top-5 bg-white text-black font-medium rounded-full px-3 left-10 flex items-center'>
                    {renderCategoryIcon(category)} {category}
                </p>
            </div>
        </div>
    );
};

export default CardLayout;
