import React from 'react'

const LogOutComponent =
  ({ logOut }) => (
    <div>
      <p>Well done you, you can press a button</p>

      <span onClick={logOut} className="button">Log out</span>
    </div>
  );

  export default LogOutComponent