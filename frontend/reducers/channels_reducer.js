import {RECEIVE_CHANNEL, REMOVE_CHANNEL} from '../actions/channel_actions'
import {RECEIVE_SERVERS, RECEIVE_SERVER} from '../actions/server_actions'

const ChannelsReducer = (state = {}, action) => {
    Object.freeze(state)
   let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.channels
        case RECEIVE_SERVER:
            newState[action.payload.channel.id] = action.payload.channel
            return newState
        case RECEIVE_CHANNEL:
            newState[action.channel.id] = action.channel
            return newState
        case REMOVE_CHANNEL:
             
            delete newState[action.channel]
            return newState
        default:
            return state;
    }
}

export default ChannelsReducer