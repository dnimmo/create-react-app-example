import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import { closeNav } from '../../state/store';

const signUpText =
  loggedIn => (
    loggedIn
      ? 'Log out'
      : 'Sign up/in'
  );

const navigationClasses =
  isOpen => (
    isOpen
      ? 'siteNavigation'
      : 'siteNavigation closed'
  );

const renderNavButton =
  navigationOpen => <NavButton navOpen={navigationOpen} />;


const renderNavItems =
  (loggedIn, navigationOpen) => (
    <nav className={navigationClasses(navigationOpen)}>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/sign-up'}>{signUpText(loggedIn)}</Link>
      <Link to={'/book-a-demo'}>Book a demo</Link>
    </nav>
  );

const renderNavigation =
  (loggedIn, navigationOpen) => (
    <div>
      { renderNavButton(navigationOpen) }
      { renderNavItems(loggedIn, navigationOpen) }
    </div>
  );

const Navigation =
  ({ loggedIn, navigationOpen }) => (
    renderNavigation(loggedIn, navigationOpen)
  );

export default connect(
  ({ loggedIn, navigationOpen }) => ({ loggedIn, navigationOpen }),
  dispatch => bindActionCreators({ closeNav }, dispatch),
)(Navigation);
