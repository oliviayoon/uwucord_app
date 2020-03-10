import React from 'react'
import ServerIndexContainer from '../servers/server_index_container'
import MessageIndexContainer from '../messages/message_index_container'
import ChannelIndexContainer from '../channels/channel_index_container'
import {Route} from 'react-router-dom'

class Main extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="main-content">
            <ServerIndexContainer />
            <ChannelIndexContainer currentServer={this.props.currentServer}/>
            <MessageIndexContainer />
            </div>
        )
    }
}

export default Main