import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './reducers/auth';
import navigationReducer from './reducers/navigation';

const reducers = combineReducers({
  authReducer,
  navigationReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(React.createElement(
  BrowserRouter,
  null,
  React.createElement(
    Provider,
    { store },
    React.createElement(App, null),
  ),
), document.getElementById('root'));

registerServiceWorker();
