import { useState, useEffect } from "react";
import { Blog } from '../../types/blog.type';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Empty array dependency, use effect runs only once
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then((res: Response) => {
      if(!res.ok) {
        throw Error('Could not fetch the data for that resource');
      }

      return res.json();
    })
    .then((data: Blog[]) => {
      setBlogs(data);
      setIsLoading(false);
      setError('');
    })
    .catch((err: TypeError) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

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
