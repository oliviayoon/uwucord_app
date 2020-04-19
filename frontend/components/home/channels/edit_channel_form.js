import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ChannelForm from './channel_form'
import { updateChannel, destroyChannel, clearChannelErrors } from '../../../actions/channel_actions';
import { closeModal } from '../../../actions/modal_actions';


const msp = (state, ownProps )=> {
    const serverId =  parseInt(ownProps.location.pathname.split("/")[2])
    return({
    formType: "Edit",
    channel: state.entities.channels[ownProps.location.pathname.split("/")[3]],
    currentServer: state.entities.servers[serverId],
    errors: state.errors.channelErrors,
    generalChannel: Object.values(state.entities.channels).filter(channel => channel.serverId === serverId && channel.name === "genewal")[0]

})}

const mdp = dispatch => ({
    processChannel: channel => dispatch(updateChannel(channel)),
    destroyChannel: channelId => dispatch(destroyChannel(channelId)),
    closeModal: () => dispatch(closeModal()),
    clearChannelErrors: () => dispatch(clearChannelErrors())
})

export default withRouter(connect(msp,mdp)(ChannelForm))