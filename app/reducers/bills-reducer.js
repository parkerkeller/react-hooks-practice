import initialState from './bills-state';

const billsReducer = (state = initialState, action) => {
  let loggedIn, username;

  switch (action.type) {
    case 'UPDATE_LOGIN':
      loggedIn = action.loggedIn;
      username = action.username;
      return {
        ...state,
        loggedIn,
        username
      };
    case 'GET_BILLS':
      return {
        ...state,
        bills: action.bills
      }
    case 'CREATE_BILL':
      return {
        ...state,

      }
    case 'DELETE_BILL':
    case 'UPDATE_BILL':
    default:
      return intialState;
  }
}

export default billsReducer;