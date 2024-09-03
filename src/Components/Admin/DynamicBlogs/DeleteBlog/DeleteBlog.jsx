import React, { useEffect, useState } from 'react';
import DashboardNav from '../../DashboardNav/DashboardNav';
import AdminSidebar from '../../AdminSidebar';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ref } from 'firebase/storage';
import { storage } from '../../../Services/firebase.config';
function DeleteBlog() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://marble-stone-server.vercel.app/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
            })
    })


    const deleteImageFromFirebase = async (imageUrl) => {
        try {
            const imageRef = ref(storage, imageUrl);
            await deleteObject(imageRef);
            console.log(`Successfully deleted ${imageUrl}`);
        } catch (error) {
            console.error(`Error deleting image from Firebase Storage: ${error}`);
            throw error; // Re-throw error to handle it in the caller
        }
    };


    const handleDelete = async (blogId, imageUrls) => {
        try {
            // Confirm deletion
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
    
            if (result.isConfirmed) {
                // Delete blog from the server
                const response = await fetch(`https://marble-stone-server.vercel.app/blogs/${blogId}`, {
                    method: 'DELETE'
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                
                if (data.acknowledged) {
                    // Attempt to delete images from Firebase Storage
                    try {
                        await Promise.all(imageUrls.map(deleteImageFromFirebase));
                    } catch (firebaseError) {
                        console.error('Error deleting some images from Firebase Storage:', firebaseError);
                        // You may want to notify the user that images could not be deleted
                        Swal.fire({
                            title: 'Warning!',
                            text: 'The blog was deleted, but some images could not be deleted.',
                            icon: 'warning'
                        });
                    }
    
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your blog has been deleted.',
                        icon: 'success'
                    });
    
                    
                } else {
                    throw new Error('Failed to delete blog from server');
                }
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
            Swal.fire({
                title: 'Error!',
                text: 'There was a problem deleting the blog.',
                icon: 'error'
            });
        }
    };
    


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
                        <div className='grid grid-cols-3 gap-10'>

                            {/* Blog List */}
                            {blogs.map(blog => (

                                <div key={blog._id} className="blog-item flex shadow-lg py-5 rounded-xl flex-col gap-10 items-center">
                                    <Link className='flex flex-col gap-10 mt-10 px-10' to={`/blogs/${blog._id}`}>
                                        <h2>{blog.title}</h2>
                                        <img src={blog.blog_image} alt="Blog" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete((blog._id), [blog.blog_image, blog.blog_banner_image])}
                                        className="py-2 px-4 bg-red-600 text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>

                            ))}


                        </div>
                    </div>

                </main>
            </div >
        </div >
    )
}

export default DeleteBlog;