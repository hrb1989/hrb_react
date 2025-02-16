import { Component, useState, useEffect } from "react";

const Chook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(()=> {
        if (isLoggedIn) {
            setMessage("You are Logged In");
        }
        else {
            setMessage("Yor are Logged Out")
        }
    // },[]); // - Once
    },[isLoggedIn]); // Conditional
    // }); // Every render

    return (
            <div>
                <p>{message}</p>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "LogOut" : "LogIn"}
                </button>
                <C2 message={message}/>
            </div>
    );
}

function C2({message}){
    return (
        <div>
            <p>Just a Component</p>
            <C3 message={message}/>
        </div>
    )
}

function C3({message}){
    return (
        <div>
            <C4 message={message}/>
        </div>
    )
}

function C4({message}){
    return (
        <div>
            <p>Comp 4</p>
            <p>{message}</p>
        </div>
    )
}
export default Chook;