import * as MessageAPIUtil from "../util/message_api_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"
export const REMOVE_MESSAGE_ERRORS = "REMOVE_MESSAGE_ERRORS"
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS"

const receiveMessages = payload => ({
    type: RECEIVE_MESSAGES,
    payload
})

const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

const removeMessage = message => ({
    type: REMOVE_MESSAGE,
    message
})

const receiveErrors = errors => ({
    type: REMOVE_MESSAGE_ERRORS,
    errors
})

export const clearChannelErrors = () => ({
    type: CLEAR_MESSAGE_ERRORS
})

export const createMessage = message => dispatch => MessageAPIUtil.createMessage(message)
    .then(res => dispatch(receiveMessage(res)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const updateMessage = message => dispatch => MessageAPIUtil.updateMessage(message)
.then(res => dispatch(receiveMessage(res)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const destroyMessage = message => dispatch => MessageAPIUtil.destroyMessage(message)
    .then(() => dispatch(removeMessage(message)), errors => dispatch(receiveErrors(errors.responseJSON)))