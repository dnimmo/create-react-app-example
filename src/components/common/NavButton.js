import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { openNav, closeNav } from '../../state/store';

const NavButton =
  ({ navOpen, openNav, closeNav }) => (
    navOpen
      ? <button onClick={closeNav} className="navButton">Close nav </button>
      : <button onClick={openNav} className="navButton">Open nav</button>
  );

export default connect(
  state => (state),
  dispatch => bindActionCreators({ openNav, closeNav }, dispatch),
)(NavButton)
