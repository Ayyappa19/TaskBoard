import React from 'react';

function Card({ card }) {
  return (
    <div className="bg-white p-2 mb-2 rounded shadow">
      <div className="font-bold">{card.title}</div>
      {/* Card details here */}
    </div>
  );
}

export default Card;