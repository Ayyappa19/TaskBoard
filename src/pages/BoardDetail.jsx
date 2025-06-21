import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import Column from '../components/Column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';

function BoardDetail() {
  const { boardId } = useParams();
  const boards = useStore((s) => s.boards);
  const columns = useStore((s) => s.columns);
  const addColumn = useStore((s) => s.addColumn);
  const moveCard = useStore((s) => s.moveCard);
  const [newCol, setNewCol] = useState('');

  const boardColumns = Object.values(columns).filter(c => c.boardId === boardId);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    moveCard(draggableId, destination.droppableId, destination.index);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary-dark">{boards[boardId]?.name || 'Board'}</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {boardColumns.map(col => (
            <Column key={col.id} column={col} />
          ))}
          <div className="min-w-[250px] bg-card-glass rounded-xl p-4 flex flex-col justify-center items-center shadow-glass">
            <input
              className="mb-2 px-2 py-1 border rounded w-full focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Add column (e.g. To Do)"
              value={newCol}
              onChange={e => setNewCol(e.target.value)}
            />
            <button
              className="bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark transition"
              onClick={() => { if(newCol) { addColumn(boardId, newCol); setNewCol(''); } }}
            >Add Column</button>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default BoardDetail;