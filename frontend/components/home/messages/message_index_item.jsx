import React from 'react';

const MessageIndexItem = ({message, users}) => {
    const currentUser = users.filter(user => user.id == message.authorId)[0];
    if (!currentUser) return null;
    const icon = currentUser.imageUrl ? (<img className="user-profile" src={currentUser.imageUrl} height="15"></img>) :  (<div className="user-profile">{currentUser.username[0]}</div>)
    const time = moment(message.createdAt);
    const now = moment();
    let timeDisplay
    if (now.diff(time, 'days') > 1)
        timeDisplay = time.format("MM D YY");
    else
        timeDisplay = time.fromNow();
    
    return(
        <div className="message-items">
        {icon}
        <div className="message-body-text">
            <div className="user-message-container">
                {<div className="message-username">
                {currentUser.username} 
                </div>}
                <p className="time-stamp">{timeDisplay}</p>
            </div>
            <div className="message-body-detail">
            {message.body}
            </div>
        </div>
        </div>
    )
}

export default MessageIndexItem