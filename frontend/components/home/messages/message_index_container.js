import {connect} from 'react-redux'
import MessageIndex from './message_index'
import {withRouter} from 'react-router-dom'

const msp = (state, ownProps) => {
    return({
        channel: state.entities.channels[ownProps.location.pathname.split("/")[3]]

})}

const mdp = dispatch => ({
    
})

export default withRouter(connect(msp, mdp)(MessageIndex))