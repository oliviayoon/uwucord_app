import React from 'react'
import ServerMemberContainer from '../servers/server_member_container'
import {Route} from 'react-router-dom'
import MessageIndexItem from './message_index_item'
class MessageIndex extends React.Component {
    constructor(props){
        super(props)
         
        this.state = {body: ""}
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        return e => this.setState({body: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.body === "") return;
        let message = {body: this.state.body, channelId: this.props.channel.id}
        this.setState({body: ""})
        this.props.createMessage(message)
    }

    render(){
        const {channel, messages, users} = this.props
        const messagesContainer = !channel ? ("") :  (<input id="message-text" onChange={this.handleChange()} type="text" placeholder="tywpepe ur message hewe ^w^" value={this.state.body}/>)
        const channelHeader = !channel ? ("") : (<><i className="fas fa-hashtag"></i> <p>{channel.name}</p></>)
        const serverMembers = !channel ? ("") : (<div className="members-list">
            <Route to="/:id" component={ServerMemberContainer} />
            </div>)
        const messageItems = !messages ? ("") :
            (<div className="chat-messages">
                {messages.map(message => <MessageIndexItem key={message.id} message={message} users={users}/>)} 
            </div>)
        return(
            <div className="messages-content">
                <div className="channel-header">
                    {channelHeader}
                </div>
                <div className="messages-members-container">
                    <div className="messages-text">
                        <div className="messages-text-inner">
                            {messageItems}
                        </div>
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