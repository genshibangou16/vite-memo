import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit({ onSaved }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const memo = JSON.parse(localStorage.getItem(id)) || {
    title: '',
    content: '',
  };
  const [title, setTitle] = useState(memo.title);
  const [content, setContent] = useState(memo.content);

  function handleSubmit(fromData) {
    const memo = {
      title: fromData.get('title'),
      content: fromData.get('content'),
    };
    localStorage.setItem(fromData.get('id'), JSON.stringify(memo));
    onSaved();
    navigate(`/${fromData.get('id')}`);
  }

  return (
    <div>
      <h1>{memo.title === '' ? 'Create' : `Edit ${memo.title}`}</h1>
      <form action={handleSubmit}>
        <input type="hidden" name="id" value={id || crypto.randomUUID()} />
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
