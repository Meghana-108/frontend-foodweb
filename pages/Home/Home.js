import React, { useState } from 'react';
import './Home.css';
import Header from '../../component/Header/Header';
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay';
import Navbar from '../../component/Navbar/Navbar'; // Ensure this path is correct

const Home = () => {
  const [category, setCategory] = useState('All');

  return (
    <div className='home-page'>
      <Navbar />
      <div className='content'>
        <Header />
        <FoodDisplay category={category} />
      </div>
    </div>
  );
};

export default Home;
