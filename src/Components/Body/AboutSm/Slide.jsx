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
        <div className='w-full shadow-md rounded-lg max-w-[600px] mx-auto relative mb-11 bg-white'>
            
            <GrFormPrevious 
                className='absolute -left-3 text-2xl bg-white rounded-full z-30  shadow-sm   top-[45%] cursor-pointer' 
                onClick={() => swiperRef.current.swiper.slidePrev()} 
            />
            <MdNavigateNext 
                className='absolute -right-3 text-2xl bg-white rounded-full z-30  shadow-sm   top-[45%] cursor-pointer' 
                onClick={() => swiperRef.current.swiper.slideNext()} 
            />

            <Swiper
                slidesPerView={1}
                spaceBetween={60}
                loop={true}
                pagination={{
                    clickable: true,
                }} 
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                ref={swiperRef} // Attach the ref to Swiper
            >
                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[22px] p-6 md:p-11'>
                        <img className='w-16 h-16 lg:w-24 lg:h-16 md:w-20 md:h-20 rounded-full' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-medium'>"If you want convenience, call Tina"</h3>
                            <p className='text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <h4 className='text-lg md:text-xl font-medium'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[22px] p-6 md:p-11'>
                        <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={person2} alt="Person 2" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-medium'>"If you want convenience, call Tina"</h3>
                            <p className='text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <h4 className='text-lg md:text-xl font-medium'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[22px] p-6 md:p-11'>
                        <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-medium'>"If you want convenience, call Tina"</h3>
                            <p className='text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <h4 className='text-lg md:text-xl font-medium'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carusel;
