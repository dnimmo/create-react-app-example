import React from 'react';
import PropTypes from 'prop-types';

const BannerButton =
  ({ text }) => (
    <span className="button">{text}</span>
  );

BannerButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BannerButton;
