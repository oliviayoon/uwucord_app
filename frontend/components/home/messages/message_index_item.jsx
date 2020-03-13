import React from 'react';

const MessageIndexItem = ({message, currentUser}) => {

    return(
        <div className="message-items">
        <img className="user-profile" height="15" src={currentUser.imageUrl} />
        <div className="message-body-text">
            <div className="message-username">
            {currentUser.username}
            </div>
            <div className="message-body-detail">
            {message.body}
            </div>
        </div>
        </div>
    )
}

export default MessageIndexItem