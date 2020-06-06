import React, { useEffect, useState } from 'react';
import './container.scss';
import CardList from '../CardsList/CardsList';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';

export default function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
      res
        .json()
        .then((robots) => setRobots(robots))
        .then(() => setIsLoading(false)),
    );
  }, []);

  const [inputValue, setInputValue] = useState('');

  const changeHandler = (value) => {
    setInputValue(value);
  };

  return (
    <div className="container">
      <h1>Robofriends app</h1>
      {!isLoading ? (
        <>
          <div className="search-container">
            <Search value={inputValue} changeHandler={changeHandler} />
          </div>
          <CardList
            robots={robots.filter((robot) =>
              robot.name.toLowerCase().includes(inputValue.toLowerCase()),
            )}
          />{' '}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
