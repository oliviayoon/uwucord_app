import { connect } from 'react-redux';
import ServerIndex from './server_index'
import {fetchAllServers, createServer} from '../../../actions/server_actions'

const msp = (state) => ({
    servers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    fetchAllServers: () => dispatch(fetchAllServers()),
    createServer: server => dispatch(createServer(server))
})

export default connect(msp, mdp)(ServerIndex)