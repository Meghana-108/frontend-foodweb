// src/component/Navbar/Navbar.js

import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div className='navbar-container'>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        <img src={assets.menu_icon} alt="Menu icon" />
      </button>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <Link to='/'><img src={assets.logo1} alt="logo1" className="logo1" /></Link>
        <ul className="navbar-menu">
          <li>
            <Link to='/home' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <a href='#food-display' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          </li>
          <li>
            <Link to='/contact' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</Link>
          </li>
          <li>
            <Link to='/admin' onClick={() => setMenu("Admin")} className={menu === "Admin" ? "active" : ""}>Admin</Link>
          </li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search icon" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Basket icon" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
