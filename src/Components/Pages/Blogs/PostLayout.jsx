import React from 'react';
import { FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { GrAnnounce } from 'react-icons/gr';
import { MdArticle } from 'react-icons/md';
import { PiTreasureChest } from 'react-icons/pi';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";


const PostLayout = ({ blog }) => {
    const { title, author, published_date, blog_banner_image, blog_imag, category, subtitles, content } = blog;
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
                <div className='flex gap-14'>
                    <div className='flex flex-col gap-8 mt-4'>
                        <h3 className='text-6xl font-medium'>{title}</h3>
                        <p className='text-[#464851]'>{subtitles[0]}. <br />{subtitles[1]}.    {subtitles[2]}</p>
                    </div>
                    <div className=' h-[238px] bg-white p-7 relative flex flex-col gap-5 rounded-xl shadow-md'>
                    <FaPlusCircle className='absolute text-5xl right-6'></FaPlusCircle>
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
            </div>
        </div>
    );
}


export default PostLayout;