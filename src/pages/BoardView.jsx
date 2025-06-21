import React, { useState } from 'react';
import BoardTable from '../components/BoardTable.jsx';
import useStore from '../store';

function BoardView() {
  const addBoard = useStore((s) => s.addBoard);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary-dark">Boards</h1>
      <form
        className="flex gap-2 mb-6 bg-card-glass p-4 rounded-xl shadow-card"
        onSubmit={e => {
          e.preventDefault();
          if (name) { addBoard(name, desc); setName(''); setDesc(''); }
        }}
      >
        <input
          className="px-2 py-1 border rounded w-1/3 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Board name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          className="px-2 py-1 border rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <button className="bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark transition" type="submit">
          Add Board
        </button>
      </form>
      <BoardTable />
    </div>
  );
}

export default BoardView;