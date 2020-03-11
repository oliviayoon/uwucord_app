import React from 'react'
import {NavLink} from 'react-router-dom'

const ServerIndexItem = ({server, channels}) => {
    // debugger
    const icon = server.photoUrl ? (<img className="server-image-icon" src={server.photoUrl}></img>) : (<li >
        <p>
            {server.name[0]}
        </p>
    </li>)
    
    return (
            <NavLink to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}/${channels[0].id}`)} activeClassName="server-name-active" className="server-name">
                {icon}
            </NavLink> 
    )
}

export default ServerIndexItem