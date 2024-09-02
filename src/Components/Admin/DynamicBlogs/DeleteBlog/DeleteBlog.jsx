import React, { useEffect, useState } from 'react';
import DashboardNav from '../../DashboardNav/DashboardNav';
import AdminSidebar from '../../AdminSidebar';
import { MdDeleteOutline } from 'react-icons/md';
function DeleteBlog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
            })
    })

    return (
        <div className='flex min-h-screen w-[98%]  mx-auto bg-gray-100'>
            <AdminSidebar></AdminSidebar>

            <div className="flex-1 flex flex-col">
                <DashboardNav></DashboardNav>
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
                        <p className="text-gray-600">Delete Blog.</p>
                        {/* Add additional content here */}
                    </div>

                    <div className='mt-10 bg-white'>
                        <div className='flex flex-col gap-5'>
                            {
                                blogs.map(blog => <div className='  mx-auto flex items-center border p-4 rounded-xl shadow-sm   '>
                                    <div>
                                        <p className='text-xl'>{blog?.title}</p>
                                        <p className='w-1/2'>{blog?.subtitles[0]}</p>
                                    </div>
                                    <img className='h-28 w-32' src={blog.blog_image} alt="" />
                                    <MdDeleteOutline className='text-8xl cursor-pointer hover:bg-black hover:text-white'></MdDeleteOutline>
                                </div>)
                            }
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default DeleteBlog;