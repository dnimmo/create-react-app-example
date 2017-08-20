import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogInComponent from '../components/sign_up/LogIn';
import LogOutComponent from '../components/sign_up/LogOut';

const renderComponents =
  loggedIn => (
    loggedIn
      ? <LogOutComponent />
      : <LogInComponent />
  );

class SignUp extends Component {
  render() {
    const { loggedIn } = this.props;

    return (
      <main className="content">
        <h1>Sign up!</h1>

        { renderComponents(loggedIn) }

      </main>
    );
  }
}

export default connect(
  ({ loggedIn }) => ({ loggedIn })
)(SignUp);
