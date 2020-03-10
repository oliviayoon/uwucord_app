import {connect} from 'react-redux'
import ChannelIndex from './channel_index'
import {logout} from '../../../actions/session_actions'
import {openModal} from '../../../actions/modal_actions'


const msp = (state,ownProps) => {
    return ({
            currentUser: state.entities.users[state.session.id],
            // homeServer: Object.values(state.entities.servers).filter(server => server.name === "Home" && server.ownerId === state.entities.users[state.session.id].id),
            currentServer: ownProps.currentServer
        })
}


const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))

})

export default connect(msp, mdp)(ChannelIndex)