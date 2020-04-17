import * as ChannelAPIUtil from "../util/channel_api_util"

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS"
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS"
export const CHANGE_ACTIVE_CHANNEL = "CHANGE_ACTIVE_CHANNEL"

const receiveChannels = payload => ({
    type: RECEIVE_CHANNELS,
    payload
})

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
})

const removeChannel = channel => ({
    type: REMOVE_CHANNEL,
    channel
})

export const changeActiveChannel = (data) => ({
    type: CHANGE_ACTIVE_CHANNEL,
    data
})

const receiveErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
})

export const clearChannelErrors = () => ({
    type: CLEAR_CHANNEL_ERRORS
})

export const createChannel = channel => dispatch => ChannelAPIUtil.createChannel(channel)
    .then(res => dispatch(receiveChannel(res)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const updateChannel = channel => dispatch => ChannelAPIUtil.updateChannel(channel)
.then(res => dispatch(receiveChannel(res)), errors => dispatch(receiveErrors(errors.responseJSON)))

export const destroyChannel = channel => dispatch => ChannelAPIUtil.destroyChannel(channel)
    .then(() => dispatch(removeChannel(channel)), errors => dispatch(receiveErrors(errors.responseJSON)))

