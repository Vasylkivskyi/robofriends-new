import React from 'react';
import './search.scss';

export default function Search({ changeHandler, value }) {
  return (
    <div className="search">
      <input
        placeholder="Search for the robot"
        onChange={(e) => changeHandler(e.target.value)}
        value={value}
      />
    </div>
  );
}
