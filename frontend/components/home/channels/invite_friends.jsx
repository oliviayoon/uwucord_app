import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

const InviteFriendsForm = ({currentServer}) => {

    return(
        <div className="invite-friends-form">
            <div>
            <p>invwite ur fwends with dis invite tokwen!</p>
            <p>{currentServer.invite}</p>
            </div>
        </div>
    )
}

const msp = (state, ownProps) => ({
    currentServer: state.entities.servers[ownProps.location.pathname.split("/")[2]]
})

export default withRouter(connect(msp)(InviteFriendsForm))