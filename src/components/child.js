import React, {
    forwardRef,
    useState,
    useImperativeHandle
} from 'react';

//we used forwardRef and useImperativeHandle to make this referable component
//see out toggle state in child not in the parent we havent uplifted the state
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
