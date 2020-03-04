import { connect } from 'react-redux';
import ServerIndex from './server_index'



const msp = state => ({
    servers: state.entities.servers
})

const mdp = dispatch => ({
    fetchServers: () => dispatch(fetchServers())
})

export default connect(msp, mdp)(ServerIndex)