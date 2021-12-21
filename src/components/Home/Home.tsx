import { useState } from "react";
import { Blog } from '../../types/blog.type';
import BlogList from '../BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  const handleDelete = (id: number): void => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs!"
        handleDelete={handleDelete} />
    </div>
  )
};

export default Home;
