import React, { useState } from 'react';
import UserApiManager from '../../modules/UserApiManager';
import { Button, Form } from 'semantic-ui-react';
import './Auth.css';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange);
    };

    const handleLogin = e => {
        e.preventDefault();

        const userCredentials = {
            "username": credentials.username,
            "password": credentials.password
        }

        UserApiManager.loginUser(userCredentials)
            .then(() => {
                props.setUser()
                props.history.push("/")
            })
    };

    return (
        <Form className="form" id="login-form" onSubmit={handleLogin}>
            <h1 className="form-title">Login</h1>
            <Form.Field>
                <label htmlFor="username">Username</label>
                <input onChange={handleFieldChange} type="text"
                    id="username"
                    placeholder="Username"
                    required="" autoFocus="" value={credentials.username} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">Password</label>
                <input onChange={handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" autoFocus="" value={credentials.password} />
            </Form.Field>
            <Button primary className="submit-button" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;