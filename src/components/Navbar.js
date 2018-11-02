import React from 'react';
import './Navbar.css';

export default function Navbar(){
  return(
    <nav className='navbar'>
      <img className='navbar-img' src="" alt=""/>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <a href="https://github.com/adriantoddross/huntshowdown-soloevent" target="_blank" rel="noopener noreferrer">About</a>
        </li>
        <li className='navbar-item'>
          <a href="https://www.huntshowdown.com/" target="_blank" rel="noopener noreferrer">What is Hunt: Showdown?</a>
        </li>
      </ul>
    </nav>
  );
}