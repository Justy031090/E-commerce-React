import React from 'react';
import '../styles/homepage.css';

function Homepage() {
    return (
        <div className="home-container">
            <div className="home-men">
                <button>Shop Mens</button>
            </div>
            <div className="home-women">
                <button>Shop Womens</button>
            </div>
            <div className="home-jewerly">
                <button>Shop Jewerly</button>
            </div>
            <div className="home-electronics">
                <button>Shop Electronics</button>
            </div>
        </div>
    );
}

export default Homepage;
