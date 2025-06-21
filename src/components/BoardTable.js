import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

function BoardTable() {
  const navigate = useNavigate();
  const { boards } = useStore();

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {boards.map((board) => (
          <tr
            key={board.id}
            onClick={() => navigate(`/boards/${board.id}`)}
            className="cursor-pointer hover:bg-gray-100"
          >
            <td className="py-2 px-4 border-b">{board.name}</td>
            <td className="py-2 px-4 border-b">{board.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BoardTable;