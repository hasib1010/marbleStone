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

        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();

        const foundBlog = data.blogs.find(blog => blog.id === parseInt(id));
        if (!foundBlog) {
          throw new Error('Blog not found');
        }
        setBlog(foundBlog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className='w-fit mx-auto'>
    <span className="loading loading-dots text-green-700  h-32 w-32 mx-auto"></span>
    </div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar2></Navbar2>
      <PostLayout blog={blog}></PostLayout>
    </div>

  );
}

export default BlogLayout;
