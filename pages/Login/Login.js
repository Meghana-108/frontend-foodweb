// src/pages/Login/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>{currState}</h2>
        <form className='login-inputs' onSubmit={handleLogin}>
          {currState === "Sign Up" && <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
          <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        </form>
        <div className='login-condition'>
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account?<span onClick={() => setCurrState("Sign Up")}> Click here</span></p>
        ) : (
          <p>Already have an account?<span onClick={() => setCurrState("Login")}> Login here</span></p>
        )}
      </div>
    </div>
  );
};

export default Login;
