import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = ({cart}) => {

  return (
    <div className='Navbar'>
        <div className='Logo'>Food Cort</div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Cart"}><span>{cart.length}</span>View Cart</Link></li>
        </ul>
    </div>
  )
}
