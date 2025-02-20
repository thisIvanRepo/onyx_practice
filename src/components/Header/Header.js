import React from 'react';
import './Header.css';
import icon from '../../images/icons.svg'

function Header() {
  return (
    <header className='header'>
      <div className='container container-header'>
        <nav className='header-nav'>
          <a href='../index.html' className='logo'>
            <svg
              className='logo-svg'
              width='24'
              height='24'
            >
              <use href={`${icon}#icon-scissors`}></use>
            </svg>
            <span className='logo-text'>arber</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
// icons.svg#icon-scissors
export default Header;