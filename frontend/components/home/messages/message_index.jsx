import React from 'react'
import ServerMemberContainer from '../servers/server_member_container'
import {Route} from 'react-router-dom'
class MessageIndex extends React.Component {
    constructor(props){
        super(props)
        // debugger
        this.state = {body: ""}
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        return e => this.setState({body: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let message = {body: this.state.body, channelId: this.props.channel.id}
        this.props.createMessage(message)

    }

    render(){
        const {channel} = this.props
        if (!channel) return null;
        const messagesContainer = !channel ? ("") :  (<input onChange={this.handleChange()}type="text" placeholder="tywpepe ur message hewe ^w^"/>)
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
                    <div className="message-text-container">

                        <form className="message-form" onSubmit={this.handleSubmit}>
                        {messagesContainer}
                        </form>
                    </div>
                    </div>
                {serverMembers}
                </div>
            </div>
        )
    }
}

export default MessageIndex