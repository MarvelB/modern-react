import { useHistory, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { Blog } from "../../types/blog.type";

interface BlogDetailsParams {
  id: string;
}

const BlogDetails = () => {
  const { id } = useParams<BlogDetailsParams>();
  const { data: blog, error, isLoading } = useFetch<Blog>('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = (id: number) => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    })
    .then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={() => handleDelete(blog.id) }>delete</button>
        </article>
      ) }
    </div>
  )
};

export default BlogDetails;
