import React from 'react';

const ChallengeItem =
  ({ imageSrc, altText, text }) => (
    <div className="challengeItem">
      <img alt={altText} src={imageSrc} />
      <p>{text}</p>
    </div>
  );

export default ChallengeItem;
