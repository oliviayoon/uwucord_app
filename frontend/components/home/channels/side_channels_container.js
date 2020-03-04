import {connect} from 'react-redux'
import Welcome from './side_channels'
import {logout} from '../../actions/session_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Welcome)