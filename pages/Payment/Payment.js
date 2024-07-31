// pages/Payment/Payment.js
import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className='payment'>
      <h1>Payment Information</h1>
      <form className='payment-form'>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Name on Card" />
        <input type="text" placeholder="Expiry Date (MM/YY)" />
        <input type="text" placeholder="CVV" />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
