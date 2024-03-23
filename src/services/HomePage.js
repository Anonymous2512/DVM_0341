import React from 'react';
import './HomePage.css';
import Image2 from '../images/image2.png';

const HomePage = () => {
    const handleGetStarted = () => {
        window.location.href = '/DVM_0341/booklist';
      };
      
  return (
    <div className="home">
      <div className="column-2">
        <img src={Image2} alt="Welcome" className="home-image" />
      </div>
      <div className="column-2">
        <h1>Welcome to Our Website</h1>
        <p>Explore a world of books and stories!</p>
        <p>Your library has never looked so good.</p>
        <button  onClick={handleGetStarted} className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
