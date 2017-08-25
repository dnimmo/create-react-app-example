export const actionTypes = {
  OPEN_NAVIGATION: 'OPEN_NAVIGATION',
  CLOSE_NAVIGATION: 'CLOSE_NAVIGATION',
};

export const openNav =
  () => ({ type: actionTypes.OPEN_NAVIGATION });

export const closeNav =
  () => ({ type: actionTypes.CLOSE_NAVIGATION });


const initialState = {
  navigationOpen: false,
};

export const reducer =
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.OPEN_NAVIGATION:
        return { ...state, navigationOpen: true };
      case actionTypes.CLOSE_NAVIGATION:
        return { ...state, navigationOpen: false };
      default:
        return state;
    }
  };

export default reducer;
