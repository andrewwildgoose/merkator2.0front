import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authContext';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"  // Replace with your production URL
});

const Logout = () => {
    const { setCurrentUser } = useAuth();
    const nav = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                
                // Send the logout request
                const res = await client.post("/api/logout", null, { withCredentials: true })
                
                // Set currentUser
                setCurrentUser(false);
    
                // Redirect the user
                nav("/");
            } catch (error) {
                console.error('Logout failed', error);
            }
        };
    
        handleLogout();
    }, [setCurrentUser, nav]);

    return (
        <div>
        <p>Logging out...</p>
        </div>
    );
};

export default Logout;
