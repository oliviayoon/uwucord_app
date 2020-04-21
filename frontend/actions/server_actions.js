import * as ServerAPIUtil from '../util/server_api_util'

export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER"
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS"
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS"

const receiveServers = payload => ({
    type: RECEIVE_SERVERS,
    payload
})

const receiveServer = payload => ({
    type: RECEIVE_SERVER,
    payload
})

const removeServer = data => ({
    type: REMOVE_SERVER,
    data

})

const receiveErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors

})

export const clearErrors = () => ({
    type: CLEAR_SERVER_ERRORS
    
})

export const fetchAllServers = () => dispatch => ServerAPIUtil.fetchAllServers()
    .then(res => dispatch(receiveServers(res.entities)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const createServer = (server) => dispatch => ServerAPIUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const deleteServer = (serverId) => dispatch => ServerAPIUtil.deleteServer(serverId)
    .then((data) => dispatch(removeServer(data)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const updateServer = (server) => dispatch => ServerAPIUtil.updateServer(server)
    .then(server =>dispatch(receiveServer(server)),errors => dispatch(receiveErrors(errors.responseJSON)))

export const joinServer = (serverInvite) => dispatch => ServerAPIUtil.joinServer(serverInvite)
    .then(server => dispatch(receiveServer(server)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const leaveServer = serverId => dispatch => ServerAPIUtil.leaveServer(serverId)
    .then(data => dispatch(removeServer(data)), errors => dispatch(receiveErrors(errors.responseJSON)))