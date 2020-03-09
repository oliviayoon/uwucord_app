import React from 'react'

class ServerMember extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {serverUsers} = this.props
        return (
            <div>
                <ul>
                    {serverUsers.map(serverUser => <li key={serverUser.id}>{serverUser.username}</li>)}
                </ul>
            </div>
        )
    }
}

export default ServerMember