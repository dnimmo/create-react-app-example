import React from 'react'

const LogInComponent =
  ({ logIn }) => (
    <div>
      <p>Or don't, because I'm not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you've signed in.</p>

      <span onClick={logIn} className="button">Log in</span>
    </div>
  );

export default LogInComponent