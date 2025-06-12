import { Link, useParams } from 'react-router-dom';

export default function View({ memos }) {
  const { id } = useParams();
  const memo = memos.filter((memo) => memo.id === id)[0] || {
    title: 'Not Found',
    content: 'This memo does not exist.',
  };

  function handleDelete() {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
    window.location.href = '/';
  }

  return (
    <div>
      <h1>{memo.title}</h1>
      <p>{memo.content}</p>
      <div className="nav">
        <Link to={`/${id}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
