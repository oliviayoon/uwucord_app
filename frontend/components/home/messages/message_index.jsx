import React from 'react'
import ServerMemberContainer from '../servers/server_member_container'
import {Route} from 'react-router-dom'
class MessageIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="messages-content">
                <div className="channel-header">
                    channel header
                </div>
                <div className="messages-members-container">
                    <div className="messages-text">
                        messages go here
                    <input type="text" placeholder="tywpepe ur message hewe ^w^"/>
                    </div>
                <div className="members-list">
                    <Route to="/:id" component={ServerMemberContainer} />
                    <div> invite fwends button goes here</div>
                </div>
                </div>
            </div>
        )
    }
}

export default MessageIndex