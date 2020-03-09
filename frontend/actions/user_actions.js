import * as UserApiUtil from '../util/user_api_util'
export const RECEIVE_SERVER_USERS = "RECEIVE_SERVER_USERS";

const receiveServerUsers = users => ({
  type: RECEIVE_SERVER_USERS,
  users
})

export const fetchServerUsers = () => dispatch => UserApiUtil.fetchServerUsers()
  .then(users => dispatch(receiveServerUsers(users)))