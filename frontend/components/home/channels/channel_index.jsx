import React from 'react';
import ChannelIndexItem from './channel_index_item'

class ChannelIndex extends React.Component {

    render(){
        const {currentUser, logout} = this.props
        // const channels = this.props.channels.map(channel => <ChannelIndexItem channel={channel} />)
        return(
            <div className="channel-info">
                <div className="server-header">
                    <div className="server-title">
                    Server Name goes here
                    </div>
                </div>
            <div className="channel-index-items">
               Channels would go here if they existed ; w;
            </div>
            <div className="user-info">
                <div className="user-text">
                    <p className="username">{currentUser.username}</p>
                    <p className="user-num">#{currentUser.userNumber}</p>
                </div>
            <button onClick={logout}>w-wog out ? ;w;</button>
            </div>
            </div>
        )
    }
}

export default ChannelIndex