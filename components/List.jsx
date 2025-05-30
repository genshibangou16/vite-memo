import { Link } from 'react-router-dom';

export default function List() {
  const memos = [];
  for (let i = 0; i < localStorage.length; i++) {
    const id = localStorage.key(i);
    const value = localStorage.getItem(id);
    memos.push({ id, ...JSON.parse(value) });
  }
  return (
    <>
      <div className="memo-list">
        <ul>
          {memos.map((memo) => (
            <li key={memo.id}>
              <Link to={`/${memo.id}`}>{memo.title}</Link>
            </li>
          ))}
        </ul>
        <Link className="memo-create" to={'/create'}>
          New memo
        </Link>
      </div>
    </>
  );
}
