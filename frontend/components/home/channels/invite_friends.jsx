import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const InviteFriendsForm = ({currentServer}) => {

    return(
        <div className="invite-friends-form">
            <div className="invite-friends-container">
            <img src={window.serverKeyInvite}/>
            <h1>invwite ur fwends with dis invite tokwen!</h1>
            <p>{currentServer.invite}</p>
            </div>
        </div>
    )
}

const msp = (state, ownProps) => ({
    currentServer: state.entities.servers[ownProps.location.pathname.split("/")[2]]
})

export default withRouter(connect(msp)(InviteFriendsForm))