import {connect} from 'react-redux'
import ServerMember from './server_member'

const msp = (state, ownProps) => {
    return ({
        currentServer: state.entities.servers[ownProps.match.params.id],
        serverUsers: Object.values(state.entities.serverUsers).filter(serverUser => serverUser.serverId = ownProps.match.params.id)
            .map(serverUser => state.entities.users[serverUser.userId])
    })
}


export default connect(msp)(ServerMember)