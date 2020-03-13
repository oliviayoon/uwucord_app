import React from 'react';
import ServerIndexItem from './server_index_item'

class ServerIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAllServers()
    }

    render(){
        const {servers, currentUser, channels } = this.props
        if (!servers) return null;
        const publicServers = servers.filter(server => server.name !== "Home")

        const homeServer = servers.filter(server => (server.name === "Home" && server.ownerId === currentUser.id))
        return (
            <div className="server-index">
            <ul className="server-home">
                {homeServer.map(server => <ServerIndexItem key={server.id} server={server} />)}
            </ul>
            <div className="divider">
            </div>
            <ul className="server-membership">
                {publicServers.map(server => <ServerIndexItem key={server.id} server={server} channels={channels.filter(channel => channel.serverId === server.id)} />)}
                <a className="add-server" onClick={() => this.props.openModal("chooseServer")}><li><p>+</p></li></a>
            </ul>
            </div>
        )
    }
}

export default ServerIndex