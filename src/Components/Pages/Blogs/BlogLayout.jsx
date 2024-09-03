import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../../Navbar/Navbar2';
import PostLayout from './PostLayout';

function BlogLayout() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://marble-stone-server.vercel.app/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data

        // Directly use the fetched blog data
        if (!data) {
          throw new Error('Blog not found');
        }

        setBlog(data); // Set the single blog object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className='w-fit mx-auto'>
        <span className="loading loading-dots text-green-700 h-32 w-32 mx-auto"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar2 />
      <PostLayout blog={blog} />
    </div>
  );
}

export default BlogLayout;
