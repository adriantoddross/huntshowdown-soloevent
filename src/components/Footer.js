import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer-container'>
      <footer id='footer' className='footer' role='contentinfo'>
        <div className='footer-img-container'>
          <img className='footer-img' src="https://res.cloudinary.com/adriantoddross/image/upload/v1527785141/adrian-ross.png" alt="Adrian Ross"/>
        </div>
        <p>
          Designed and developed by <a className='attribution' href="https://www.adriantoddross.com/" target="_blank" rel="noopener noreferrer">Adrian Ross</a>.
        </p>
        <p>
          Hosted on Netlify. Code is licensed under MIT and available on Github. All images and graphics are licensed under CC BY-SA.
        </p>
        <p>
          © 2018 Adrian Ross
        </p>
      </footer>
    </div>
  );
}