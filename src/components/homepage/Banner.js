import React from 'react'
import BannerButton from './BannerButton';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loggedIn } from '../../state/store'

const banner =
  ({ loggedIn }) => (
    <div className="banner">
      <h1>Do something. Do something else. Do a third thing.</h1>
      <span>Here is a bit of text that clarifies the bit of text above.</span>
      <div>
        <Link to='/sign-up'>
          <BannerButton
            text={loggedIn ? 'Sign out :(' : 'Sign in!'}
          />
        </Link>
        <Link to='/book-a-demo'>
          <BannerButton
            text="Look at this!"
          />
        </Link>
      </div>
    </div>
  );

export default connect(
  ({ loggedIn }) => ({ loggedIn })
)(banner);
