import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut as logOutFunction } from '../../reducers/auth';

const LogOutComponent =
  ({ logOut }) => (
    <div>
      <p>Well done you, you can press a button</p>

      <span role="button" tabIndex={0} onClick={logOut} className="button">Log out</span>
    </div>
  );

LogOutComponent.propTypes = {
  logOut: PropTypes.func,
};

LogOutComponent.defaultProps = {
  logOut: logOutFunction,
};

export default connect(
  () => ({}),
  dispatch => bindActionCreators({ logOut: logOutFunction }, dispatch),
)(LogOutComponent);
