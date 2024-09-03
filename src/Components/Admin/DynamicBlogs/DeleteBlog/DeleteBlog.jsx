import React, { useEffect, useState } from 'react';
import DashboardNav from '../../DashboardNav/DashboardNav';
import AdminSidebar from '../../AdminSidebar';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function DeleteBlog() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
            })
    })
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/blogs/${id}`, {
                    method: "DELETE"
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                    });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    return (
        <div className='flex min-h-screen w-[98%]  mx-auto bg-gray-100'>
            <AdminSidebar></AdminSidebar>

            <div className="flex-1 flex flex-col">
                <DashboardNav></DashboardNav>
                <main className="flex-1 p-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
                        <p className="text-gray-600">Delete Blog.</p>
                        <button
                            type="button"
                            onClick={() => navigate(-1)} // Navigate back to the previous page
                            className="mb-6 py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Back
                        </button>
                        {/* Add additional content here */}
                    </div>

                    <div className='mt-10 bg-white'>
                        <div className='flex flex-col gap-5'>
                            {
                                blogs.map(blog =>
                                    <div className=' w-full  mx-auto flex items-center justify-between gap-10 border p-4 rounded-xl shadow-sm   '>
                                        <div className='w-fit'>
                                            <Link to={`/blogs/${blog._id}`}><p className='text-xl font-medium mb-2'>{blog?.title ? blog.title : " "}</p>
                                            </Link>

                                            <p className='w-1/2'>{blog?.subtitles[0] ? blog.subtitles[0] : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum quis maxime, quaerat deleniti saepe accusamus facere consectetur, unde ab minima delectus ipsam est, quos et porro. Quod eligendi veritatis, quaerat veniam fugiat aperiam est itaque minima, mollitia officia vero ab, architecto dolorum sed illo! Laborum culpa animi facere iure!'}</p>
                                            <Link to={`/blogs/${blog._id}`}><button className='link text-blue-500'>Read more....</button></Link>
                                        </div>
                                        <img className='h-32 ' src={blog.blog_image} alt="" />
                                        <MdDeleteOutline onClick={() => handleDelete(blog._id)} className='text-5xl text-red-600 cursor-pointer hover:bg-red-600 hover:text-white rounded-full'></MdDeleteOutline>
                                    </div>)
                            }
                        </div>
                    </div>

                </main>
            </div >
        </div >
    )
}

export default DeleteBlog;