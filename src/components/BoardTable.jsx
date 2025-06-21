import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

function BoardTable() {
  // ...existing code...
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {/* Map boards here */}
      </tbody>
    </table>
  );
}

export default BoardTable;