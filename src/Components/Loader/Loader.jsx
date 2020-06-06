import React from 'react';
import './loader.scss';
import loader from '../../loader.gif';

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-body">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
}
