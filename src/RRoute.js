import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";

function Home() {
    return(
        <div>
            Home Page
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

function RRoute() {
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
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    ); 
}

export default RRoute;