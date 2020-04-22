import {connect} from 'react-redux'
import MessageIndex from './message_index'
import {withRouter} from 'react-router-dom'
import { createMessage } from '../../../actions/message_actions'


const msp = (state, ownProps) => {
    //  debugger 
    const channelId = ownProps.location.pathname.split("/")[3]
    const messages =  Object.values(state.entities.messages).filter(message => message.channelId == channelId)
    let currentUser = null;
    let prevUser = null;
    const messageBlocks = [];
    let messageBlock = [];
    for (let i = 0; i < messages.length; i++ ) {
        currentUser = messages[i].authorId;
    if ( prevUser != currentUser ) {
      prevUser = currentUser
        if (messageBlock.length > 0)
            messageBlocks.push(messageBlock);
            messageBlock = [ messages[i] ];
        } else {
            messageBlock.push(messages[i]);
        }
    }
    messageBlocks.push(messageBlock);
    return({
        channel: state.entities.channels[channelId],
        users: Object.values(state.entities.users),
        currentUsername: state.entities.users[state.session.id].username,
        messages: messages,
        messageBlocks: messageBlocks
    })}

const mdp = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default withRouter(connect(msp, mdp)(MessageIndex))