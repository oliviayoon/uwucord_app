import React from 'react'
import {NavLink} from 'react-router-dom'

const ServerIndexItem = ({server, channels}) => {
    const icon = server.photoUrl ? (<img className="server-image-icon" src={server.photoUrl}></img>) : (<li >
        <p>
            {server.name[0]}
        </p>
    </li>)
    const generalChannelId = server.name === "Home" ? null : (channels.filter(channel => channel.name === "general")[0].id)
    return (
            <NavLink to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}/${generalChannelId}`)} activeClassName="server-name-active" className="server-name">
                {icon}
            </NavLink> 
    )
}

export default ServerIndexItem