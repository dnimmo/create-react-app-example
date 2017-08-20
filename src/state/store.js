import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk';

const startingState = {
  loggedIn: false,
  navigationOpen: false,
};

export const actionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  OPEN_NAVIGATION: 'OPEN_NAVIGATION',
  CLOSE_NAVIGATION: 'CLOSE_NAVIGATION',
};

export const reducer =
  (state = startingState, action) => {
    switch (action.type) {
      case actionTypes.LOG_IN:
        return { ...state, loggedIn: true };
      case actionTypes.LOG_OUT:
        return { ...state, loggedIn: false };
      case actionTypes.OPEN_NAVIGATION:
        return { ...state, navigationOpen: true };
      case actionTypes.CLOSE_NAVIGATION:
        return { ...state, navigationOpen: false };
      default:
        return state;
    }
  };

export const logIn =
  () => ({ type: actionTypes.LOG_IN });

export const logOut =
  () => ({ type: actionTypes.LOG_OUT });

export const openNav =
  () => ({ type: actionTypes.OPEN_NAVIGATION });

export const closeNav =
  () => ({ type: actionTypes.CLOSE_NAVIGATION });

export const initialStore =
  (initialState = startingState) => (
    createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware)),
    )
  );

export default connect(initialStore);

