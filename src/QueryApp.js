import { useQuery } from "@tanstack/react-query";

// useQuery - Read the data with an API - fetching, caching & even handle the errors
// const {data, error, isLoading, isError, isSuccess} = useQuery(queryKey, fetchFn, options);
const QueryApp = () => {
    const {data, error, isLoading, isError} = useQuery(
        {
            queryKey:['todos'], 
            queryFn:async () => {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                return response.json();
            }
        });

        if (isLoading) return <div><h2>Loading....</h2></div>
        if (isError) return <div><h2>Error: {error.message}</h2></div>

    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {data.map(todo =>(
                    <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}
export default QueryApp;