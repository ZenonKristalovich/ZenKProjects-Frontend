import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/bloglist.css'; 

const BlogList = ({ blogs, searchTerm, setSearchTerm, title }) => {
    const navigate = useNavigate();

    const handleBlogClick = (id) => {
        navigate(`/blog/${id}`);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bloglist-container">
            <h1 className="bloglist-title">{title}</h1>
            <form className='bloglist-search'>
                <input 
                    type="text" 
                    className="bloglist-search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </form>
            <div className="bloglist-list">
                {Array.isArray(filteredBlogs) && filteredBlogs.length > 0 ? (
                    filteredBlogs.map(blog => (
                        <button key={blog.id} onClick={() => handleBlogClick(blog.id)} className="bloglist-button">
                            {blog.title}
                            <div className="blog-date">{new Date(blog.date_posted).toLocaleDateString()}</div>
                        </button>
                    ))
                ) : (
                    <p className='writing'>No {title.toLowerCase()} available.</p>
                )}
            </div>
        </div>
    );
}

export default BlogList;
