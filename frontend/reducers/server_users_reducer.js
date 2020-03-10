import { RECEIVE_SERVERS } from '../actions/server_actions'
// import { RECEIVE_SERVER_USERS } from '../actions/user_actions'


const ServerUsersReducer =  (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SERVERS:
        //     let newState = Object.assign({}, state)
        //     let serverUsers = Object.values(action.payload.serverUsers);
        //     let user;
        //     for (let i = 0; i < serverUsers.length; i++) {
        //         user = serverUsers[i];
        //         console.log(user.serverId);
        //         newState[user.id] = {id: user.id, serverId: user.serverId, userId: user.userId}
        //     }
        //    return newState; 
        return action.payload.serverUsers   
        default:
            return state;
    }

}

export default ServerUsersReducer