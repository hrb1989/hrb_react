import { BrowserRouter, Route, Router, Routes, Link, Outlet } from "react-router-dom";

function Home() {
    return(
        <div>
            Home Page
            <nav>
                <ul>
                    <li><Link to="/team">Our Team</Link></li> {/* Navigate options within Home Page */}
                </ul>
            </nav>
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
                <Route path='/' element={<Home />}> {/* Path of Home Page */}
                    <Route path="/team" element={<Team />}></Route> {/* Path within Home Page */}
                </Route>
                <Route path='/about' element={<About />}></Route> {/* Path of About Page */}
            </Routes>
        </BrowserRouter>
    ); 
}

export default RRoute;