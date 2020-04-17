import React from 'react';
import ChannelIndexItem from './channel_index_item'
import {NavLink} from 'react-router-dom'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.logout()
            .then(() =>
            this.props.history.push("/"))
    }

    render(){
        const {currentUser, channels, currentServer, openModal, changeActiveChannel } = this.props
        const ownerId = currentServer ? currentServer.ownerId : ""
        if (!currentUser) return null;
        if (!currentServer) return null;
        // const channels = this.props.channels.map(channel => <ChannelIndexItem channel={channel} />)
         
        // const channeledit = currentUser.id === ownerId && currentServer ? (<p onClick={() => openModal("editServer")}>{currentServer.name}</p>) : (<p>{currentServer.name}</p>)
         
        const modal = currentServer ? (ownerId === currentUser.id ? "editServer" : "leaveServer") : ("")
        const edit = currentServer.name == "Home" ? (<p>Direct Messages</p>) : (<><p>{currentServer.name}</p> <i onClick={() => openModal(modal)} className="fas fa-paw"/></>)
        const homeItems = currentServer.name == "Home" ? (<div className="home-channels">
            
            <div>
            DMs are under constwuction ! uwu
            </div>
            <div>
                Check out some servers instead !
            <img className="left-arrow" src={ window.leftArrow }/>
            </div>
            <div className="help-text" onClick={() => openModal("userTutorial")}>
                <p>Need some halp ?</p>
                <p>Check out the tuwutowial~</p>
            </div>
            </div>)
        : (<>
        <div className="server-invite-form">
            <button className="invite-friends" onClick={() => openModal("inviteFriends")}>invite fwends</button>
        </div>
        <div className="channel-list-container">
            <div className="channel-options">
            <h1>text channews :3</h1>
            <i className="fas fa-fish" onClick={() => this.props.openModal("addChannel")}></i>
        </div>
        <div className="channel-items">
        {channels.map(channel =>
            <NavLink key={channel.id} to={`/channels/${currentServer.id}/${channel.id}`} activeClassName="channel-name-active">
                <ChannelIndexItem  channel={channel} ownerId={currentServer.ownerId} openModal={openModal} currentUser={currentUser} changeActiveChannel={changeActiveChannel} />
            </NavLink>
        )}
        </div>
        </div>
         </>)
        return(
            <div className="channel-info">
                <div className="server-header">
                    <div className="server-title">
                    {edit}
                    </div>
                </div>
            <div className="channel-index-items">
                {homeItems}
            </div>
            <div className="user-info">
                    <div className="user-profile">{currentUser.username[0]}</div>
                <div className="user-text">
                    <p className="username">{currentUser.username}</p>
                    <p className="user-num">#{currentUser.userNumber}</p>
                </div>
            <button className="logout" onClick={this.handleLogout}>w-wog out ? ;w;</button>
            </div>
            </div>
        )
    }
}

export default ChannelIndex