import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVERS} from '../actions/server_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.users
        default:
            return state;
    }
}

export default userReducer