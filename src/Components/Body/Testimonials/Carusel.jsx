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

const Carusel2 = () => {
    const swiperRef = useRef(null);

    return (
        <div className='lg:w-full shadow-md rounded-lg lg:max-w-[860px] sm:h-fit lg:min-h-[430px] mx-auto relative lg:mb-11 bg-white'>
            <GrFormPrevious
                className='absolute -top-12 right-10 text-4xl bg-white rounded-full z-30 shadow-sm   cursor-pointer'
                onClick={() => swiperRef.current.swiper.slidePrev()}
            />
            <MdNavigateNext
                className='absolute -top-12 text-4xl bg-white rounded-full z-30 shadow-sm  -right-0 cursor-pointer'
                onClick={() => swiperRef.current.swiper.slideNext()}
            />

            <Swiper
                slidesPerView={1}
                spaceBetween={60}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false} // Disable Swiper's default navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
                ref={swiperRef} // Attach the ref to Swiper
            >
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:p-20 sm:gap-8 lg:gap-12 lg:h-full'>
                        <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full' src={person2} alt="Person 2" />
                        <div className='flex flex-col gap-3 text-center lg:text-left'>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-medium'>
                                “Navigating properties made easy, unbeatable USA options.”
                            </h3>
                            <p className='font-normal text-sm sm:text-base'>
                                Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.
                            </p>
                            <h4 className='text-lg sm:text-xl font-medium'>Andy Smith</h4>
                            <h4 className='text-base sm:text-lg'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:p-20 sm:gap-8 lg:gap-12 lg:h-full'>
                        <img className='w-20 h-14 rounded-full' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-3 text-center lg:text-left'>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-medium'>
                                “Navigating properties made easy, unbeatable USA options.”
                            </h3>
                            <p className='font-normal text-sm sm:text-base'>
                                Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium.
                            </p>
                            <h4 className='text-lg sm:text-xl font-medium'>Andy Smith</h4>
                            <h4 className='text-base sm:text-lg'>Chicago, IL</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carusel2;
