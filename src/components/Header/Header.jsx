import React, { useEffect, useState } from 'react';

const Header = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Header;