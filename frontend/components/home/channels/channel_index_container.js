import {connect} from 'react-redux'
import ChannelIndex from './channel_index'
import {logout} from '../../../actions/session_actions'
import {openModal} from '../../../actions/modal_actions'


const msp = (state,ownProps) => {
    const currentServer = ownProps.currentServer
    if (!currentServer) return {};
    // debugger
    return ({
            currentUser: state.entities.users[state.session.id],
            currentServer: currentServer,
            channels: Object.values(state.entities.channels).filter(channel => channel.serverId == currentServer.id)
        })
}


const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))

})

export default connect(msp, mdp)(ChannelIndex)