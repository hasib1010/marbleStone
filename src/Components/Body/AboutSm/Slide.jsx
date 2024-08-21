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
        <div className='w-full max-w-[800px] mx-auto relative mb-11 bg-white rounded-lg shadow-md'>
            {/* Navigation Buttons */}
            <GrFormPrevious
                className='absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl bg-white rounded-full z-30 shadow-sm cursor-pointer'
                onClick={() => swiperRef.current.swiper.slidePrev()}
            />
            <MdNavigateNext
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl bg-white rounded-full z-30 shadow-sm cursor-pointer'
                onClick={() => swiperRef.current.swiper.slideNext()}
            />

            {/* Swiper Component */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false} // Custom navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
                ref={swiperRef} // Attach the ref to Swiper
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-8'>
                        <img className='w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-3 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-semibold'>"The service was exceptional, beyond my expectations!"</h3>
                            <p className='text-sm md:text-base font-normal text-gray-600'>Their attention to detail and personalized approach made the entire experience seamless and enjoyable. Highly recommend!</p>
                            <h4 className='text-lg md:text-xl font-medium text-gray-800'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-8'>
                        <img className='w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg' src={person2} alt="Person 2" />
                        <div className='flex flex-col gap-3 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-semibold'>"Professional and reliable, couldn't be happier!"</h3>
                            <p className='text-sm md:text-base font-normal text-gray-600'>Their team went above and beyond to ensure everything was perfect. The level of professionalism was truly impressive.</p>
                            <h4 className='text-lg md:text-xl font-medium text-gray-800'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-8'>
                        <img className='w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg' src={person1} alt="Person 3" />
                        <div className='flex flex-col gap-3 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-semibold'>"Excellent experience from start to finish!"</h3>
                            <p className='text-sm md:text-base font-normal text-gray-600'>The attention to customer service and the quality of work was outstanding. I will definitely use their services again.</p>
                            <h4 className='text-lg md:text-xl font-medium text-gray-800'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carusel;
