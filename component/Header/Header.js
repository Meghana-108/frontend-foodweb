import React from 'react';
import './Header.css'; // If you have specific CSS styles for the header

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favorite food here</h1>
        <p>Explore our diverse menu of fresh, seasonal dishes crafted with passion and expertise.</p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
