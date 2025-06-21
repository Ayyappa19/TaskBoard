import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(persist((set, get) => ({
  boards: {},
  columns: {},
  cards: {},
  members: ["Alice", "Bob", "Charlie"],
  // ...actions for CRUD operations...
}), { name: 'task-board-storage' }));

export default useStore;
