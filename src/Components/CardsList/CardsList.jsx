import React from 'react';
import Card from '../Card/Card';
import './cardsList.scss';

export default function CardsList({ robots }) {
  return (
    <div className="cards-list">
      {robots.map((robot) => (
        <Card key={robot.email} robot={robot} />
      ))}
    </div>
  );
}
