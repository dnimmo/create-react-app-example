import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openNav as openNavFunction, closeNav as closeNavFunction } from '../../state/store';

const NavButton =
  ({ navOpen, openNav, closeNav }) => (
    navOpen
      ? <button onClick={closeNav} className="navButton">Close nav </button>
      : <button onClick={openNav} className="navButton">Open nav</button>
  );

NavButton.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  openNav: PropTypes.func,
  closeNav: PropTypes.func,
};

NavButton.defaultProps = {
  openNav: openNavFunction,
  closeNav: closeNavFunction,
};

export default connect(
  state => (state),
  dispatch => bindActionCreators({
    openNav: openNavFunction,
    closeNav: closeNavFunction,
  }, dispatch),
)(NavButton);
