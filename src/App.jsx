import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import BoardView from './pages/BoardView.jsx';
import BoardDetail from './pages/BoardDetail.jsx';
import Login from './pages/Login.jsx';
import useStore from './store';

function RequireAuth({ children }) {
  const currentUser = useStore((s) => s.currentUser);
  const location = useLocation();
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background-DEFAULT to-accent-DEFAULT font-display">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <BoardView />
            </RequireAuth>
          }
        />
        <Route
          path="/board/:boardId"
          element={
            <RequireAuth>
              <BoardDetail />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
