import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom'

const Header =
  ({pageTitle}) => (
    <div>
      <header>
        <Link to='/home' className='logo'>
          Logo goes here
        </Link>
        <h1>{pageTitle}</h1>
      </header>
       <Navigation /> 
    </div>
  );

export default Header;
