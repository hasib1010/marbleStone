const LatestPost = ({ blogData = {} }) => {
    const [selected, setSelected] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // Debug: Log the blogData prop
    console.log('Received blogData:', blogData);

    // Ensure blogData.blogs is always defined and is an array
    const blogs = Array.isArray(blogData.blogs) ? blogData.blogs : [];

    const handleClick = (item) => {
        setSelected(item);
        setCurrentPage(1);
    };

    const filteredBlogs = selected === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === selected);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div>
            <div className='container mx-auto my-20'>
                {/* ... */}
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-fit gap-20 my-20 mx-auto'>
                {
                    currentBlogs.length === 0 ? (
                        <p>No posts available.</p>
                    ) : (
                        currentBlogs.map((blog, index) =>
                            <CardLayout key={index} blog={blog} />
                        )
                    )
                }
            </div>

            <div className='flex justify-between items-center gap-4 mt-8'>
                {/* Pagination Controls */}
            </div>
        </div>
    );
};
