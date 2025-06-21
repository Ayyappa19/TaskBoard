# Task Board Application

A modern, interactive task board for team collaboration. Organize tasks visually on boards, columns, and cards.

## Features
- Create, edit, and delete boards
- Create, edit, and delete columns (lists)
- Create, edit, and delete cards (tasks)
- Assign cards to team members
- Set priority and due date for cards
- Move and reorder cards between columns (drag-and-drop)
- Beautiful, responsive UI with custom Tailwind theme
- State persisted in localStorage (Zustand)

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start the development server:**
   ```
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Tech Stack
- React (Hooks)
- Zustand (state management)
- TailwindCSS (UI)
- Vite (build tool)

## Folder Structure
- `src/pages` – BoardView, BoardDetail
- `src/components` – BoardTable, Column, Card, Modal
- `src/store.js` – Zustand store
- `src/utils` – Storage helpers

## Customization
- Edit `tailwind.config.js` for theme/colors
- Add more team members in `store.js` if needed

---

For any questions, see code comments or contact the author.
