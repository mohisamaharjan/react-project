import React from 'react';

const HeroSection = () => {
    return (
        <main className="hero container">
            {/* Hero Content */}
            <div className="hero-content">
                <h1>Your FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</p>
                
                {/* Buttons Section */}
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button> {/* Add the class here */}
                </div>
                <p className="shopping">Also available on</p> {/* Moved below Shop Now */}
            </div>

            {/* Hero Image */}
            <div className="hero-image">
                <img src="/images/nike.png" alt="nike-logo" />
            </div>
        </main>
    );
};

export default HeroSection;
