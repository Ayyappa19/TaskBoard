import React, { useState } from 'react';
import useStore from '../store';

function Card({ card }) {
  const members = useStore((s) => s.members);
  const editCard = useStore((s) => s.editCard);
  const deleteCard = useStore((s) => s.deleteCard);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    title: card.title,
    description: card.description || '',
    assignedTo: card.assignedTo || '',
    priority: card.priority || 'Low',
    dueDate: card.dueDate || '',
  });

  const handleSave = () => {
    editCard(card.id, form);
    setEditMode(false);
  };

  return (
    <div className="bg-card rounded-xl p-3 shadow-card flex flex-col gap-1 border border-background-light">
      {editMode ? (
        <div className="flex flex-col gap-2">
          <input
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            placeholder="Title"
          />
          <textarea
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            placeholder="Description"
          />
          <select
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.assignedTo}
            onChange={e => setForm(f => ({ ...f, assignedTo: e.target.value }))}
          >
            <option value="">Unassigned</option>
            {members.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.priority}
            onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.dueDate}
            onChange={e => setForm(f => ({ ...f, dueDate: e.target.value }))}
          />
          <div className="flex gap-2">
            <button className="bg-primary text-white px-3 py-1 rounded" onClick={handleSave}>Save</button>
            <button className="bg-background-dark text-white px-3 py-1 rounded" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <div className="font-bold text-primary-dark text-base">{card.title}</div>
            <div className="flex gap-1">
              <button className="text-xs text-accent hover:underline" onClick={() => setEditMode(true)}>Edit</button>
              <button className="text-xs text-red-500 hover:underline" onClick={() => deleteCard(card.id)}>Delete</button>
            </div>
          </div>
          <div className="text-sm text-background-dark mb-1">{card.description}</div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-primary-light text-primary-dark px-2 py-0.5 rounded">{card.priority}</span>
            <span className="bg-accent-light text-accent px-2 py-0.5 rounded">{card.assignedTo || 'Unassigned'}</span>
            <span className="bg-background-light text-background-dark px-2 py-0.5 rounded">Due: {card.dueDate || 'N/A'}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;