import React from 'react';
import ChannelIndexItem from './channel_index_item'

class ChannelIndex extends React.Component {

    render(){
        const {currentUser, logout, currentServer, openModal } = this.props
        const ownerId = currentServer ? currentServer.ownerId : ""
        if (!currentUser) return null;
        // const channels = this.props.channels.map(channel => <ChannelIndexItem channel={channel} />)
        // debugger
        // const channeledit = currentUser.id === ownerId && currentServer ? (<p onClick={() => openModal("editServer")}>{currentServer.name}</p>) : (<p>{currentServer.name}</p>)
        const edit = currentServer ? (<><p>{currentServer.name}</p> <i className="fas fa-paw"/></>) : (<p>Direct Messages</p>)
        const modal = currentServer ? (ownerId === currentUser.id ? "editServer" : "leaveServer") : ("")
        return(
            <div className="channel-info">
                <div className="server-header">
                    <div onClick={() => openModal(modal)} className="server-title">
                    {edit}
                    </div>
                </div>
            <div className="channel-index-items">
               Channels would go here if they existed ; w;
            </div>
            <div className="user-info">
                    <div className="user-profile">{currentUser.username[0]}</div>
                <div className="user-text">
                    <p className="username">{currentUser.username}</p>
                    <p className="user-num">#{currentUser.userNumber}</p>
                </div>
            <button className="logout" onClick={logout}>w-wog out ? ;w;</button>
            </div>
            </div>
        )
    }
}

export default ChannelIndex