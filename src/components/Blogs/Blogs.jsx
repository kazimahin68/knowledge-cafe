import React, { useEffect, useState } from 'react';
import Blog from '../BLog/Blog';
import Time from '../Time/Time';
import Bookmark from '../Bookmarked/Bookmark';
import Questions from '../Questions/Questions';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const bookmarkedBlogs = (blog) => {
        const newBookmarkBlog = [...bookmark, blog];
        setBookmark(newBookmarkBlog);
    }

    const readingTime = (reading_time) => {
        const newTime = [...time, reading_time];
        setTime(newTime);
    }


    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className='basis-1 md:basis-3/4'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} bookmarkedBlogs={bookmarkedBlogs} readingTime={readingTime}></Blog>)
                    }
                </div>
                <div className='basis-1 md:basis-1/4 p-8'>
                    <Time time={time}></Time>
                    <Bookmark bookmark={bookmark}></Bookmark>
                </div>
            </div>
            <div>
                <Questions></Questions>
            </div>
        </div>
    );
};

export default Blogs;