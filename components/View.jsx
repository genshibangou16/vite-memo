import { Link, useParams } from 'react-router-dom';

export default function View() {
  const { id } = useParams();
  const memo = JSON.parse(localStorage.getItem(id)) || {
    title: 'Not Found',
    content: 'This memo does not exist.',
  };

  return (
    <div>
      <h1>{memo.title}</h1>
      <p>{memo.content}</p>
      <div className="nav">
        <Link to={`/${id}/edit`}>Edit</Link>
        <button
          onClick={() => {
            localStorage.removeItem(id);
            window.location.href = '/';
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
