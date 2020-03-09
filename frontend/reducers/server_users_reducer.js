import { RECEIVE_SERVERS} from '../actions/server_actions'


const ServerUsersReducer =  (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SERVERS:
           return action.payload.serverUsers    
        default:
            return state;
    }

}

export default ServerUsersReducer