
import React,{useContext} from 'react';
// import { useContext } from 'react/cjs/react.production.min';
import { AppContext } from '../../App';

//prop way
// export default function Login({setUserName}) {

//   return <div>
//     <input onChange={
//       (event) => {
//         setUserName(event.target.value);
//       }
//     } />
//   </div>
// }
export default function Login() {
  const { setUserName } = useContext(AppContext);

  return <div>
    <input onChange={
      (event) => {
        setUserName(event.target.value);
      }
    } />
  </div>
}