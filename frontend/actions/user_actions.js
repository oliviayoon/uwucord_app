import * as UserApiUtil from '../util/user_api_util'
// export const RECEIVE_SERVER_USERS = "RECEIVE_SERVER_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

// const receiveServerUsers = payload => ({
//   type: RECEIVE_SERVER_USERS,
//   payload
// })

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
})

// export const fetchServerUsers = () => dispatch => UserApiUtil.fetchServerUsers()
//   .then(res => dispatch(receiveServerUsers(res.entities)))

export const updateUser = (user) => dispatch => UserApiUtil.updateUser(user)
  .then(res => dispatch(receiveUser(res)))