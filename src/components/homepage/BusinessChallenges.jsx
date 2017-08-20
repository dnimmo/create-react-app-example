import React from 'react'
import ChallengeItem from './ChallengeItem'

const BusinessChallenges = 
  () => (
    <div className="businessChallenges">
      <h2>Do any of the following apply to you?</h2>
      <ChallengeItem
        imageSrc="http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-1.svg"
        text="Do you stare at your monitor, not allowing your lack of eyes get in your way?"
        altText="A person with no eyes looking at a monitor"
      />
      <ChallengeItem
        imageSrc="http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-2.svg"
        text='Are you sick of being told to "like, share and subscribe"?'
        altText='A person looking uncomfortable whilst a number of icons come out of their monitor'
      />
      <ChallengeItem
        imageSrc="http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-3.svg"
        text="Are you confused by Capitalism?"
        altText='A person looking confused by the concept of money being exchanged for goods and services'
      />
      <ChallengeItem
        imageSrc="http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-5.svg"
        text="Do you find yourself constantly wondering how you will afford your next suitcase?"
        altText='A person buying a suitcase'
      />
      <ChallengeItem
        imageSrc="http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-4.svg"
        text="Do your colleagues seem distant, even when you spent all night coming up fancy graphs just to see them smile again?"
        altText='One person giving a presentation whilst another looks lost in thought'
      />    
    </div>
  )

export default BusinessChallenges;
