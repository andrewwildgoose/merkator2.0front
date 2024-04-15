import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/authContext';

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

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await client.post('/api/register', formData);
        console.log('Registration successful', response.data);
        setCurrentUser(true);
        // You can redirect or display a success message here.
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
    <div className="rl-form">
        <h2>Registration</h2>
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
        <button type="submit">Register</button>
        </form>
        <Link to="/login" className="custom-link-style">
            <p>Already have an account? Sign in here</p>
        </Link>
    </div>
    );
};


export default Registration;
