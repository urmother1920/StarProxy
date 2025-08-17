import React from 'react';
import ProxyForm from '../components/ProxyForm';

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="hero">
                <h1>Welcome to StarProxy</h1>
                <p>Your reliable web proxy solution.</p>
            </header>
            <main>
                <ProxyForm />
            </main>
            <footer>
                <p>© {new Date().getFullYear()} StarProxy. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;