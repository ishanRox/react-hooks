import React, { useState } from 'react';
import './style.css';

export default function App() {
  //React useState and setState don’t make changes directly to the state object; they create queues to optimize //performance, which is why the changes don’t update immediately.

  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Hello React Hooks !</h1>
      <p>counter value : {counter}</p>
      <button onClick={increaseCount}>increase count </button>
    </div>
  );
}
