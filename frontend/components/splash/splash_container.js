import {connect} from "react-redux";
import Splash from './splash'
import {signup} from '../../actions/session_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(msp, mdp)(Splash)