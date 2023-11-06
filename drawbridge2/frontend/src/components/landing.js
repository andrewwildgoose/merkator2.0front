import React from 'react';
import { Link } from 'react-router-dom';

import '../css/landing.css'


const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="centered">
            <h1>Welcome to drawbridge</h1>
            </header>
            <main>
            <section className="description centered">
                <h2>Securely Manage Your Passwords</h2>
                <p>
                drawbridge helps you store and organize your passwords securely. Say
                goodbye to forgotten passwords and data breaches.
                </p>
            </section>
            <section className="cta centered">
                <h2>Get Started Today</h2>
                <p>Protect your accounts with a reliable password manager.</p>
                <Link to="/register">
                <button className="get-started-button">Get Started</button>
                </Link>
            </section>
            </main>
        </div>
    );
};

export default LandingPage;