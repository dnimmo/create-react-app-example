import React from 'react';

const FeatureDescription =
  ({ imageSrc, title, text, altText }) => (
    <div className="featureDescription">
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );

const Features =
  () => (
    <div className="productFeatures">
      <h2>We can probably make your life better!</h2>
      <div className="featureContainer">
        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/04/tc-icons_update-teams-01-3.svg"
          title="An Email thing"
          text="Something about email here! Email is great! Or it is rubbish? Whichever one you agree with, our product will help!"
          altText=""
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/feedback-01.svg"
          title="A shared baskets thing"
          text="Something about shared baskets here! Share all your baskets, all the time!"
          altText=""
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/saved-time-1-01.svg"
          title="A thing for cost codes"
          text="You want cost codes? You got them!"
          altText=""
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/travel-overview-01-1-01.svg"
          title="Policy and approvals"
          text="Policies! Approvals! Together!"
          altText=""
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/03/tc-icons_event-reporting-01.svg"
          title="Reporting"
          text="Because no-one likes reporting. Shut up, Brian."
          altText=""
        />

        <FeatureDescription
          imageSrc="http://travel.cloud/wp-content/uploads/2017/04/tc-icons_free-cost-01.svg"
          title="Comes with a free money-finder"
          text="Cool, right?"
          altText=""
        />
      </div>
    </div>
  );

export default Features;
