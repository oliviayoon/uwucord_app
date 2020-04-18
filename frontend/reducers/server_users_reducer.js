import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions'
// import { RECEIVE_SERVER_USERS } from '../actions/user_actions'


const ServerUsersReducer =  (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.serverUsers        
        case RECEIVE_SERVER:
        // debugger
        // let newState = Object.assign({}, state)
        // newState[action.payload.user.id] = action.payload.user
        // debugger
            return Object.assign({}, state, action.payload.serverMembers)
        case REMOVE_SERVER:
            debugger
            let newState = Object.assign({}, state)
            let serverMember = Object.values(action.data.serverMember)[0]
            delete newState[serverMember.id]
            return newState;
        default:
            return state;
    }

}

export default ServerUsersReducer