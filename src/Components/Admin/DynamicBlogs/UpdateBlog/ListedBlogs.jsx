import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import AdminSidebar from '../../AdminSidebar';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { FaPencil } from 'react-icons/fa6';

function ListedBlogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();  

    useEffect(() => {
        fetch("http://localhost:5001/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
            });
    }, []);

    return (
        <div className='flex min-h-screen w-[98%] mx-auto bg-gray-100'>
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNav />
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
                        <p className="text-gray-600">Update Blog.</p>
                        
                        {/* Back Button */}
                        <button
                            type="button"
                            onClick={() => navigate(-1)} // Navigate back to the previous page
                            className="mb-6 py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Back
                        </button>
                    </div>

                    <div className='mt-10 bg-white'>
                        <div className='flex flex-col gap-5'>
                            {blogs.map(blog => (
                                <div
                                    key={blog._id}
                                    className='w-full mx-auto flex items-center justify-between gap-10 border p-4 rounded-xl shadow-sm'
                                >
                                    <div className='w-fit'>
                                        <Link to={`/blogs/${blog._id}`}>
                                            <p className='text-xl font-medium mb-2'>{blog.title}</p>
                                        </Link>
                                        <p className='w-1/2'>{blog.subtitles[0] || 'Lorem ipsum dolor sit amet...'}</p>
                                        <Link to={`/blogs/${blog._id}`}>
                                            <button className='link text-blue-500'>Read more....</button>
                                        </Link>
                                    </div>
                                    <img className='h-32' src={blog.blog_image} alt="" />
                                    <Link to={`/admin/dynamic_blogs/updateBlog/${blog._id}`}>
                                        <FaPencil className='text-5xl text-black bg-white p-2 cursor-pointer hover:bg-green-600 hover:text-white rounded-full' />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ListedBlogs;
