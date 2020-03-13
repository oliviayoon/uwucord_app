import {connect} from 'react-redux'
import MessageIndex from './message_index'
import {withRouter} from 'react-router-dom'
import { createMessage } from '../../../actions/message_actions'


const msp = (state, ownProps) => {
    // debugger
    const channelId = ownProps.location.pathname.split("/")[3]
    return({
        channel: state.entities.channels[channelId],
        users: Object.values(state.entities.users),
        messages: Object.values(state.entities.messages).filter(message => message.channelId == channelId)

})}

const mdp = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default withRouter(connect(msp, mdp)(MessageIndex))