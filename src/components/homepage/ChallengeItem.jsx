import React from 'react';
import PropTypes from 'prop-types';

const ChallengeItem =
  ({ imageSrc, altText, text }) => (
    <div className="challengeItem">
      <img alt={altText} src={imageSrc} />
      <p>{text}</p>
    </div>
  );

ChallengeItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChallengeItem;
