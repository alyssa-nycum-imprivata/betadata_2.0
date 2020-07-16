import React, { useState } from 'react'
import UserApiManager from '../../modules/UserApiManager';
import { Button, Form } from 'semantic-ui-react';
import './Auth.css';

const Register = (props) => {
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", username: "", password: "" });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    };

    const handleRegister = e => {
        e.preventDefault();

        const newUser = {
            "first_name": credentials.firstName,
            "last_name": credentials.lastName,
            "email": credentials.email,
            "username": credentials.username,
            "password": credentials.password
        }

        UserApiManager.registerNewUser(newUser).then(() => props.history.push("/"));
    };

    return (
        <Form className="form" onSubmit={handleRegister}>
            <h1 className="form-title">Register</h1>
            <div id="register-form-input-container">
                <div className="register-form-div">
                    <Form.Field className="register-form-field">
                        <label htmlFor="firstName"> First Name </label>
                        <input onChange={handleFieldChange} type="text"
                            id="firstName"
                            placeholder="First Name"
                            required="" autoFocus="" />
                    </Form.Field>
                    <Form.Field className="register-form-field">
                        <label htmlFor="lastName"> Last Name </label>
                        <input onChange={handleFieldChange} type="text"
                            id="lastName"
                            placeholder="Last Name"
                            required="" autoFocus="" />
                    </Form.Field>
                </div>
                <div className="register-form-div">
                    <Form.Field className="register-form-field">
                        <label htmlFor="email"> Email </label>
                        <input onChange={handleFieldChange} type="email"
                            id="email"
                            placeholder="Email Address"
                            required="" autoFocus="" />
                    </Form.Field>
                    <Form.Field className="register-form-field">
                        <label htmlFor="username"> Username </label>
                        <input onChange={handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                    </Form.Field>
                </div>
                <div className="register-form-div">
                    <Form.Field className="register-form-field">
                        <label htmlFor="password"> Password </label>
                        <input onChange={handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" autoFocus="" />
                    </Form.Field>
                </div>
            </div>
            <div className="form-button-div">
                <Button primary className="submit-button" type="submit">
                    Register
                </Button>
                <Button primary className="cancel-button" onClick={() => props.history.push("/")}>
                    Cancel
                </Button>
            </div>
        </Form>
    );
};

export default Register;