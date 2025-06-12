import { Link } from 'react-router-dom';

export default function List({ memos }) {
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
