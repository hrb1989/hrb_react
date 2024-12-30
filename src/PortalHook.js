import { Component, useState, useRef } from "react";
import { createPortal } from "react-dom";


const PortalHook = () => {
    // const [count, setCount] = useState(0);
    const [renCount, setRenCount] = useState(0);
    const count = useRef(0); // inital count value as 0

    const increment = () => {
        count.current += 1;
        console.log("Ref Update", count.current);
    }

    const renIncrement = () => {
        setRenCount(prevCount => prevCount + 1);
        }
    
    console.log("Rendered");
    return (
        <div>
            {/* You have clicked {count.current} number of times!
            <br></br> */}
            <button onClick={increment}>Ref</button>
            <button onClick={renIncrement}>Render</button>
            {createPortal(
                <div>
                    You have clicked {count.current} number of times!
                </div>, document.getElementById("portalDiv")
            )}
        </div>
    );
}

export default PortalHook;