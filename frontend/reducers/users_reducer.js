import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVERS, RECEIVE_SERVER} from '../actions/server_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.users
        // case RECEIVE_SERVER:
        //     let newState = Object.assign({}, state)
        //     // debugger
        //     newState[action.payload.user.id] = action.payload.user
        //     return newState
        default:
            return state;
    }
}

export default userReducer