import React from 'react'
import {NavLink, Link } from 'react-router-dom'

const ServerIndexItem = ({server, channels}) => {
    // debugger
    const icon = server.photoUrl ? (<img className="server-image-icon" src={server.photoUrl}></img>) : (<li >
        <p>
            {server.name[0]}
        </p>
    </li>)
    // debugger
    return (
        <NavLink to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}`)} activeClassName="server-name-active" >
            <Link to={ server.name=== "Home" ? ('/channels/@me') : (`/channels/${server.id}/${channels[0].id}`)} className="server-name">
                {icon}
            </Link>
        </NavLink> 
    )
}

export default ServerIndexItem