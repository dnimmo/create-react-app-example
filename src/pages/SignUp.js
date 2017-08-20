import React, { Component } from 'react';
import LogInComponent from '../components/sign_up/LogIn';
import LogOutComponent from '../components/sign_up/LogOut';

const loggedIn = false // UPDATE THIS WHEN YOU ADD REDUX

const renderComponents =
  loggedIn => (
    loggedIn
      ? <LogOutComponent />
      : <LogInComponent />
  );

class SignUp extends Component {
  render() {
    return (
      <main className="content">
        <h1>Sign up!</h1>

        { renderComponents(loggedIn) }

      </main>
    );
  }
}

export default SignUp;
