import React, {
    forwardRef,
    useState,
    useImperativeHandle
} from 'react';

//we used forwardRef and useImperativeHandle to make this referable component
//see out toggle state in child not in the parent we havent uplifted the state
//In React we can enable  refs passing to other components using a function called forwardRef
// forwardRef is a function used to pass the ref to a child component.
//useImperativeHandle gives you the ability to modify a ref that has been created.
export default forwardRef(function Child(props, ref) {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(
        ref,
        () => {
            return {
                alterToggle() {
                    setToggle(!toggle);
                }
            }
        });

    return (
        <div style={{ padding: '10px', border: '1px solid black' }}>
            <button
            >
                Child Button
            </button>
            {toggle && <span>Toggle</span>}
        </div>
    );
});
