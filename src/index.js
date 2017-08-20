import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './state/store';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
