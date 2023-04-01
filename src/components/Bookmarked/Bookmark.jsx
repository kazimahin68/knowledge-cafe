import React from 'react';

const Bookmark = (props) => {
    const { bookmark } = props;

    // let bookmarkedBlog = [];
    // for(const blogs of bookmark){

    // }
    return (
        <div className='rounded-lg bg-gray-200 p-4 mt-5'>
            <h2 className='font-bold mb-3'>Bookmarked Blogs: {bookmark.length}</h2>
            <div className=''>
                {
                    bookmark.map(bookmarkedBlog => <h2 key={bookmarkedBlog.id} className='font-semibold shadow-xl bg-white mb-2 rounded-lg p-3'>{bookmarkedBlog.title}</h2>)
                }
            </div>
        </div>
    );
};

export default Bookmark;