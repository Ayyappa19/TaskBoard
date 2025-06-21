import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BoardView from './pages/BoardView.jsx';
import BoardDetail from './pages/BoardDetail.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background-DEFAULT to-accent-DEFAULT font-display">
      <Routes>
        <Route path="/" element={<BoardView />} />
        <Route path="/board/:boardId" element={<BoardDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
