import AuthStatus from "./authCheck"

const AuthApp = () => {
    return (
        <div>
            <h2>Authentication Check App</h2>
            {/* <AuthStatus /> */}
            {/* {AuthStatus.isAuth? "Authenticated":"Sorry"} */}
            <AuthStatus
                render={(isAuth) => 
                    isAuth ? (
                        <p>Welcome to Fractal</p>
                    ) : (
                        <p>Please SignIn</p>
                    )
                } />
        </div>
    )
}

export default AuthApp;

// def authCheck():
//     isAuth =false
//     // setTimeout(isAuto(true), 3000)
//     // if isAuth:
//     //     print("Welcome to Fractals");
//     // else:
//     //     print("loading");
//     return isAuth

// def authApp():
//     authStatus = authCheck()
//     if authStatus:
//         print("Welcome to Fractals");
//     else:
//         print("loading");


// def authApp():
//     authStatus = authCheck()
//     if authStatus:
//         print("You can proceed to Quiz!!!");
//     else:
//         print("Sorry please Login");