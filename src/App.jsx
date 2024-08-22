import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Navbar/Header/Header';
import AboutSm from './Components/Body/AboutSm/AboutSm';
import AboutUs from './Components/Body/AboutUs/AboutUs';
import WhyUs from "./Components/Body/WhyUs/WhyUs";
import OurProcess from './Components/Body/OurProcess/OurProcess';
import Testimonials from './Components/Body/Testimonials/Testimonials';
import BlogSection from './Components/Body/Blog/Blog'; 

const App = () => {
  return (
    <div className=' mx-auto bg-[#FAFAFB]'>
      <Header></Header>
      <div className='container mx-auto'>
        <AboutSm></AboutSm>
        <AboutUs></AboutUs>
        <WhyUs></WhyUs>
        <OurProcess></OurProcess>
        <Testimonials></Testimonials>
        <BlogSection></BlogSection>
      </div> 
    </div>
  );
}

export default App;