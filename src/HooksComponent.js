import {useState} from 'react';

// const [state, setState] = useState(initialState);

function HooksComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            You have clicked {count} number of times!
            <br></br>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/*<button onClick={valDisplay}>Previous Value</button> */}
            <button onClick={increment}>Increase with Prev with Arrow</button>
            <button onClick={() => setCount(prevCount=>prevCount+1)}>Increase with Prev Inline</button>
        </div>
    );
}

export default HooksComponent;