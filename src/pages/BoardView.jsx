import React from 'react';
import BoardTable from '../components/BoardTable.jsx';
import useStore from '../store';

function BoardView() {
  // ...existing code...
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Boards</h1>
      <BoardTable />
    </div>
  );
}

export default BoardView;