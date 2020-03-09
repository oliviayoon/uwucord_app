import React from 'react'
import ServerIndexContainer from '../servers/server_index_container'
import MessageIndexContainer from '../messages/message_index_container'
import ChannelIndexContainer from '../channels/channel_index_container'
import {Route} from 'react-router-dom'
import MainContainer from './main_container'

class Main extends React.Component {

    render(){
        const {currentUser, logout} = this.props
        return (
            <div className="main-content">
            <ServerIndexContainer />
            <ChannelIndexContainer />
            <MessageIndexContainer />
            </div>
        )
    }
}

export default Main