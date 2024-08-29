import React from "react";
import card1 from "./../../../assets/cards/card1.png";
import card2 from "./../../../assets/cards/card2.png";
import card3 from "./../../../assets/cards/card3.png";
import { IoIosSettings } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { MdArticle } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ image, category, title, date, symbol: Symbol, id }) => {
    return (
        <Link to={`/blogs/${id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden px-1 relative w-full ">
                <img src={image} alt={title} className="w-[95%] mx-auto rounded-xl h-48 object-cover md:h-64" />
                <div className="p-4 md:p-6">
                    <span className="bg-white text-black absolute top-3 left-5 text-sm md:text-base font-medium py-1 px-2 rounded-full flex items-center">
                        <Symbol className="mr-2 text-lg md:text-xl" /> {category}
                    </span>
                    <h2 className="text-lg md:text-xl font-bold mb-2">{title}</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <p className="text-gray-600 text-sm flex items-center mb-4">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm0 4v11h8V6H6zM9 9a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg> {date}
                        </p>
                        <Link to={`/blogs/${id}`} className="text-black hover:underline text-sm flex items-center">
                            Read more <RiArrowRightSLine className="text-xl ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const BlogSection = () => {
    return (
        <div className="text-gray-800 mt-0 md:mt-16">
            <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <span className="bg-[#EEEFF1] py-2 px-3 rounded-full flex items-center justify-center gap-2 text-lg md:text-xl font-medium">
                        <FaPencilAlt className="text-white bg-slate-300 rounded-full text-2xl p-1" />
                        Our blog
                    </span>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-0">Read our latest blog</h1>
                    <Link className="text-gray-600 hover:text-gray-800 text-sm font-semibold" to={'/blogs'}>Browse all articles &rarr;</Link>

                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 grid-cols-1 my-5">
                    <BlogCard
                        image={card1}
                        symbol={IoIosSettings}
                        category="Resources"
                        title="Here's how to decorate your new home from scratch"
                        date="Mar 30, 2025"
                        id='1'
                    />
                    <BlogCard
                        image={card2}
                        symbol={GrAnnounce}
                        category="News"
                        title="Home buying basics: How many bedrooms and bathrooms?"
                        date="Mar 28, 2025"
                        id='2'
                    />
                    <BlogCard
                        image={card3}
                        symbol={MdArticle}
                        category="Articles"
                        title="First-time homebuyer's guide: Steps for beginners"
                        date="Mar 26, 2025"
                        id='3'
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
