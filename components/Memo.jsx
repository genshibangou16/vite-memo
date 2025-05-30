import List from './List';
import './Memo.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './View';
import Edit from './Edit';
import { useState } from 'react';

function Memo() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSaved = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <Router>
        <List key={refreshKey} />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/create" element={<Edit onSaved={handleSaved} />} />
          <Route path="/:id" element={<View />} />
          <Route path="/:id/edit" element={<Edit onSaved={handleSaved} />} />
        </Routes>
      </Router>
    </>
  );
}

export default Memo;
