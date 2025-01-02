import { useEffect, useState } from "react";

function ApiApp() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        setData(data);
        setLoading(false);
    });
},[]) // render only once
    
    return (
        <div>
            API Test
            {loading ? <div>Loading</div> : data.map(todo => {
                return(
                <div key={todo.id}>
                    <p>UserID: {todo.userId}</p>
                    <p>Title: {todo.title}</p>
                    <p>Status: {todo.completed ? "Completed":"Pending"}</p>
                    </div>
                )
            })}
            {/* {data.title} */}
        </div>
    )
}

export default ApiApp;