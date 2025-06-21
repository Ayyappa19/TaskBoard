import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BoardView from './pages/BoardView';
import BoardDetail from './pages/BoardDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BoardView />} />
      <Route path="/board/:boardId" element={<BoardDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
