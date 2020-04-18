import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../actions/server_actions'
import { CHANGE_ACTIVE_CHANNEL } from '../actions/channel_actions'

const ServersReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.servers;
        case RECEIVE_SERVER:
            debugger
            return Object.assign(newState, action.payload.server)
        case REMOVE_SERVER:
            debugger
            let server = Object.values(action.data.server)[0]
            delete newState[server.id]
            return newState;
        case CHANGE_ACTIVE_CHANNEL: 
            newState[action.data.serverId].activeChannel = action.data.channelId;
            return newState;
        default:
            return state
    }
}

export default ServersReducer