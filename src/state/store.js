export const actionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  OPEN_NAVIGATION: 'OPEN_NAVIGATION',
  CLOSE_NAVIGATION: 'CLOSE_NAVIGATION',
};

export const logIn =
  () => ({ type: actionTypes.LOG_IN });

export const logOut =
  () => ({ type: actionTypes.LOG_OUT });

export const openNav =
  () => ({ type: actionTypes.OPEN_NAVIGATION });

export const closeNav =
  () => ({ type: actionTypes.CLOSE_NAVIGATION });


const initialState = {
  loggedIn: false,
  navigationOpen: false,
};

export const reducer =
  (state = initialState, action) => {
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
