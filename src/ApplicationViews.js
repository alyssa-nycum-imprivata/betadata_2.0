import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';


const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route
                exact
                path="/"
                render={(props) => {
                    if (hasUser) {
                        return <Home {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                exact
                path='/login'
                render={(props) => {
                    return <Login setUser={setUser} {...props} />
                }}
            />
            <Route
                exact
                path='/register'
                render={(props) => {
                    return <Register setUser={setUser} {...props} />
                }}
            />
        </>
    );
};

export default ApplicationViews;