import { Component, useState, useRef } from "react";

// const StateRef = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(prevCount => prevCount + 1);
//     }
    
//     console.log("Rendered")
//     return (
//         <div>
//             You have clicked {count} number of times!
//             <br></br>
//             <button onClick={() => setCount(prevCount=>prevCount+1)}>Increase with Prev Inline</button>
//         </div>
//     );
// }

const StateRef = () => {
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
            You have clicked {count.current} number of times!
            <br></br>
            <button onClick={increment}>Ref</button>
            <button onClick={renIncrement}>Render</button>
        </div>
    );
}

export default StateRef;