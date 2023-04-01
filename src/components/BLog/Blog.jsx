import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = (props) => {
    console.log(props);
    const { author, image_url, title, published_date, reading_time } = props.blog;
    return (
        <div>
            <div className="card">
                <figure><img className='rounded-2xl' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center justify-center'>
                            <img className='w-12 h-12 rounded-3xl me-3' src={author.image} alt="" />
                            <div>
                                <p className='text-2xl font-bold'>{author.name}</p>
                                <p>{published_date}</p>
                            </div>
                        </div>
                        <p className='grow-0'>{reading_time} min read <button className='ms-2'><FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></button></p>
                    </div>
                    <h2 className="card-title font-extrabold mt-5">{title}</h2>
                    <div className="card-actions">
                        <button className="text-blue-700 underline">Mark as read</button>
                    </div>
                </div>
            </div>
            <hr className='mt-5 knowledge-cafe-hr' />
        </div>
    );
};

export default Blog;