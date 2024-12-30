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
            </div>
    );
}
export default Chook;