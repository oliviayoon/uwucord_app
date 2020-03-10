import React from 'react'
import {NavLink} from 'react-router-dom'

const ServerIndexItem = ({server}) => {
    return (
            <NavLink to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}`)} activeClassName="server-name-active" className="server-name">
                <li>
                    <p>
                        {server.name[0]}
                    </p>
                </li>
            </NavLink> 
    )
}

export default ServerIndexItem