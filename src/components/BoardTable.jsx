import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

function BoardTable() {
  const boards = useStore((s) => s.boards);
  const navigate = useNavigate();

  return (
    <table className="min-w-full bg-card rounded-xl shadow-card overflow-hidden">
      <thead className="bg-primary text-white">
        <tr>
          <th className="py-2 px-4 text-left">Name</th>
          <th className="py-2 px-4 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(boards).map(board => (
          <tr
            key={board.id}
            className="hover:bg-primary-light cursor-pointer transition"
            onClick={() => navigate(`/board/${board.id}`)}
          >
            <td className="py-2 px-4 font-semibold text-primary-dark">{board.name}</td>
            <td className="py-2 px-4 text-background-dark">{board.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BoardTable;