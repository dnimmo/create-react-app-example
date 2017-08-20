import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header =
  ({ pageTitle }) => (
    <div>
      <header>
        <Link to="/home" className="logo">
          Logo goes here
        </Link>
        <h1>{pageTitle}</h1>
      </header>
      <Navigation />
    </div>
  );

export default Header;
