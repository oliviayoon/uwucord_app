import React from 'react'
import ServerIndexContainer from '../servers/server_index_container'

class SideChannel extends React.Component {

    render(){
        const {currentUser, logout} = this.props
        return (
            <div className="side-bar">
            <ServerIndexContainer />
            <div className="channel-info">
                <div className="user-info">
            <p style={{color: `white`}}>{currentUser.username}#{currentUser.user_number}</p>
                <button onClick={logout}>w-wog out ? ;w;</button>
                </div>
            </div>
            </div>
        )
    }
}

export default SideChannel