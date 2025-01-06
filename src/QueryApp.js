import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

// useQuery - Read the data with an API - fetching, caching & even handle the errors
// const {data, error, isLoading, isError, isSuccess} = useQuery(queryKey, fetchFn, options);
// const {mutate, error, isLoading, isError, isSuccess} = useMutation(mutateFn, options);

const createPost = async  (newPost) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    return response.data;
};

const QueryApp = () => {
    // const {data, error, isLoading, isError} = useQuery(
    //     {
    //         queryKey:['todos'], 
    //         queryFn:async () => {
    //             const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //             return response.json();
    //         }
    //     });

    //     if (isLoading) return <div><h2>Loading....</h2></div>
    //     if (isError) return <div><h2>Error: {error.message}</h2></div>

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const {mutate, error, isLoading, isError, isSuccess, data} = useMutation({
        mutationFn: createPost,
        onSuccess: (data) => {
            console.log("Posted successfully: ", data);
        },
        onError: (error) => {
            console.log("Sorry some error: ", error)
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postTitle && postBody) {
            console.log("Title and Body is available")
            mutate({title: postTitle, body: postBody});
        }
    }
    return (
        <div>
            <h2>Todos</h2>
            <div>
            {/* <ul>
                {data.map(todo =>(
                    <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul> */}
            </div>
            <h2>Create a Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Body:</label>
                    <textarea
                        value={postBody}
                        onChange={(e) => setPostBody(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Post</button>
            </form>
            {isLoading && <p> Loading ... </p>}
            {isError && <p> Sorry Some Error Occured! {error.message}</p>}
            {isSuccess && <div> <p>Posted Successfully!</p>
                {data && (
                    <div>
                        <p>Title: {data.title}</p>
                    </div>
                )}
                </div>}

        </div>
    );
}
export default QueryApp;