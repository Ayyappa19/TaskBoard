import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const useStore = create(persist((set, get) => ({
  boards: {},
  columns: {},
  cards: {},
  members: ["Alice", "Bob", "Charlie"],
  currentUser: "Alice", // Example current user

  // Board actions
  addBoard: (name, description) => set(state => {
    const id = generateId();
    return { boards: { ...state.boards, [id]: { id, name, description } } };
  }),

  // Column actions
  addColumn: (boardId, title) => set(state => {
    const id = generateId();
    return { columns: { ...state.columns, [id]: { id, boardId, title } } };
  }),
  editColumn: (id, title) => set(state => ({
    columns: { ...state.columns, [id]: { ...state.columns[id], title } }
  })),
  deleteColumn: (id) => set(state => {
    const columns = { ...state.columns };
    delete columns[id];
    // Also delete cards in this column
    const cards = { ...state.cards };
    Object.keys(cards).forEach(cid => {
      if (cards[cid].columnId === id) delete cards[cid];
    });
    return { columns, cards };
  }),

  // Card actions
  addCard: (columnId, title) => set(state => {
    const id = generateId();
    const currentUser = state.currentUser || "Unknown";
    return { cards: { ...state.cards, [id]: {
      id,
      columnId,
      title,
      description: '',
      createdBy: currentUser,
      assignedTo: '',
      priority: 'Low',
      dueDate: ''
    } } };
  }),
  editCard: (id, updates) => set(state => ({
    cards: { ...state.cards, [id]: { ...state.cards[id], ...updates } }
  })),
  deleteCard: (id) => set(state => {
    const cards = { ...state.cards };
    delete cards[id];
    return { cards };
  }),

}), { name: 'task-board-storage' }));

export default useStore;
