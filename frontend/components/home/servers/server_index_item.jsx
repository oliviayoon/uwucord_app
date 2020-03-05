import React from 'react'

const ServerIndexItem = ({server}) => (
    <a className="server-name" href="">
        <li>
            <p>{server.name[0]}</p>
        </li>
    </a>
)

export default ServerIndexItem