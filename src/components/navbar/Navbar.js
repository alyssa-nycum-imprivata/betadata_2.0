import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = (props) => {
    const handleLogout = () => {
        props.clearUser()
        props.history.push("/");
    }

    return (
        <header>
            <nav>
                <ul id="nav-list">
                    <div id="site-title-div">
                        <li id="site-title"><h1>BetaData</h1></li>
                    </div>
                    <div id="nav-link-div">
                        {props.hasUser ? 
                            <li className="nav-link">
                                <Link className="link" to="" onClick={handleLogout}>Logout</Link>
                            </li>
                        :
                            <>
                                <li className="nav-link">
                                    <Link className="link"to="/login">Login</Link>
                                </li>
                                <li className="nav-link">
                                    <Link className="link" to="/register">Register</Link>
                                </li>
                            </>
                        }
                    </div>
                </ul>
            </nav>
        </header>
    )
};

export default withRouter(NavBar);