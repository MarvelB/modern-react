import React, { useState } from "react";
import { Blog } from "../../types/blog.type";

const Create = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [author, setAuthor] = useState<string>('mario');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setIsLoading(true);

    const blog: Partial<Blog> = {
      title, body, author
    }

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
    .then(() => {
      setIsLoading(false);
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          value={ title }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          required
        />

        <label>Blog body:</label>
        <textarea
          required
          value={ body }
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
        >
        </textarea>

        <label>Blog author:</label>
        <select
          value={ author }
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
};

export default Create;
