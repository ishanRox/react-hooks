
import React, { useRef } from 'react';
import Child from './child.js';

export default function Parent() {
  //we dont have state in our parent component 
  //but we got a reference to altertoggle function by converting our child component to a 
  //referable by using forwardRef and useImperativeHandle hooks
  const childRef = useRef(null);

  return <div>
    <button onClick={() => {
      childRef.current.alterToggle();
    }}>Parent Button</button>
    <Child ref={childRef} />
  </div>
}