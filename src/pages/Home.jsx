import React from 'react';
import Banner from '../components/homepage/Banner'
import Challenges from '../components/homepage/BusinessChallenges'
import Features from '../components/homepage/Features'

const Home = 
  () => (
    <main className='content'>
      <Banner /> 
      <Challenges />
      <Features />     
    </main>
  );

export default Home;
