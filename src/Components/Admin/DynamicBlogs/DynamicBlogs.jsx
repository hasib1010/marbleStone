import React from 'react';
import AdminSidebar from '../AdminSidebar';
import Navbar2 from '../../Navbar/Navbar2';
import { Link } from 'react-router-dom';

function DynamicBlogs() {
    return (
        <div className='flex h-screen w-[98%]  mx-auto bg-gray-100'>
            <AdminSidebar></AdminSidebar>

            <div className="flex-1 flex flex-col">
                <Navbar2 />
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
                        <p className="text-gray-600">Welcome to the blog sections.</p>
                        {/* Add additional content here */}
                    </div>

                    <div className='mt-10 bg-white'>

                        <div className='flex flex-col gap-10 ml-10 '>
                            <Link to={'/admin/dynamic_blogs/edit'} className=' my-2 text-xl btn w-fit btn-info'>Post a Blog</Link>
                            <Link className=' my-2 text-xl btn w-fit btn-accent'>Edit a Blog</Link>
                            <Link className=' my-2 text-xl btn w-fit btn-error'>delete a Blog</Link>

                        </div>

                    </div>

                </main>
            </div>
        </div>
    )
}

export default DynamicBlogs;