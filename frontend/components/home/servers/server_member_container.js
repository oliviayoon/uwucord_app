import {connect} from 'react-redux'
import ServerMember from './server_member'
import { fetchAllServers } from '../../../actions/server_actions'

const msp = (state, ownProps) => {
    const currentServerId = ownProps.match.params.id
    return ({
        currentServer: state.entities.servers[currentServerId],
        serverUsers: Object.values(state.entities.serverUsers).filter(serverUser => serverUser.serverId === parseInt(currentServerId))
            .map(serverUser => state.entities.users[serverUser.userId])
    })
}

const mdp = dispatch => ({
    fetchAllServers: () => dispatch(fetchAllServers())
})


export default connect(msp, mdp)(ServerMember)