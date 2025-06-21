import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg min-w-[300px]">
        <button className="float-right" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
