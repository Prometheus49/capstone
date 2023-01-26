import React from 'react';
import logo from './assets/logo_lemon.jpg';
import './style.css';

function Nav() {
  return (
    <>
      <nav>
          <img src={logo} height="100px" alt=""/>
          <ul> 
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
          </ul>
        </nav>
    </>
  )
}

export default Nav;