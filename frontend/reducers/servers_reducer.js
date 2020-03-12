import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions'

const ServersReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.servers
        case RECEIVE_SERVER:
            // debugger
            newState[action.payload.server.id] = action.payload.server
            return newState
        case REMOVE_SERVER:
            delete newState[action.server]
            return newState
        default:
            return state
    }
}

export default ServersReducer