import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello React Hooks !</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
