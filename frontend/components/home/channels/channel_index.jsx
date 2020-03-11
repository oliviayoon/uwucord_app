import React from 'react';
import ChannelIndexItem from './channel_index_item'

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
        const {currentUser, channels, currentServer, openModal } = this.props
        const ownerId = currentServer ? currentServer.ownerId : ""
        if (!currentUser) return null;
        if (!currentServer) return null;
        // const channels = this.props.channels.map(channel => <ChannelIndexItem channel={channel} />)
        // debugger
        // const channeledit = currentUser.id === ownerId && currentServer ? (<p onClick={() => openModal("editServer")}>{currentServer.name}</p>) : (<p>{currentServer.name}</p>)
        // debugger
        const modal = currentServer ? (ownerId === currentUser.id ? "editServer" : "leaveServer") : ("")
        const edit = currentServer.name == "Home" ? (<p>Direct Messages</p>) : (<><p onClick={() => openModal(modal)}>{currentServer.name}</p> <i className="fas fa-paw"/></>)
        return(
            <div className="channel-info">
                <div className="server-header">
                    <div className="server-title">
                    {edit}
                    </div>
                </div>
            <div className="channel-index-items">
                <div className="channel-options">
                <h1>text channews :3</h1>
                <i className="fas fa-fish" onClick={() => this.props.openModal("addChannel")}></i>
                </div>
               {channels.map(channel => <ChannelIndexItem key={channel.id} channel={channel} ownerId={currentServer.ownerId} openModal={openModal} currentUser={currentUser} />)}
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