import {connect} from 'react-redux'
import Main from './main'
import {logout} from '../../../actions/session_actions'

const msp = (state, ownProps) => {
    const currentServer = ownProps.location.pathname.split("/")[2] === "@me" ? 
    (Object.values(store.getState()["entities"]["servers"]).filter(server => server.name == "Home")[0]) 
        : (state.entities.servers[ownProps.match.params.id])
     
    return({
    currentUser: state.entities.users[state.session.id],
    currentServer: currentServer
})
}

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Main)