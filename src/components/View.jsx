import { Link, useParams } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

export default function View({ memos }) {
  const { id } = useParams();
  const memo = memos.filter((memo) => memo.id === id)[0] || {
    title: 'Not Found',
    content: 'This memo does not exist.',
  };

  function handleDelete(isLoggedIn) {
    if (!isLoggedIn) {
      alert('Please log in to delete memos.');
      return;
    }
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
    window.location.href = '/';
  }

  const { isLoggedIn } = useLogin();

  return (
    <div>
      <h1>{memo.title}</h1>
      <p>{memo.content}</p>
      <div className="nav">
        <Link to={`/${id}/edit`}>Edit</Link>
        <button
          onClick={() => {
            handleDelete(isLoggedIn);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
