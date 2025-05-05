import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem' }}>Welcome to Our E-Commerce Store</h1>
                <p style={{ fontSize: '1.2rem' }}>Discover the Best Deals and Exciting Offers!</p>
            </header>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#333' }}>About Us</h2>
                    <p style={{ fontSize: '1.1rem' }}>We are your one-stop shop for all your shopping needs. Explore a wide range of products at great prices.</p>
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Our Services</h2>
                    <p style={{ fontSize: '1.1rem' }}>Enjoy fast shipping, secure payments, and excellent customer service.</p>
                </div>
                <div>
                    <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Contact Us</h2>
                    <p style={{ fontSize: '1.1rem' }}>Have questions or feedback? Reach out to our support team at support@example.com</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
