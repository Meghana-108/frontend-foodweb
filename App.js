// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Payment from './pages/Payment/Payment';
import Admin from './pages/Admin/Admin';
import ContactUs from './pages/ContactUs/ContactUs';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/" element={<Login />} /> {/* Default route set to Login */}
    </Routes>
  );
};

export default App;
