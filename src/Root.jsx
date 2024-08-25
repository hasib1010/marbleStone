import React from 'react'; 
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'; 
 
const Root = () => {
  
    return (
        <div className='bg-[#FAFAFB]'> 
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
}
  
 
export default Root;