import React, { useState } from 'react';
import useStore from '../store';
import Card from './Card.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function Column({ column }) {
  const cards = useStore((s) => s.cards);
  const addCard = useStore((s) => s.addCard);
  const editColumn = useStore((s) => s.editColumn);
  const deleteColumn = useStore((s) => s.deleteColumn);
  const [newTitle, setNewTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [colTitle, setColTitle] = useState(column.title);

  // Sort cards by 'order' field for correct drag-and-drop order
  const columnCards = Object.values(cards)
    .filter(card => card.columnId === column.id)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          className="bg-card-glass rounded-xl p-4 min-w-[250px] shadow-card flex flex-col"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="flex justify-between items-center mb-2">
            {editMode ? (
              <input
                className="px-2 py-1 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary"
                value={colTitle}
                onChange={e => setColTitle(e.target.value)}
                onBlur={() => { editColumn(column.id, colTitle); setEditMode(false); }}
                onKeyDown={e => { if (e.key === 'Enter') { editColumn(column.id, colTitle); setEditMode(false); } }}
                autoFocus
              />
            ) : (
              <h2 className="font-semibold text-primary text-lg cursor-pointer" onClick={() => setEditMode(true)}>{column.title}</h2>
            )}
            <button className="text-xs text-red-500 hover:underline ml-2" onClick={() => deleteColumn(column.id)}>Delete</button>
          </div>
          <div className="flex flex-col gap-2 mb-2">
            {columnCards.map((card, idx) => (
              <Draggable key={card.id} draggableId={card.id} index={idx}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
          <input
            className="mb-2 px-2 py-1 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Add card title"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <button
            className="bg-accent text-white px-3 py-1 rounded hover:bg-accent-light transition"
            onClick={() => { if(newTitle) { addCard(column.id, newTitle); setNewTitle(''); } }}
          >Add Card</button>
        </div>
      )}
    </Droppable>
  );
}

export default Column;