import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LogInComponent from '../components/sign_up/LogIn';
import LogOutComponent from '../components/sign_up/LogOut';

const renderComponents =
  loggedIn => (
    loggedIn
      ? <LogOutComponent />
      : <LogInComponent />
  );

const SignUp =
  ({ loggedIn }) => (
    <main className="content">
      <h1>Sign up!</h1>
      { renderComponents(loggedIn) }
    </main>
  );

SignUp.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(
  ({ authReducer }) => ({
    loggedIn: authReducer.loggedIn,
  }),
)(SignUp);
