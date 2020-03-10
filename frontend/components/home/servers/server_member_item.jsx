import React from 'react';

const ServerMemberItem = ({member}) => {

    const icon = member.imageUrl ? (<img className="user-profile" src={member.imageUrl} height="15"></img>) :  (<div className="user-profile">{member.username[0]}</div>)
    return(
        <>
            <div className="member-list-item" >
                {icon}
                <div >{member.username}</div>
            </div>
        </>
)
    }

export default ServerMemberItem