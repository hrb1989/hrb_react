import {useState, useEffect} from 'react';

// const [state, setState] = useState(initialState);
// useEffect - data fetching
// useEffect(() => {
//      },[dependency])
// 1. if [] - componentDidMount - only once after initial render
// 2. if any condition/dependency - Conditional rendering depends on the value
// 3. if no dependency - componentDidUpdate - after every render

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

function EffectApp() {
    const [data, setData] = useState(null);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => setData(result))
    },[])

    return (
        <div>
            <h1>Data from jsonPlaceholder</h1>
            {/* {data?"Data Available":"No Data"} */}
            {data?<>{JSON.stringify(data, null, 2)}</>:"Loading"}
        </div>
    )
}

export {HooksComponent,EffectApp};