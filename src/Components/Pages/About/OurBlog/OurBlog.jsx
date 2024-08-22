import React from "react";
import card1 from "./../../../../assets/images/aboutimg/card1.png";
import card2 from "./../../../../assets/images/aboutimg/card2.png";
import card3 from "./../../../../assets/images/aboutimg/card3.png";
import { MdCelebration } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ image, category, title, date, symbol: Symbol, id }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden px-1 relative w-full ">
            <img src={image} alt={title} className="w-[95%] mx-auto rounded-xl h-48 object-cover md:h-64" />
            <div className="p-4 md:p-6">
                <span className="bg-white text-black absolute top-3 left-5 text-sm md:text-base font-medium py-1 px-2 rounded-full flex items-center">
                    <Symbol className="mr-2 text-lg md:text-xl" /> {category}
                </span>
                <h2 className="text-lg md:text-xl font-bold mb-2">{title}</h2>
                <div className="flex mt-10 md:flex-row lg:flex-row  justify-between  md:items-center">
                    <p className="text-gray-600 text-sm gap-3 font-medium flex items-center ">
                        <FaCalendarAlt />{date}
                    </p>
                    <div>
                        <Link to={`/blogs/${id}`} className="text-black hover:underline  font-medium text-sm flex items-center">
                            Read more <RiArrowRightSLine className="text-xl ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OurBlog = () => {
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
                    <h1 className="text-5xl  font-medium mb-4 md:mb-0">Success Stories</h1>
                    <Link className="text-gray-600 hover:text-gray-800 text-sm font-semibold" to={'/blogs'}>Browse all articles &rarr;</Link>

                </div>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 grid-cols-1 my-5">
                    <BlogCard
                        image={card1}
                        symbol={MdCelebration}
                        category="Success Stories"
                        title="No money, no honey!🍯 And It's universal truth "
                        date="Mar 30, 2025"
                        id='1'
                    />
                    <BlogCard
                        image={card2}
                        symbol={MdCelebration}
                        category="Success Stories"
                        title="How John Achieved 98% Tenant Satisfaction in Maintenance."
                        date="Mar 28, 2025"
                        id='2'
                    />
                    <BlogCard
                        image={card3}
                        symbol={MdCelebration}
                        category="Success Stories"
                        title="How we stopped a 70-unit portfolio from bleeding. "
                        date="Mar 26, 2025"
                        id='3'
                    />
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
