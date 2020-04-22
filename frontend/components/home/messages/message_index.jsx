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
        this.uwufier = this.uwufier.bind(this)
    }

    componentDidUpdate(){
        const messageBox = document.getElementById("messages-text-inner")
        messageBox.scrollTo({left: 0, top: messageBox.scrollHeight, behavior: "smooth"})  
    }

    handleChange(){
        return e => this.setState({body: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.body === "") return;
        let message = {body: this.uwufier(this.state.body), channelId: this.props.channel.id}
        this.setState({body: ""})
        this.props.createMessage(message)
    }


    uwufier(message){
        let uwuSentence = ""
        // sentence.forEach(message => 
            message.split(" ").forEach(word => {
            if (word === "senpai") {
                uwuSentence += "senpwai"
            } else if (word === "LOL" || word === "uwu" || word === "owo" || word === "lol" ){
                uwuSentence += word
            } else if (word === "amazing") {
                uwuSentence += "amajing"
            } 
            else {
                word.toLowerCase().split("").forEach(letter => 
                {if (letter === "l" || letter === "r") {
                    uwuSentence += "w"
                } else 
                    uwuSentence += letter
                })
            }
            uwuSentence += " "
        })
        // )
        // debugger
        const random = ["","uwu", "hehehoo", "owo", "~~!", "", "heheh", "b-baka", "bwaka !", ""]
        const randomWord = random[Math.floor(Math.random() * random.length)]
        
        // debugger
        return uwuSentence += randomWord
    }

    render(){
        const {channel, messages, users, currentUsername, messageBlocks} = this.props
        const messagesContainer = !channel ? ("") :  (<input id="message-text" onChange={this.handleChange()} type="text" placeholder="tywpepe ur message hewe ^w^" value={this.state.body}/>)
        const channelHeader = !channel ? ("") : (<><i className="fas fa-hashtag"></i> <p>{channel.name}</p></>)
        const serverMembers = !channel ? ("") : (<div className="members-list">
            <Route to="/:id" component={ServerMemberContainer} />
            </div>)
        const messageItems = !messages.length ? ("") :
            // (<div className="chat-messages">
            //     {messages.map(message => <MessageIndexItem currentUsername={currentUsername} key={message.id} message={message} users={users}/>)} 
            // </div>)
            (<div className="chat-messages">
                {messageBlocks.map(messageBlock => <MessageIndexItem currentUsername={currentUsername} key={messageBlock[0].id} message={messageBlock} users={users} />)}
            </div>
            )
      
        return(
            <div className="messages-content">
                <div className="channel-header">
                    {channelHeader}
                </div>
                <div className="messages-members-container">
                    <div className="messages-text">
                        <div className="messages-text-inner" id="messages-text-inner">
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