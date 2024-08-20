import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../../Navbar/Navbar2';

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

  if (loading) return <div>Loading...</div>;  
  if (error) return <div>Error: {error}</div>;  

  return (
    <div>
        <Navbar2></Navbar2>
      <h1>{blog.title}</h1>
      <img src={blog.blog_banner_image} alt={blog.title} />
      <p>Author: {blog.author}</p>
      <p>Published Date: {blog.published_date}</p>
      <div>
        {blog.content.map((section, index) => (
          <div key={index}>
            <h2>{section.subtitle}</h2>
            <p>{section.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogLayout;
