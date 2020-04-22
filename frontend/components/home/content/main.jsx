import React from 'react'
import ServerIndexContainer from '../servers/server_index_container'
import MessageIndexContainer from '../messages/message_index_container'
import ChannelIndexContainer from '../channels/channel_index_container'
import {Route} from 'react-router-dom'
import TutorialCollapse from '../tutorial_collapse'

class Main extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const {currentServer} = this.props
        const mainContent = !!currentServer ? currentServer.name === "Home" ? <TutorialCollapse /> : <MessageIndexContainer /> : ("")

        return (
            <div className="main-content">
                <ServerIndexContainer />
                <ChannelIndexContainer currentServer={currentServer}/>
                {mainContent}
            </div>
        )
    }
}

export default Main