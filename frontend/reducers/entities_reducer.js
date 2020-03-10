import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ServersReducer  from './servers_reducer';
import ServerUsersReducer from './server_users_reducer'
import ChannelsReducer from './channels_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: ServersReducer,
  serverUsers: ServerUsersReducer,
  channels: ChannelsReducer
})

export default entitiesReducer