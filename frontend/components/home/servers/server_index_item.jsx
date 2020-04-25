import React from 'react'
import { NavLink } from 'react-router-dom'

const ServerIndexItem = ({server}) => {
     
    const icon = server.photoUrl ? (<img className="server-image-icon" src={server.photoUrl}></img>) : (<li><p>{server.name[0]}</p></li>)
     
    return (
        <NavLink to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}/${server.activeChannel}`)}        activeClassName="server-name-active" className="server-hover">
            <div className={server.photoUrl ? "server-name without" : "server-name"}>
                {icon}
                <div className="server-name-hover">
                    {server.name}
                </div>
            </div>
        </NavLink> 
    )
}

export default ServerIndexItem