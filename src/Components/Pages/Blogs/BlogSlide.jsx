import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './blogslide.css';
import { Pagination, Navigation } from 'swiper/modules';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BlogSlide = ({ blogData }) => {
    const swiperRef = useRef(null);

    if (!blogData || !blogData.blogs || !Array.isArray(blogData.blogs)) {
        return <p>No blog data available.</p>; // Handle the case where no blog data is available
    }

    return (
        <div className='container relative max-h-[490px] lg:mx-auto md:mx-auto shadow-md rounded-lg h-auto lg:min-h-[430px] lg:mb-11 bg-white'>
            <GrFormPrevious
                className='absolute top-1/2 -left-5 text-4xl bg-white rounded-full z-30 shadow-sm cursor-pointer'
                onClick={() => swiperRef.current.swiper.slidePrev()}
            />
            <MdNavigateNext
                className='absolute top-1/2 -right-5 text-4xl bg-white rounded-full z-30 shadow-sm cursor-pointer'
                onClick={() => swiperRef.current.swiper.slideNext()}
            />

            <Swiper
                slidesPerView={1}
                spaceBetween={60}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false} // Disable Swiper's default navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
                ref={swiperRef} // Attach the ref to Swiper
            >
                {blogData.blogs.map((blog) => (
                    <SwiperSlide key={blog._id}>
                        <div className='relative'>
                            <img className='w-full lg:h-[490px] md:h-64 h-36' src={blog.blog_banner_image} alt={blog.title} />
                            <div className="lg:absolute md:absolute relative shadow-lg lg:top-[30%] lg:right-20 rounded-lg bg-white px-12 py-10">
                                <h4 className='max-w-[480px] font-medium lg:text-3xl'>{blog.title}</h4>

                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-1'>
                                        <FaRegCalendarAlt className='text-[#A4A6B0]' />
                                        <p className='text-[#A4A6B0] font-medium'>{blog.published_date}</p>
                                    </div>
                                    <div>
                                        <Link to={blog._id} className='flex items-center gap-2 font-medium'>Read More <MdKeyboardArrowRight className='text-xl' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogSlide;
