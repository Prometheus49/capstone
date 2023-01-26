import React from 'react';
import './App.css';
import './style.css';
import img1 from './assets/restauranfood.jpg';

function Header() {
  return (
    <div className="heading">
        <div className="leftside">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            we are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button>Reserve Table</button>
        </div>
        <div className="rightside">
          <img src={img1} height="350px" width="350px" alt=""/>
        </div>
    </div>
  )
}

export default Header;