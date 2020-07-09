import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';

const ApplicationViews = () => {
    return (
        <>
            <Route
                exact
                path="/"
                render={() => {
                    return <Home />
                }}
            />
        </>
    );
};

export default ApplicationViews;