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
  currentUser: null, // null if not logged in

  // Auth actions
  login: (name) => set(state => {
    if (!state.members.includes(name)) {
      return { currentUser: name, members: [...state.members, name] };
    }
    return { currentUser: name };
  }),
  logout: () => set({ currentUser: null }),

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
  moveCard: (cardId, destColumnId, destIndex) => set(state => {
    // Get all cards in the destination column, sorted by their current order
    let cardsArr = Object.values(state.cards).filter(c => c.columnId === destColumnId && c.id !== cardId);
    // Insert the moved card at the new index
    cardsArr.splice(destIndex, 0, state.cards[cardId]);
    // Update columnId for the moved card
    const newCards = { ...state.cards, [cardId]: { ...state.cards[cardId], columnId: destColumnId } };
    // Reorder cards in the destination column
    cardsArr.forEach((c, i) => {
      newCards[c.id] = { ...newCards[c.id], order: i };
    });
    newCards[cardId] = { ...newCards[cardId], order: destIndex, columnId: destColumnId };
    return { cards: newCards };
  }),

}), { name: 'task-board-storage' }));

export default useStore;
