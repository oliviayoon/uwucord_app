import React from 'react'

class ServerMember extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {serverUsers} = this.props
        // debugger
        const header = serverUsers.length ? (<h1 className="member-header">memebwers (⑅˘꒳˘)</h1>) : ("")
        return (
            <>
                {header}
                {serverUsers.map(serverUser => 
                <div key={serverUser.id} className="member-list-item">
                <div className="user-profile">{serverUser.username[0]}</div>
                <div >{serverUser.username}</div>
                </div>)}
            </>
        )
    }
}

export default ServerMember