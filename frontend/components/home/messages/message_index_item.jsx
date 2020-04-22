import React from 'react';

class MessageIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {message, users} = this.props
        
        const currentUser = users.filter(user => user.id == message[0].authorId)[0];
        if (!currentUser) return null;

        const otherContent = message.map(message => 
            <div key={message.id} className="message-content-text">{message.body}</div>
        )
        const icon = currentUser.imageUrl ? (<img className="user-profile" src={currentUser.imageUrl} height="15"></img>) :  (<div className="user-profile">{currentUser.username[0]}</div>)
        const time = moment(message[0].createdAt);
        const now = moment();
        let timeDisplay
        if (now.diff(time, 'days') > 1)
            timeDisplay = time.format("MM-DD-YY");
        else
        timeDisplay = time.fromNow();
        return(
            <div className="message-items">
            {icon}
            <div className="message-body-text">
                <div className="user-message-container">
                    {<div className="message-username" id="message-username-author">
                    {currentUser.username} 
                    </div>}
                    <p className="time-stamp">{timeDisplay}</p>
                </div>
                <div className="message-body-detail" id="message-body-detail-item">
                    {otherContent}
                </div>
            </div>
            </div>
        )
    }

} 

export default MessageIndexItem