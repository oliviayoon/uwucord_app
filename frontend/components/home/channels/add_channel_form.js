import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { changeActiveChannel, createChannel, clearChannelErrors } from '../../../actions/channel_actions';
import { closeModal } from '../../../actions/modal_actions';
import ChannelForm from './channel_form';

const msp = (state, ownProps) => {
    const serverId =  parseInt(ownProps.location.pathname.split("/")[2])
    return({
    currentServer: state.entities.servers[serverId],
    channel: {
        name: "",
        serverId: serverId
    },
    formType: "Create",
    errors: state.errors.channelErrors
})}

const mdp = dispatch => ({
    changeActiveChannel: data => dispatch(changeActiveChannel(data)),
    processChannel: channel => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
    clearChannelErrors: () => dispatch(clearChannelErrors())
})


export default withRouter(connect(msp, mdp)(ChannelForm))