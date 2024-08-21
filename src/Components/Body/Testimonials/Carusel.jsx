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
                className='absolute top-1/2 -left-10 text-4xl bg-white rounded-full z-30 shadow-sm cursor-pointer'
                onClick={() => swiperRef.current.swiper.slidePrev()}
            />
            <MdNavigateNext
                className='absolute top-1/2 -right-10 text-4xl bg-white rounded-full z-30 shadow-sm cursor-pointer'
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
                        <img className=' lg:w-40 lg:h-40 md:h-28 md:w-28 h-20 w-20 rounded-full' src={person1} alt="Person 2" />
                        <div className='flex flex-col gap-3 text-center lg:text-left'>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-medium'>
                                “Exceptional service and support. The team made finding my dream home effortless!”
                            </h3>
                            <p className='font-normal text-sm sm:text-base'>
                                I was amazed at how smooth the process was. From browsing listings to closing the deal, every step was handled with care and professionalism.
                            </p>
                            <h4 className='text-lg sm:text-xl font-medium'>Emily Johnson</h4>
                            <h4 className='text-base sm:text-lg'>San Francisco, CA</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:p-20 sm:gap-8 lg:gap-12 lg:h-full'>
                        <img className='lg:w-40 lg:h-40 md:h-28 md:w-28 h-20 w-20 rounded-full' src={person2} alt="Person 1" />
                        <div className='flex flex-col gap-3 text-center lg:text-left'>
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-medium'>
                                “The best real estate experience I’ve ever had. Highly recommend their services!”
                            </h3>
                            <p className='font-normal text-sm sm:text-base'>
                                The level of expertise and dedication from the team was beyond my expectations. They were always available to answer my questions and guide me through the process.
                            </p>
                            <h4 className='text-lg sm:text-xl font-medium'>John Doe</h4>
                            <h4 className='text-base sm:text-lg'>New York, NY</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carusel2;
