import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import NavButton from './NavButton';
import { closeNav } from '../../state/store'

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
  (navigationOpen, loggedIn) => (
    <nav className={navigationClasses(navigationOpen)}>
      <Link to={`/home`}>Home</Link>
      <Link to={`/about`}>About</Link>
      <Link to={`/sign-up`}>{signUpText(loggedIn)}</Link>
      <Link to={`/book-a-demo`}>Book a demo</Link>   
    </nav>
  );

const renderNavigation =
  (loggedIn, navigationOpen, closeNav) => (
    <div>
      { renderNavButton(navigationOpen) }
      { renderNavItems(navigationOpen, loggedIn, closeNav) }
  </div>
);

const navigation =
  ({ loggedIn, navigationOpen, closeNav }) => (
    renderNavigation(loggedIn, navigationOpen, closeNav)
  );

export default connect(
  ({ loggedIn, navigationOpen }) => ({ loggedIn, navigationOpen }), 
  dispatch => bindActionCreators({ closeNav }, dispatch)
)(navigation)