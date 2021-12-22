import { useParams } from "react-router";

interface BlogDetailsParams {
  id: string;
}

const BlogDetails = () => {
  const { id } = useParams<BlogDetailsParams>();

  return (
    <div className="blog-details">
      <h2>Blog Details - { id }</h2>
    </div>
  )
};

export default BlogDetails;
