import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
      <div className="navbar">
        <div className="nav-logo">   
       <p>Shopper</p> 
      </div>
     <ul className="nav-menu">
      <li onClick={()=>{setMenu("Shop")}}>Shop{menu==="Shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
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
