import { useState, useEffect } from "react";
import { Blog } from '../../types/blog.type';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Empty array dependency, use effect runs only once
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then((data: Blog[]) => {
      setBlogs(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="home">
      { isLoading && <div>Loading...</div>}
      { !isLoading && <BlogList
        blogs={blogs}
        title="All Blogs!" />}
    </div>
  )
};

export default Home;
