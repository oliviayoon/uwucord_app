import React from 'react'
import {Link} from 'react-router-dom'

const ServerIndexItem = ({server}) => {
    return (
            <Link to={ server.name === "Home" ? ('/channels/@me') : (`/channels/${server.id}`)} className="server-name">
                <li>
                    <p>
                        {server.name[0]}
                    </p>
                </li>
            </Link> 
    )
}

export default ServerIndexItem