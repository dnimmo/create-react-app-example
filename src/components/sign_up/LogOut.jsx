import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logOut } from '../../state/store';

const LogOutComponent =
  ({ logOut }) => (
    <div>
      <p>Well done you, you can press a button</p>

      <span role="button" tabIndex={0} onClick={logOut} className="button">Log out</span>
    </div>
  );

export default connect(
  () => ({}),
  dispatch => bindActionCreators({ logOut }, dispatch),
)(LogOutComponent);
