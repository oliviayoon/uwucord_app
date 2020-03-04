import React from 'react'

class Welcome extends React.Component {

    render(){
        const {currentUser, logout} = this.props
        return (
            <div className="user-info">
            <p style={{color: `white`}}>{currentUser.username}#{currentUser.user_number}</p>
                <button onClick={logout}>w-wog out ? ;w;</button>
            </div>
        )
    }
}

export default Welcome