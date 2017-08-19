import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    return (
    <div className='App'>
      <Header pageTitle='Create React App Example' />
        <Router history='' >
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      <Footer />
    </div>
    );
  }
}

export default App;
