import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn } from '../../state/store';

const LogInComponent =
  ({ logIn }) => (
    <div>
      <p>
        Or don&#39;t, because I&#39;m not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you&#39;ve signed in.
      </p>

      <span tabIndex={0} role="button" onClick={logIn} className="button">Log in</span>
    </div>
  );

export default connect(
  () => ({}),
  dispatch => bindActionCreators({ logIn }, dispatch),
)(LogInComponent);
