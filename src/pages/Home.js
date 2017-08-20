import React, { Component } from 'react';
import Banner from '../components/homepage/Banner'
import Challenges from '../components/homepage/BusinessChallenges'
import Features from '../components/homepage/Features'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <main className='content'>
          <Banner /> 
          <Challenges />
          <Features />     
      </main>
    );
  }
}

export default Home;
