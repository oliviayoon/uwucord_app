import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { createChannel } from '../../../actions/channel_actions';
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
    formType: "Create"
})}

const mdp = dispatch => ({
    processChannel: channel => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal())
})


export default withRouter(connect(msp, mdp)(ChannelForm))