import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    return (
        <div>
            <section>{blogs.length}</section>
            {
                blogs.map(blog => <Blog
                    key={ blog.playerId} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;