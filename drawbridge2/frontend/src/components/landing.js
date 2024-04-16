import React from 'react';
import { Link } from 'react-router-dom';

import '../css/landing.css'


const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="title centered">
            <h1>Welcome to merkator</h1>
            </header>
            <main>
            <section className="description centered">
                <h2>a multi-route trip planning and analysis application </h2>
                <p>
                Group your planned and completed activities together to unlock a new level of planning and analysis for your trips. 
                </p>
            </section>
            <section className="cta centered">
                <h2>Get Started Today</h2>
                <p>Create your account and upload your routes.</p>
                <Link to="/register">
                <button className="get-started-button">Get Started</button>
                </Link>
            </section>
            </main>
        </div>
    );
};

export default LandingPage;