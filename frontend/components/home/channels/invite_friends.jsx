import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class InviteFriendsForm extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const invite = document.getElementById("server-invite-token");
        invite.select();
        document.execCommand('copy');
        const copy = document.getElementById("copy-text")
        copy.textContent = "copwied ! òwó"
        
    }

    render(){
        const {currentServer} = this.props
            return(
                <div className="invite-friends-form">
                    <div className="invite-friends-container">
                        <img src={window.colorSparkle} className="friends-sparkle"/>
                    <h1>invwite fwends to {currentServer.name}</h1>
                    <img src={window.serverKeyInvite}/>
                        <p className="invite-flavor" >shware wif ne1 u want to gwant accwess to yer server ~</p>
                    <div className="invite-token-container">
                        <input onClick={this.handleClick} readOnly id="server-invite-token" className="invite-token" value={currentServer.invite}/>
                        <div id="copy-text" className="tooltiparrow bottom">click 2 copeh</div>
                    </div>
                    </div>
                </div>
            )
    }
} 


const msp = (state, ownProps) => ({
    currentServer: state.entities.servers[ownProps.location.pathname.split("/")[2]]
})

export default withRouter(connect(msp)(InviteFriendsForm))