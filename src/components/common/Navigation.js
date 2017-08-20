import React from 'react'
import { Link } from 'react-router-dom'
import NavButton from './NavButton';

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
  (navigationOpen, loggedIn, closeNav) => (
    <div>
      { renderNavButton(navigationOpen) }
      { renderNavItems(navigationOpen, loggedIn, closeNav) }
  </div>
);

const navigation =
  ({ loggedIn, navigationOpen, closeNav }) => (
    renderNavigation(loggedIn, navigationOpen, closeNav)
  );

export default navigation