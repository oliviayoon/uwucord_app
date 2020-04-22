import React from 'react';
import ChannelIndexItem from './channel_index_item'
import {NavLink} from 'react-router-dom'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLogout(){
        this.props.logout()
    }

    handleClick(){
        for (let i = 1; i < 4; i++){
            const panel = document.getElementById(`panel${i}`)
            // debugger
            setTimeout(() => {
                panel.click()
            }, 0);
            
        }
    }

    render(){
        const {currentUser, channels, currentServer, openModal, changeActiveChannel } = this.props
        const ownerId = currentServer ? currentServer.ownerId : ""
        if (!currentUser) return null;
        if (!currentServer) return null;
        // const channels = this.props.channels.map(channel => <ChannelIndexItem channel={channel} />)
         
        // const channeledit = currentUser.id === ownerId && currentServer ? (<p onClick={() => openModal("editServer")}>{currentServer.name}</p>) : (<p>{currentServer.name}</p>)
         
        const modal = currentServer ? (ownerId === currentUser.id ? "editServer" : "leaveServer") : ("")
        const edit = currentServer.name == "Home" ? (<p>Direct Messages</p>) : (<><p>{currentServer.name}</p> <i onClick={() => openModal(modal)} className="fas fa-paw"><div className="tooltippaw">{ownerId === currentUser.id ? "edit dis sewvew" : "leave dis sewvew"}</div></i>
        </>)
        const homeItems = currentServer.name == "Home" ? (<div className="home-channels">
            <div>
            DMs are under constwuction ! uwu
            </div>
            <div>
                Check out some servers instead !
            <img className="left-arrow" src={ window.leftArrow }/>
            </div>
            <div className="help-text">
                <p>Need some halp ?</p>
                <img className="tut-image" onClick={this.handleClick} src={window.tutStart} />
            </div>
            </div>)
        : (<>
        <div className="server-invite-form">
            <img className="server-invite-image" src={window.serverChannelBarInvite} />
            <p>an adventuwe begwins.</p>
            <p>wet's add sum fwends !</p>
            <button className="invite-friends" onClick={() => openModal("inviteFriends")}>invite fwends</button>
        </div>
        <div className="channel-list-container">
            <div className="channel-options">
            <h1>text channews :3</h1>
            <i className="fas fa-fish" onClick={() => openModal("addChannel")}>
            <div className="tooltippaw">add a channew</div>                
            </i>
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

        const icon = currentUser.imageUrl ? (<img className="user-profile" src={currentUser.imageUrl} height="15"></img>) :  (<div className="user-profile">{currentUser.username[0]}</div>)
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
                    
                <div className="user-text-container" onClick={() => openModal("editUser")}>
                    {icon}
                    <div className="user-text">
                        <div className="tooltiparrow bottom">edit ur pic or username</div>
                        <p className="username">{currentUser.username}</p>
                        <p className="user-num">#{currentUser.userNumber}</p>
                    </div>
                </div>
            <button className="logout" onClick={this.handleLogout}>w-wog out ? ;w;</button>
            </div>
            </div>
        )
    }
}

export default ChannelIndex