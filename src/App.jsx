import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import BookDemo from './pages/BookDemo';
import NotFound from './pages/NotFound';

const App =
  () => (
    <div className="App">
      <Header pageTitle="Create React App Example" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/book-a-demo" component={BookDemo} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );

export default App;
