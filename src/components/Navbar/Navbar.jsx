import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="nav-logo">   
       <p>Shopper</p> 
      </div>
     <ul className="nav-menu">
      <li>Shop</li>
      <li>Men</li>
      <li>Women</li>
      <li>Kids</li>
     </ul>
     <div className="nav-logo-cart">
      <button>LogIn</button>
      <img src="" alt=""></img>
      <div className="nav-cart-count">0</div>
     </div>
    </div>
  );
};

export default Navbar;  
