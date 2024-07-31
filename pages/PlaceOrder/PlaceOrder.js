import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">

  <p className="title">Delivery Information</p>

  <div className="multi-fields">

  <input type="text" placeholder='First name' />

  <input type="text" placeholder='Last name' />

  </div>

  <input type="email" placeholder='Email address' />

  <input type="text" placeholder='Street' />

  <div className="multi-fields">

  <input type="text" placeholder='City' />

  <input type="text" placeholder= 'State' />

  </div>

  <div className="multi-fields">

  <input type="text" placeholder='Zip code' />

  <input type="text" placeholder='Country' />

  </div>

  <input type="text" placeholder='Phone'/>
<div className='cart-total'>
          <h2>Cart Total</h2>
          <div >
          <div className='cart-total-details'>
              <p>subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>delivery fee</p>
              <p>
                {getTotalCartAmount()===0?0:2}
              </p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          
          
          </div>
          <button >Proceed to payment</button>
        </div>
</div>
    </form>
  )
}

export default Placeorder