import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import person1 from "./../../../assets/people/person.png";
import person2 from "./../../../assets/people/person2.png";

const Carusel = () => {
    return (
        <div className='w-full max-w-[600px] mx-auto'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[22px] p-6 md:p-11'>
                        <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-medium'>"If you want convenience, call Tina"</h3>
                            <p className='text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <h4 className='text-lg md:text-xl font-medium'>Chicago, IL</h4>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[22px] p-6 md:p-11'>
                        <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={person2} alt="Person 2" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-medium'>"If you want convenience, call Tina"</h3>
                            <p className='text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <h4 className='text-lg md:text-xl font-medium'>Chicago, IL</h4>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[22px] p-6 md:p-11'>
                        <img className='w-16 h-16 md:w-20 md:h-20 rounded-full' src={person1} alt="Person 1" />
                        <div className='flex flex-col gap-2 text-center md:text-left'>
                            <h3 className='text-lg md:text-xl font-medium'>"If you want convenience, call Tina"</h3>
                            <p className='text-sm md:text-base font-normal'>Lorem ipsum dolor sit amet consectetur ultrices rutrum fusce dui nisl neque placerat velit.</p>
                            <h4 className='text-lg md:text-xl font-medium'>Chicago, IL</h4>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carusel;
