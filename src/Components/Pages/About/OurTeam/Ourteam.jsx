import React from 'react'; 
import { RiGroup2Fill } from "react-icons/ri";
import Team from './Team';

 
const OurTeam = () => {
    return (
        <div>
           <h1 className='flex items-center justify-center gap-1 bg-[#EEEFF1] w-fit mx-auto px-4 py-[6px] mb-4 text-xl font-medium rounded-full'><RiGroup2Fill className='p-1 text-4xl bg-[#A4A6B0] rounded-full text-white'></RiGroup2Fill>OurTeam</h1>
           <h4 className='text-5xl font-medium text-center mb-4'>Meet our team</h4>
           <p className='max-w-[562.047px] mx-auto text-center mb-8'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
           <Team></Team>
        </div>
    );
}
  
 
export default OurTeam;