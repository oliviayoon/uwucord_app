import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user }) // checks to see if action.user.id is there (updates it), if not, adds it
    default:
      return state; 
  }
}

export default usersReducer;