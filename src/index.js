import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './state/store'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(combineReducers({ ...reducer, router: routerReducer}), applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
