import { Blog } from "../../types/blog.type";

interface BlogListProps {
  blogs: Blog[];
  title: string;
  handleDelete: (id: number) => void;
}

const BlogList = ({blogs, title, handleDelete}: BlogListProps) => {

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog: Blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  )
};

export default BlogList;
