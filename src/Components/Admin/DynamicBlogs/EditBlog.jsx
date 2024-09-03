import React, { useState, useEffect, useRef, useContext } from 'react';
import AdminSidebar from '../AdminSidebar';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../Services/firebase.config'; // Ensure this path is correct
import generateUniqueId from 'generate-unique-id'; // Import this correctly
import DashboardNav from '../DashboardNav/DashboardNav';
import { AuthContext } from '../../Providers/Provider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



function EditBlog() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        author_avatar: '',
        published_date: '',
        blog_banner_image: '',
        blog_image: '',
        category: '',
        subtitles: [''], // Initialize with one subtitle input
        content: [{ title: '', body: '' }] // Initialize with one content section
    });

    const today = new Date().toISOString().split('T')[0];
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (user) {
            setFormData(prevFormData => ({
                ...prevFormData,
                author: user.displayName,
                author_avatar: user.photoURL, // Set this value but don't render it in the form
                published_date: today
            }));
        }
    }, [user, today]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubtitleChange = (index, e) => {
        const { value } = e.target;
        const updatedSubtitles = [...formData.subtitles];
        updatedSubtitles[index] = value;
        setFormData(prevFormData => ({
            ...prevFormData,
            subtitles: updatedSubtitles
        }));
    };

    const handleAddSubtitle = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            subtitles: [...prevFormData.subtitles, '']
        }));
    };

    const handleRemoveSubtitle = (index) => {
        if (formData.subtitles.length > 1) {
            const updatedSubtitles = formData.subtitles.filter((_, i) => i !== index);
            setFormData(prevFormData => ({
                ...prevFormData,
                subtitles: updatedSubtitles
            }));
        }
    };

    const handleContentChange = (index, e) => {
        const { name, value } = e.target;
        const updatedContent = [...formData.content];
        updatedContent[index] = {
            ...updatedContent[index],
            [name]: value
        };
        setFormData(prevFormData => ({
            ...prevFormData,
            content: updatedContent
        }));
    };

    const handleAddContent = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            content: [...prevFormData.content, { title: '', body: '' }]
        }));
    };

    const handleRemoveContent = (index) => {
        if (formData.content.length > 1) {
            const updatedContent = formData.content.filter((_, i) => i !== index);
            setFormData(prevFormData => ({
                ...prevFormData,
                content: updatedContent
            }));
        }
    };

    const handleFileChange = async (e, key) => {
        const file = e.target.files[0];
        if (file) {
            const id = generateUniqueId(); // Generate unique ID when needed
            const imageRef = ref(storage, `blogImages/${id}`);
            try {
                await uploadBytes(imageRef, file);
                const url = await getDownloadURL(imageRef);
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [key]: url
                }));
            } catch (error) {
                console.error("Error uploading image: ", error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSubmit = {
            ...formData
        };

        try {
            const response = await fetch("https://marble-stone-server.vercel.app/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSubmit)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            if (data.acknowledged) {
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'Your blog has been published',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error
        }
    };

    return (
        <div className='flex min-h-screen w-[98%] mx-auto bg-gray-100'>
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNav />
                <main className="flex-1 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Edit Blog</h1>
                        <p className="text-gray-600 mb-6">Fill in the details below to create a new blog post.</p>
                        <button
                            type="button"
                            onClick={() => navigate(-1)} // Navigate back to the previous page
                            className="mb-6 py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Back
                        </button>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="subtitles" className="block text-sm font-medium text-gray-700">Subtitles:</label>
                                {formData.subtitles.map((subtitle, index) => (
                                    <div key={index} className="space-y-2 mb-4">
                                        <div>
                                            <input
                                                type="text"
                                                value={subtitle}
                                                onChange={(e) => handleSubtitleChange(index, e)}
                                                placeholder={`Subtitle ${index + 1}`}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {formData.subtitles.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveSubtitle(index)}
                                                className="py-1 px-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            >
                                                Remove Subtitle
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddSubtitle}
                                    className="py-2 px-4 bg-green-800 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Add Subtitle
                                </button>
                            </div>
                            <div>
                                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={formData.author}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Note: `author_avatar` is handled in background, not shown in form */}
                            <div>
                                <label htmlFor="published_date" className="block text-sm font-medium text-gray-700">Published Date:</label>
                                <input
                                    type="date"
                                    id="published_date"
                                    name="published_date"
                                    value={formData.published_date}
                                    onChange={handleChange}
                                    required
                                    min={today}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="blog_banner_image" className="block text-sm font-medium text-gray-700">Blog Banner Image</label>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'blog_banner_image')}
                                    className="file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200 cursor-pointer"
                                    ref={fileInputRef}
                                />
                            </div>
                            <div>
                                <label htmlFor="blog_image" className="block text-sm font-medium text-gray-700">Blog Image</label>
                                <input
                                    type="file"
                                    onChange={(e) => handleFileChange(e, 'blog_image')}
                                    className="file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200 cursor-pointer"
                                    ref={fileInputRef}
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select a category</option>
                                    <option value="Articles">Articles</option>
                                    <option value="News">News</option>
                                    <option value="Resources">Resources</option>
                                </select>
                            </div>
                            <hr className='my-5' />

                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700 text-center">Content:</label>
                                {formData.content.map((section, index) => (
                                    <div key={index} className="mb-4 border p-4 rounded-lg shadow-sm">
                                        <div>
                                            <label htmlFor={`content-title-${index}`} className="block text-sm font-medium text-gray-700">Section Title:</label>
                                            <input
                                                type="text"
                                                id={`content-title-${index}`}
                                                name="title"
                                                value={section.title}
                                                onChange={(e) => handleContentChange(index, e)}
                                                placeholder="Enter section title"
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={`content-body-${index}`} className="block text-sm font-medium text-gray-700">Section Body:</label>
                                            <textarea
                                                id={`content-body-${index}`}
                                                name="body"
                                                rows="5"
                                                value={section.body}
                                                onChange={(e) => handleContentChange(index, e)}
                                                placeholder="Enter section body"
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        {formData.content.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveContent(index)}
                                                className="py-1 px-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            >
                                                Remove Section
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddContent}
                                    className="py-2 px-4 bg-green-800 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Add Content Section
                                </button>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Post Blog
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default EditBlog;
