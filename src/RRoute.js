import { BrowserRouter, Route, Router, Routes, Link, Outlet, useParams, useNavigate, Navigate } from "react-router-dom";


function ProtectedRoute({children}) { // children for the true scenario; React params
    const isAuth = false;
    return isAuth ? children : <Navigate to="/login" />
}

function Home() {
    let navigate = useNavigate();
    
    const handleRedirect = () => {
        navigate('/casestudy');
    };
    return(
        <div>
            Home Page
            <nav>
                <ul>
                    <li><Link to="/team">Our Team</Link></li> {/* Navigate options within Home Page */}
                </ul>
            </nav>
            <button onClick={handleRedirect}>Go to Case Study</button>
            <Outlet /> {/* //placeholder for a child to render within Parent */}
        </div>
    ); 
}

function About() {
    return(
        <div>
            About Us
        </div>
    ); 
}

function Team() {
    return(
        <div>
            Our Team
        </div>
    ); 
}

function Users(){
    return (
        <div>
            Users Available
            <nav>
                <ul>
                    <li><Link to="/users/1">User 1</Link></li> {/* Navigate options within Home Page */}
                    <li><Link to="/users/2">User 2</Link></li> {/* Navigate options within Home Page */}
                    <li><Link to="/users/3">User 3</Link></li> {/* Navigate options within Home Page */}
                </ul>
            </nav>
            <Outlet /> {/* //placeholder for a child to render within Parent */}        
        </div>)
}

function Login(){
    return <div><h2>Login Page</h2></div>
}

function UserProfile(){
    let {userId} = useParams();
    return <div> User ID is {userId} </div>
}

function CaseStudy() {
    return <h2>Case Study on React</h2>;
}

function RRoute() {
    // const isLoggedIn = false;
    return(
        <BrowserRouter>
            <div>
                Test Router
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/' element={<Home />}> {/* Path of Home Page */}
                    <Route path="/team" element={<Team />}></Route> {/* Path within Home Page */}
                </Route>
                <Route path='/about' element={<About />}></Route> {/* Path of About Page */}
                {/* <Route path='/users' element={<Users />}> */}
                <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>}>
                    {/* <Route path="/users/:userId" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route> Path within Home Page */}
                    <Route path="/users/:userId" element={<UserProfile />}></Route> {/* Path within Home Page */}
                </Route> {/* Path of About Page */}
                <Route path='/casestudy' element={<CaseStudy />}></Route> {/* Path of About Page */}
                <Route path='/login' element={<Login />}></Route> {/* Path of About Page */}
            </Routes>
        </BrowserRouter>
    ); 
}

export default RRoute;