import React from 'react';
import logo from './assets/logo_lemon.jpg';

function Nav() {
  return (
    <>
        <img src={logo} height="100px" alt=""/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li><button>Login</button></li>
        </ul>
    </>
  )
}

export default Nav;