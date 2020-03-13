import React from 'react'
import ServerMemberContainer from '../servers/server_member_container'
import {Route} from 'react-router-dom'
class MessageIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {channel} = this.props
        const messagesContainer = !channel ? ("") :  (<>messages go here
            <input type="text" placeholder="tywpepe ur message hewe ^w^"/></>)
        const channelHeader = !channel ? ("") : (<><i class="fas fa-hashtag"></i> <p>{channel.name}</p></>)
        const serverMembers = !channel ? ("") : (<div className="members-list">
        <Route to="/:id" component={ServerMemberContainer} />
    </div>)
        return(
            <div className="messages-content">
                <div className="channel-header">
                    {channelHeader}
                </div>
                <div className="messages-members-container">
                    <div className="messages-text">
                        {messagesContainer}
                    </div>
                {serverMembers}
                </div>
            </div>
        )
    }
}

export default MessageIndex