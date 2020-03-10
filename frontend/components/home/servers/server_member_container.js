import {connect} from 'react-redux'
import ServerMember from './server_member'

const msp = (state, ownProps) => {
    const currentServerId = ownProps.match.params.id
    return ({
        currentServer: state.entities.servers[currentServerId],
        serverUsers: Object.values(state.entities.serverUsers).filter(serverUser => serverUser.serverId === parseInt(currentServerId))
            .map(serverUser => state.entities.users[serverUser.userId])
    })
}


export default connect(msp)(ServerMember)