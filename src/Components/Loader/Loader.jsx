import React from 'react';
import gif from "../../assets/images/loading.gif"
function Loader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
        </div>
        // <div className='flex items-center h-screen justify-center'>
        //     {/* <img className='' src={gif} alt="" /> */}
        //     {/* <iframe src="https://lottie.host/embed/9505d830-0c1b-4e44-88f2-ab87d8c1caa3/ZMTFyjUuQX.json"></iframe> */}

        // </div>
    )
}

export default Loader;