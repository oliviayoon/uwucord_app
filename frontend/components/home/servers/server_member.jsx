import React from 'react'
import ServerMemberItem from './server_member_item'

class ServerMember extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {serverUsers} = this.props
         
        const header = serverUsers.length ? (<h1 className="member-header">memebwers (⑅˘꒳˘)</h1>) : ("")
        return (
            <>
                {header}
                {serverUsers.map(serverUser => <ServerMemberItem key={serverUser.id} member={serverUser} />)}
            </>
        )
    }
}

export default ServerMember