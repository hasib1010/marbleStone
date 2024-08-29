import React from 'react'; 
import { Outlet } from 'react-router-dom'; 
import Footer from './Components/Footer/Footer'; 
import ScrollToTop from './ScrollToTop';
 
const Root = () => {
  
    return (
        <div className='bg-[#FAFAFB] mx-3 my-3'> 
        <ScrollToTop></ScrollToTop>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
}
  
 
export default Root;