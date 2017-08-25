export const actionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
};

export const logIn =
  () => ({ type: actionTypes.LOG_IN });

export const logOut =
  () => ({ type: actionTypes.LOG_OUT });

const initialState = {
  loggedIn: false,
};

export const reducer =
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOG_IN:
        return { ...state, loggedIn: true };
      case actionTypes.LOG_OUT:
        return { ...state, loggedIn: false };
      default:
        return state;
    }
  };

export default reducer;
