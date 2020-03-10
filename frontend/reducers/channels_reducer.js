import {RECEIVE_CHANNEL, REMOVE_CHANNEL} from '../actions/channel_actions'
import {RECEIVE_SERVERS} from '../actions/server_actions'

const ChannelsReducer = (state = {}, action) => {
    Object.freeze(state)
   let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.payload.channels
        case RECEIVE_CHANNEL:
                debugger
            newState[action.channel.id] = action.channel
            return newState
        case REMOVE_CHANNEL:
            delete newState[action.channel.id]
            return newState
        default:
            return state;
    }
}

export default ChannelsReducer