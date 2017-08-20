import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn } from '../../state/store'

const LogInComponent =
  ({ logIn }) => (
    <div>
      <p>Or don't, because I'm not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you've signed in.</p>

      <span onClick={logIn} className="button">Log in</span>
    </div>
  );

export default connect(
  state => ({}), 
  dispatch => bindActionCreators({ logIn }, dispatch)
)(LogInComponent)