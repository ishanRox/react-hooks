import React, { useReducer, useEffect, useState, useRef ,useLayoutEffect} from 'react';
import './style.css';
import axios from 'axios';
import Parent from '../components/parent.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return { age: state.age, name: state.name + 's' };
    case 'AGE':
      return { age: state.age + 1, name: state.name };
    default:
      return state;
  }
};
const initialState = { name: 'ishan', age: 26 };

export default function App() {
  //https://reactjs.org/docs/hooks-reference.html

  //useState
  //React useState and setState don’t make changes directly to the state object; they create queues to optimize //performance, which is why the changes don’t update immediately.

  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  //useEffect
  //use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from //React’s purely functional world into the imperative world.
  const [data, setData] = useState('');

  useEffect(() => {
    console.log(Math.random());
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('API WAS CALLED');
      }, []);
  });

  //useReducer
  //useReducer is an alternative to a complex useState and if you’ve used Redux in the past, this will look familiar.
  //benifit is u can easily test the reducer function and group similar state and logic
  const [state, dispatch] = useReducer(reducer, initialState);

  //useRef
  // Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render so its great modify elements
  // The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).
  const inputRef = useRef(null);
  const onClearAndFocus = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  //useEffect vs useLayoutEffect
  //useEffect runs asynchronously and after a render is painted to the screen.
  //useLayoutEffect, on the other hand, runs synchronously after a render(react call the component) but before the screen is updated(visualy visible)
  useEffect(()=>{console.log('useEffect')},[])
  useLayoutEffect(()=>{console.log('useLayoutEffect')},[])
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
      <h2>useReducer</h2>
      <p>
        name : {state.name} age :{state.age}
      </p>
      <button
        onClick={(_) => {
          dispatch({ type: 'NAME' });
          dispatch({ type: 'AGE' });
        }}
      >
        increase count
      </button>
      <hr />
      <h2>useRef</h2>
      <input type="text" placeholder="focused here" ref={inputRef} />
      <button onClick={onClearAndFocus}>Clear and focus</button>

      <hr />
      <Parent/>
    </div>
  );
}
