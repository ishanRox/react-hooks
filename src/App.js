import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  //https://reactjs.org/docs/hooks-reference.html

  //useState
  //React useState and setState don’t make changes directly to the state object; they create queues to optimize //performance, which is why the changes don’t update immediately.

  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  //useEffect
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('API WAS CALLED');
      });
  });
  return (
    <div>
      <h1>Hello React Hooks !</h1>

      <h2>useState</h2>
      <p>counter value : {counter}</p>
      <button onClick={increaseCount}>increase count </button>
      <hr />

      <h2>useEffect</h2>
      <p>data fetched by axios request : {data}</p>
      <hr />
    </div>
  );
}
