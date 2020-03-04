import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ServersReducer  from './servers_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: ServersReducer
})

export default entitiesReducer