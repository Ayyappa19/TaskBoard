import React from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import Column from '../components/Column.jsx';

function BoardDetail() {
  const { boardId } = useParams();
  // ...existing code...
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Board Detail</h1>
      {/* Columns will be rendered here */}
      <div className="flex gap-4">
        {/* Map columns here */}
      </div>
    </div>
  );
}

export default BoardDetail;