import React from 'react';
import { FaCalendarAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaStar } from "react-icons/fa";
import { GrAnnounce } from 'react-icons/gr';
import { MdArticle } from 'react-icons/md';
import { PiTreasureChest } from 'react-icons/pi';
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import mac from "../../../assets/images/mac.png";

const PostLayout = ({ blog }) => {
    const { title, author, published_date, author_avatar, blog_banner_image, blog_image, category, subtitles, content } = blog;

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
        <div className='bg-[#FAFAFB] lg:py-14 md:py-5 py4'>
            <div className='container mx-auto px-5'>
                <div className='flex items-center gap-3'>
                    <p className='bg-[#A4A6B0] text-white font-medium w-fit px-4 py-1 rounded-full flex items-center'>
                        <span>{renderCategoryIcon(category)}</span>{category}
                    </p>
                    <p className='flex items-center gap-2 text-[#A4A6B0] font-medium'>
                        <FaCalendarAlt /> {published_date}
                    </p>
                </div>
                <div className='flex lg:flex-row md:flex-row flex-col lg:gap-14 md:gap-4 gap-2'>
                    <div className='flex flex-col gap-8 mt-4'>
                        <h3 className='lg:text-6xl font-medium'>{title}</h3>
                        <p className='text-[#464851]'>
                            {subtitles.join('. ')}
                        </p>
                    </div>
                    <div className='h-[238px] bg-white p-7 relative flex flex-col gap-5 rounded-xl shadow-md'>
                        <AiFillPlusCircle className='absolute text-5xl right-6 cursor-pointer' />
                        <div className='flex w-[375px] gap-3'>
                            <img className='h-16 w-16 rounded-full' src={author_avatar ? author_avatar : "https://th.bing.com/th/id/OIP.kMQ14gs4OXX7BqCaoqruOQAAAA?cb=13&rs=1&pid=ImgDetMain"} alt="avatar icon" />
                            <div>
                                <p className='text-2xl font-medium'>{author ? author: "USER"}</p>
                                <article className='text-base font-medium'>@user</article>
                            </div>
                        </div>
                        <p className='max-w-[311px]'>
                            {author} provides insightful and detailed analysis in this blog post.
                        </p>
                        <div className='flex items-center gap-4 text-2xl'>
                            <FaFacebook className='cursor-pointer' />
                            <FaTwitter className='cursor-pointer' />
                            <FaInstagram className='cursor-pointer' />
                            <FaLinkedin className='cursor-pointer' />
                        </div>
                    </div>
                </div>

                <div className='my-14'>
                    <img className='lg:h-[490px] w-full rounded-xl' src={blog_banner_image} alt="Blog banner" />
                </div>
                <div className='max-w-[1200px] mx-auto'>
                    {
                        content.map((article, index) => (
                            <div key={index}>
                                <h2 className='text-5xl my-4 font-medium'>{article.title}</h2>
                                <p>{article.body}</p>
                                {blog_image && <img className='my-4 w-full rounded-md' src={blog_image} alt={article.subtitle} />}
                                {article.ads && <p className='my-4 w-full rounded-md bg-black text-white py-8 px-3'>{article.ads}</p>}
                            </div>
                        ))
                    }
                </div>

                <div className='bg-[#14161C] container mx-auto lg:p-28 md:p-10 p-7 rounded-2xl text-white relative lg:my-20 md:my-5 my-3 flex lg:flex-row-reverse md:flex-col flex-col justify-between'>
                    <div className='relative lg:absolute md:relative mt-4 lg:-top-10 lg:left-0'>
                        <img src={mac} alt='Mac' />
                    </div>
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

                </div>
            </div>
        </div>
    );
}

export default PostLayout;
