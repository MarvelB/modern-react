import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Blog } from '../../types/blog.type';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const { data: blogs, error, isLoading } = useFetch<Blog>('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div>}
      { blogs && blogs.length > 0 && <BlogList
        blogs={blogs}
        title="All Blogs!" />}
    </div>
  )
};

export default Home;
