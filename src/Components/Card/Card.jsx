import React from 'react';
import './card.scss';

export default function Card({ robot }) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${robot.name}`} alt="robot-avatar" />
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  );
}
