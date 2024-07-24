import React, { useEffect, useState } from 'react';
import './Card.css';
import { useContext } from 'react';
import { cartContext } from '../App';

export const ViewCart = () => {
  const {cart} = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,cum) => acc + parseInt(cum.price),0));
  },[cart]);

  return (
    <>
      <h1 className='cart-heading'>Cart Poducts</h1>
      <div className='cart-container'>
        {cart.map((cart) => (
          <div className='cart-product'>
            <div className='img'>
              <img src={cart.thumbnail} alt="imgaes" />
            </div>
            <div className="cart-product-details">
              <h3>{cart.title}</h3>
              <p>{cart.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h5 className='cart-amount'>Totoal Amount RS : {total}</h5>
    </>

  )
}
