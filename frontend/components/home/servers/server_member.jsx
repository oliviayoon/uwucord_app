import React from 'react'

class ServerMember extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(){

    }

    render(){
        const {serverUsers} = this.props
        // debugger
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