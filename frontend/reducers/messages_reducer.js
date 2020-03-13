import {RECEIVE_MESSAGE, REMOVE_MESSAGE} from '../actions/message_actions'
import {RECEIVE_SERVERS, RECEIVE_SERVER} from '../actions/server_actions'

const MessagesReducer = (state = {}, action) => {
    Object.freeze(state)
   let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            // debugger
            if (typeof action.payload.messages === "undefined") return {}
            return action.payload.messages
        // case RECEIVE_SERVER:
        //     newState[action.payload.message.id] = action.payload.message
        //     return newState
        case RECEIVE_MESSAGE:
            newState[action.message.id] = action.message
            return newState
        case REMOVE_MESSAGE:
            // debugger
            delete newState[action.message]
            return newState
        default:
            return state;
    }
}

export default MessagesReducer