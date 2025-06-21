import React from 'react';
import Card from './Card.jsx';

function Column({ column }) {
  return (
    <div className="bg-gray-100 p-2 rounded w-64">
      <h2 className="font-semibold mb-2">{column.title}</h2>
      {/* Map cards here */}
    </div>
  );
}

export default Column;