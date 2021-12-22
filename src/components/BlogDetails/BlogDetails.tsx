import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { Blog } from "../../types/blog.type";

interface BlogDetailsParams {
  id: string;
}

const BlogDetails = () => {
  const { id } = useParams<BlogDetailsParams>();
  const { data: blog, error, isLoading } = useFetch<Blog>('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      ) }
    </div>
  )
};

export default BlogDetails;
