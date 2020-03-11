import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ChannelForm from './channel_form'
import { updateChannel, destroyChannel } from '../../../actions/channel_actions';


const msp = (state, ownProps )=> {
    const serverId =  parseInt(ownProps.location.pathname.split("/")[2])
    // debugger
    return({
    formType: "Edit",
    channel: state.entities.channels[ownProps.location.pathname.split("/")[3]],
    currentServer: state.entities.servers[serverId]

})}

const mdp = dispatch => ({
    processChannel: channel => dispatch(updateChannel(channel)),
    destroyChannel: channelId => dispatch(destroyChannel(channelId))

})

export default withRouter(connect(msp,mdp)(ChannelForm))