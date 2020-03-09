import {connect} from 'react-redux'
import ChannelIndex from './channel_index'
import {logout} from '../../../actions/session_actions'


const msp = state => ({
    currentUser: state.entities.users[state.session.id]
    // channels: state.entities.channels
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())

})

export default connect(msp, mdp)(ChannelIndex)