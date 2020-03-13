import {connect} from 'react-redux'
import MessageIndex from './message_index'
import {withRouter} from 'react-router-dom'
import { createMessage } from '../../../actions/message_actions'


const msp = (state, ownProps) => {
    // debugger
    return({
        channel: state.entities.channels[ownProps.location.pathname.split("/")[3]]

})}

const mdp = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default withRouter(connect(msp, mdp)(MessageIndex))