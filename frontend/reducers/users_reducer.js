import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVERS, RECEIVE_SERVER} from '../actions/server_actions'
import { RECEIVE_USER } from '../actions/user_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            newState[action.user.id] = action.user
            return newState
        case RECEIVE_SERVERS:
            return action.payload.users
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.payload.users)
        case RECEIVE_USER:
            newState[action.payload.id] = action.payload
            return newState
        default:
            return state;
    }
}

export default userReducer