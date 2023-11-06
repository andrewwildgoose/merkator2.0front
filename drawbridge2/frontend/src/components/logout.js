import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authContext';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"  // Replace with secret variable before production
});

const Logout = () => {

    const { currentUser, setCurrentUser } = useAuth();

    const nav = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            // Send the logout request
            const res = await client.post("/api/logout", { withCredentials: true })
            // .then(setCurrentUser(false))
            // .then(console.log("Current user after logout: ", currentUser), nav("/"));            
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default Logout;