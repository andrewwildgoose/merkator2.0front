import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authContext';

import '../css/r_l_form.css'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000" // Replace with secret variable before production
});

const Login = () => {

    const { currentUser, setCurrentUser } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const nav = useNavigate();

    useEffect(() => {
        // This effect runs whenever currentUser changes
        if (currentUser) {
            console.log('Current user after login: ', currentUser);
            nav('/user');
        }
    }, [currentUser, nav]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await client.post('/api/login', formData)
            console.log('Login successful', response.data);
            setCurrentUser(true);
            console.log("Current user after login: ", currentUser);
            nav('/user')
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="rl-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
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
            <button type="submit">Login</button>
            </form>
            <Link to="/register" className="custom-link-style">
                <p>Don't have an account yet? Register here</p>
            </Link>
        </div>
    );
};

export default Login;
