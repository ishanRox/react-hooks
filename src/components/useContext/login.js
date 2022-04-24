
import React from 'react';

export default function Login({setUserName}) {

  return <div>
    <input onChange={
      (event) => {
        setUserName(event.target.value);
      }
    } />
  </div>
}