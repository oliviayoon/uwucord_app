import { connect } from 'react-redux';
import ServerIndex from './server_index'
import {fetchAllServers} from '../../../actions/server_actions'

const msp = state => ({
    servers: Object.values(state.entities.servers)
})

const mdp = dispatch => ({
    fetchAllServers: () => dispatch(fetchAllServers())
})

export default connect(msp, mdp)(ServerIndex)