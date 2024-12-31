import { useEffect, useState } from "react";

const AuthStatus = ({render}) => {
    const [isAuth, setAuth] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setAuth(true)
        }, 3000);
    },[]);

    return (
        <div>
            {render(isAuth)}
        </div>
    );

};

export default AuthStatus;