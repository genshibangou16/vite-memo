import List from './List';
import './Memo.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './View';
import Edit from './Edit';
import { useState } from 'react';

function Memo() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem('memos') || '[]'),
  );

  function handleMemoChange(memos) {
    setMemos(memos);
    localStorage.setItem('memos', JSON.stringify(memos));
  }

  return (
    <>
      <Router>
        <List memos={memos} />
        <Routes>
          <Route path="/" element={null} />
          <Route
            path="/create"
            element={<Edit handleMemoChange={handleMemoChange} memos={memos} />}
          />
          <Route path="/:id" element={<View memos={memos} />} />
          <Route
            path="/:id/edit"
            element={<Edit handleMemoChange={handleMemoChange} memos={memos} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default Memo;
