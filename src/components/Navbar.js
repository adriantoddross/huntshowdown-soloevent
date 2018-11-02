import React from 'react';
import './Navbar.css';

export default function Navbar(){
  return(
    <nav className='nav'>
      <img src="" alt=""/>
      <ul className='nav-list'>
        <li className='nav-item'>
          <a href="https://github.com/adriantoddross/huntshowdown-soloevent" target="_blank" rel="noopener noreferrer">About</a>
        </li>
        <li className='nav-item'>
          <a href="https://www.huntshowdown.com/" target="_blank" rel="noopener noreferrer">What is Hunt: Showdown?</a>
        </li>
      </ul>
    </nav>
  );
}