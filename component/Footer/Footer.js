import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className='footer-content'>
            <div className='footer-content-right'>
            <img className='logo-image' src={assets.logo1} alt="logo"/>
            <p>
            Explore our wide range of delicious dishes crafted with passion and quality ingredients.</p>
            
            </div>
            <div className='footer-content-left'>
               <h2>COMPANY</h2>
               
               <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>contact us</li>
                <li>admin</li>
              </ul>
            </div>
                <div className='footer-content-center'>
                <h2>GET IN TOUCH</h2>
                <ul>
                   <li>1+6758-57-576</li>
                   <li>contact@gamil.com</li>
                  
                </ul>
                </div>
              

        </div>
        <hr/>
        <p className='footer-copyright'>© 2024 Sahyadri Food. All rights reserved.</p>
    </div>
  )
}

export default Footer