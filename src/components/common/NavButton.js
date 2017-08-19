import React from 'react'

const navButton =
  ({ navOpen, openNav, closeNav }) => (
    navOpen
      ? <button onClick={closeNav} className="navButton">Close nav </button>
      : <button onClick={openNav} className="navButton">Open nav</button>
  );

export default navButton
