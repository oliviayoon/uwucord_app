import * as UserApiUtil from '../util/user_api_util'
export const RECEIVE_SERVER_USERS = "RECEIVE_SERVER_USERS";

const receiveServerUsers = payload => ({
  type: RECEIVE_SERVER_USERS,
  payload
})

export const fetchServerUsers = () => dispatch => UserApiUtil.fetchServerUsers()
  .then(res => dispatch(receiveServerUsers(res.entities)))