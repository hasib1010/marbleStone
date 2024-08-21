import React from 'react';
import { FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { GrAnnounce } from 'react-icons/gr';
import { MdArticle } from 'react-icons/md';
import { PiTreasureChest } from 'react-icons/pi';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import mac from "../../../assets/images/mac.png"

import { FaStar } from "react-icons/fa";


const PostLayout = ({ blog }) => {
    const { title, author, published_date, blog_banner_image, category, subtitles, content } = blog;
    const renderCategoryIcon = (category) => {
        switch (category) {
            case 'News':
                return <GrAnnounce className="text-lg mr-2" />;
            case 'Articles':
                return <MdArticle className="text-lg mr-2" />;
            case 'Resources':
                return <PiTreasureChest className="text-lg mr-2" />;
            default:
                return null;
        }
    };
    return (
        <div className='bg-[#FAFAFB] py-14'>
            <div className='container mx-auto px-5'>
                <div className='flex items-center gap-3'>
                    <p className='bg-[#A4A6B0] text-white font-medium w-fit px-4 py-1 rounded-full flex items-center'><span>{renderCategoryIcon(category)}</span>{category}</p>
                    <p className='flex items-center gap-2 text-[#A4A6B0] font-medium'> <FaCalendarAlt></FaCalendarAlt> {published_date}</p>
                </div>
                <div className='flex lg:flex-row md:flex-row flex-col lg:gap-14 md:gap-4 gap-2'>
                    <div className='flex flex-col gap-8 mt-4'>
                        <h3 className='lg:text-6xl font-medium'>{title}</h3>
                        <p className='text-[#464851]'>{subtitles[0]}. <br />{subtitles[1]}.    {subtitles[2]}</p>
                    </div>
                    <div className=' h-[238px] bg-white p-7 relative flex flex-col gap-5 rounded-xl shadow-md'>
                        <AiFillPlusCircle className='absolute text-5xl right-6 cursor-pointer'></AiFillPlusCircle>
                        <div className='flex w-[375px] gap-3'>
                            <img className='h-16 w-16 rounded-full' src="https://th.bing.com/th/id/OIP.kMQ14gs4OXX7BqCaoqruOQAAAA?cb=13&rs=1&pid=ImgDetMain" alt="avatar icon" />
                            <div>
                                <p className='text-2xl font-medium'>{author} </p>   <article className='text-base font-medium'>  @user</article>
                            </div>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident.</p>
                        <div className='flex items-center gap-4 text-2xl '>
                            <FaFacebook className='cursor-pointer'></FaFacebook>
                            <FaTwitter className='cursor-pointer'></FaTwitter>
                            <FaInstagram className='cursor-pointer'></FaInstagram>
                            <FaLinkedin className='cursor-pointer'></FaLinkedin>
                        </div>

                    </div>

                </div>

                <div className='my-14'>
                    <img className='lg:h-[490px] w-full rounded-xl' src={blog_banner_image} alt="" />
                </div>
                <div className='max-w-[640px] mx-auto'>
                    {
                        content.map((article, index) => (
                            <div key={index}>
                                <h2 className='text-5xl  my-4 font-medium' >{article.subtitle}</h2>
                                <p><span className=''>{article.paragraph}</span> </p>
                                {article.blog_image && <img className='my-4 w-full rounded-md' src={article.blog_image} alt={article.subtitle} />}
                                {article.ads && <p className='my-4 w-full rounded-md bg-black text-white py-8 px-3'>{article.ads}</p>}
                            </div>
                        ))
                    }


                </div>

                <div className='bg-[#14161C] container mx-auto p-28 rounded-2xl text-white relative my-20 flex flex-row-reverse'>

                    <div className='max-w-[447px] flex flex-col gap-7'>
                        <div className='flex items-center px-4 text-white gap-2 py-[10px] bg-[#202127] w-fit rounded-full'>
                            <FaStar className='p-1 text-3xl rounded-full bg-[#464851]'></FaStar>
                            <p>Newsletter</p>
                        </div>
                        <h5 className='text-5xl'>Subscribe to Our Weekly Newsletter</h5>
                        <p>Stay updated with the latest trends, tips, and insights in real estate by subscribing to our newsletter. Receive expert advice, market analysis, and exclusive offers directly in your inbox. Don't miss out on valuable information that could help you make informed decisions about buying, selling, or investing in real estate.</p>
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
                    <div className='absolute -top-10 left-0'>
                        <img src={mac} alt="Mac illustration" />
                    </div>
                </div>


            </div>

        </div>
    );
}


export default PostLayout;