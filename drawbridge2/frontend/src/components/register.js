import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/authContext';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/r_l_form.css'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

const Registration = () => {

    const { currentUser, setCurrentUser } = useAuth();


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState(null); // State variable to store error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await client.post('/api/register', formData);
            console.log('Registration successful', response.data);
            setCurrentUser(true);
            // You can redirect or display a success message here.
            } catch (error) {
                if (error.response && error.response.status === 500) {
                    // If the error response status is 400 (Bad Request)
                    const errorMessage = extractErrorMessage(error);
                    console.error('Registration failed:', errorMessage);
                    // Set error message in state
                    setErrorMessage(errorMessage);
                } else {
                    console.error('Registration failed:', error.message);
                }
        }
    };

    // Function to extract error message from error response
    const extractErrorMessage = (error) => {
        let errorMessage = 'Registration failed due to validation errors.';
        if (error.response && error.response.data && error.response.data.detail) {
            const errorDetail = error.response.data.detail.replace(/^[\[\]'" ]+|[\[\]'" ]+$/g, '');
            console.log('errorDetail:', errorDetail);
            if (Array.isArray(errorDetail) && errorDetail.length > 0) {
                
                errorMessage = errorDetail[0];
            } else if (typeof errorDetail === 'string') {
                errorMessage = errorDetail;
            }
        }
        return errorMessage;
    };

    return (
        <Row>
            <div className="rl-form w-300">
                <h2 className="reg-title">Registration</h2>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if exists */}
                <button type="submit">Register</button>
                </form>
                <Link to="/login" className="custom-link-style">
                    <p>Already have an account? Sign in here</p>
                </Link>
            </div>
        </ Row>
    );
};


export default Registration;
