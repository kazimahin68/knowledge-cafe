import React, { useEffect, useState } from 'react';
import Blog from '../BLog/Blog';
import Time from '../Time/Time';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='flex flex-row'>
            <div className='basis-3/4'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
            <div className='basis-1/4'>
                  
            </div>
        </div>
    );
};

export default Blogs;