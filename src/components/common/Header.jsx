import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
