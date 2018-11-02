import React from 'react';
import './Navbar.css';

export default function Navbar(){
  return(
    <nav className='navbar'>
      <img className='navbar-img' src="https://res.cloudinary.com/adriantoddross/image/upload/v1541175017/Adrian-Letter-A.png" alt="null"/>
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