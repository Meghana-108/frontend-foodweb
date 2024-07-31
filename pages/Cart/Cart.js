import React, { useContext } from 'react';
import './Cart.css';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // Function to handle checkout
  const handleCheckout = async () => {
    try {
      // Prepare the cart items to send to the backend
      const orders = Object.keys(cartItems).map(id => ({
        id,
        name: food_list.find(item => item._id === id)?.name,
        quantity: cartItems[id],
        price: food_list.find(item => item._id === id)?.price
      }));
      
      // Replace with your actual backend URL
      const response = await axios.post('http://localhost:5000/api/orders', { orders });

      if (response.status === 200) {
        alert('Order placed successfully!');
        // Optionally clear the cart or redirect user
        // setCartItems({}); // Uncomment to clear cart
        navigate('/order-confirmation'); // Redirect to an order confirmation page
      }
    } catch (error) {
      console.error('There was an error placing the order:', error);
      alert('Error placing order. Please try again.');
    }
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-title cart-items-item' key={item._id}>
                <img src={item.image} alt=""/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='cart-button'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder="promocode"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
