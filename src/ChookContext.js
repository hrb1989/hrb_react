import { Component, useState, useEffect, createContext, useContext } from "react";

const messageContext = createContext();
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
                <messageContext.Provider value={message}>
                <p>{message}</p>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "LogOut" : "LogIn"}
                </button>
                <C2 message={message}/>
                </messageContext.Provider>
            </div>
    );
}

function C2({message}){
    return (
        <div>
            <p>Just a Component</p>
            <C3 />
        </div>
    )
}

function C3(){
    return (
        <div>
            <C4 />
        </div>
    )
}

function C4(){
    const message = useContext(messageContext)
    return (
        <div>
            <p>Comp 4</p>
            <p>{message}</p>
        </div>
    )
}
export default Chook;