import {connect} from 'react-redux'
import Main from './main'
import {logout} from '../../../actions/session_actions'

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    currentServer: state.entities.servers[ownProps.match.params.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Main)