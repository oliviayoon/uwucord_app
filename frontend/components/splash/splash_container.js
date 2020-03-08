import {connect} from "react-redux";
import Splash from './splash'
import {signup, login} from '../../actions/session_actions'

const mdp = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(null, mdp)(Splash)