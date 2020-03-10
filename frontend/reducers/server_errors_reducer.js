import { RECEIVE_SERVER, RECEIVE_SERVERS, RECEIVE_SERVER_ERRORS, CLEAR_SERVER_ERRORS } from "../actions/server_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case CLEAR_SERVER_ERRORS:
    // case RECEIVE_SERVER:
    // case RECEIVE_SERVERS:
      return []
    case RECEIVE_SERVER_ERRORS:
      if (action.errors === undefined) return state;
      return action.errors
    default:
      return state;
  }
}

export default sessionErrorsReducer;