import { useState, useEffect } from "react";
import { Blog } from '../../types/blog.type';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  const [name, setName] = useState<string>('Mario');

  const handleDelete = (id: number): void => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  // Empty array dependency, use effect runs only once
  useEffect(() => {
    console.log('use effect ran');
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs!"
        handleDelete={handleDelete} />
      <button onClick={() => setName('Luigui')}>Change name</button>
      <p>{ name }</p>
    </div>
  )
};

export default Home;
