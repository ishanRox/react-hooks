
import React,{useContext} from 'react';
//not this one import { useContext } from 'react/cjs/react.production.min';
import { AppContext } from '../../App';
//prop way
// export default function User({userName}) {
//   return <div>
//  <h1>User : {props.userName}</h1> 
//   </div>
// }
export default function User() {
  const { userName } = useContext(AppContext);

  return <div>
    <h1>User : {userName}</h1>
  </div>
}