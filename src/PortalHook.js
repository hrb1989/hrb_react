import { Component, useState, useRef } from "react";
import { createPortal } from "react-dom";
import ErrorBoundary from "./ErrorBoundary";


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
            <ErrorBoundary>
            {/* You have clicked {count.current} number of times!
            <br></br> */}
            <button onClick={increment}>Ref</button>
            <button onClick={renIncrement}>Render</button>
            {createPortal(
                <div>
                    You have clicked {count.current} number of times!
                </div>, document.getElementById("portalDiv")
            )}
            <JSBugs />
            </ErrorBoundary>
        </div>
    );
}

//  Child Component, which has a error
function JSBugs() {
    const a = undefined;
    throw new Error('I Crashed!')
}
export default PortalHook;