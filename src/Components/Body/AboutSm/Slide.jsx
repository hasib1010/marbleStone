import React, { useRef } from 'react';
import person1 from "./../../../assets/people/person.png";
import person2 from "./../../../assets/people/person2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Carusel = () => {
    const swiperRef = useRef(null);

    return (
        <div className='w-full max-w-[800px] mx-auto relative  bg-white rounded-lg shadow-md'>
            {/* Navigation Buttons */}
            <div className='absolute top-1/2 left-1 md:-left-3 lg:-left-4 transform -translate-y-1/2 z-30'>
                <GrFormPrevious
                    className='text-2xl bg-white rounded-full shadow-sm cursor-pointer'
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                />
            </div>
            <div className='absolute top-1/2 right-1 md:-right-3 lg:-right-4 transform -translate-y-1/2 z-30'>
                <MdNavigateNext
                    className='text-2xl bg-white rounded-full shadow-sm cursor-pointer'
                    onClick={() => swiperRef.current.swiper.slideNext()}
                />
            </div>

            {/* Swiper Component */}
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false} // Custom navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
                ref={swiperRef} // Attach the ref to Swiper
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className='flex flex-col w-[95%] h-fit  mx-auto md:flex-row items-center justify-center gap-4 p-4 md:p-6 lg:px-8'>
                        <img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-base md:text-lg lg:text-xl font-semibold'>"The service was exceptional, beyond my expectations!"</h3>
                            <p className='text-xs md:text-sm lg:text-base font-normal text-gray-600'>Their attention to detail and personalized approach made the entire experience seamless and enjoyable. Highly recommend!</p>
                            <h4 className='text-sm md:text-lg lg:text-xl font-medium text-gray-800'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className='flex flex-col w-[95%] h-fit  mx-auto md:flex-row items-center justify-center gap-4 p-4 md:p-6 lg:px-8'>
                        <img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg' src={person2} alt="Person 2" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-base md:text-lg lg:text-xl font-semibold'>"Professional and reliable, couldn't be happier!"</h3>
                            <p className='text-xs md:text-sm lg:text-base font-normal text-gray-600'>Their team went above and beyond to ensure everything was perfect. The level of professionalism was truly impressive.</p>
                            <h4 className='text-sm md:text-lg lg:text-xl font-medium text-gray-800'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className='flex flex-col w-[95%] h-fit  mx-auto md:flex-row items-center justify-center gap-4 p-4 md:p-6 lg:px-8'>
                        <img className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full shadow-lg' src={person1} alt="Person 3" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-base md:text-lg lg:text-xl font-semibold'>"Excellent experience from start to finish!"</h3>
                            <p className='text-xs md:text-sm lg:text-base font-normal text-gray-600'>The attention to customer service and the quality of work was outstanding. I will definitely use their services again.</p>
                            <h4 className='text-sm md:text-lg lg:text-xl font-medium text-gray-800'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carusel;
