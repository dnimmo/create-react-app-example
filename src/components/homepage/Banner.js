import React from 'react'
import BannerButton from './BannerButton';

const banner =
  ({ loggedIn }) => (
    <div className="banner">
      <h1>Do something. Do something else. Do a third thing.</h1>
      <span>Here is a bit of text that clarifies the bit of text above.</span>
      <div>
        <BannerButton
          text={loggedIn ? 'Sign out :(' : 'Sign in!'}
        />

        <BannerButton
          text="Look at this!"
        />
      </div>
    </div>
  );

export default banner
