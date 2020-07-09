import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavBar = (props) => {
    const handleLogout = () => {
        props.clearUser()
        props.history.push("/");
    }

    return (
        <header>
            <h1>BetaData</h1>
            <nav>
                <ul>
                    {props.hasUser ? 
                        <li>
                            <Link to="" onClick={handleLogout}>Logout</Link>
                        </li>
                    :
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    )
};

export default withRouter(NavBar);