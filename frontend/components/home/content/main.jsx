import React from 'react'
import ServerIndexContainer from '../servers/server_index_container'
import MessageIndexContainer from '../messages/message_index_container'
import ChannelIndexContainer from '../channels/channel_index_container'
import {Route} from 'react-router-dom'

class Main extends React.Component {

    render(){
        return (
            <div className="main-content">
            <ServerIndexContainer />
            <Route to="/:id" component={ChannelIndexContainer} />
            <MessageIndexContainer />
            </div>
        )
    }
}

export default Main