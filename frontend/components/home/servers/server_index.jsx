import React from 'react';
import ServerIndexItem from './server_index_item'

class ServerIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAllServers()
    }

    render(){
        const {servers, currentUser } = this.props
        const publicServers = servers.filter(server => server.name !== "Home")
        // debugger
        const homeServer = servers.filter(server => (server.name === "Home" && server.ownerId === currentUser.id))
        // debugger
        return (
            <div className="server-index">
            <ul className="server-home">
                {homeServer.map(server => <ServerIndexItem key={server.id} server={server} />)}
            </ul>
            <div className="divider">
            </div>
            <ul className="server-membership">
                {publicServers.map(server => <ServerIndexItem key={server.id} server={server} />)}
                <a className="add-server" onClick={() => this.props.openModal("chooseServer")}><li><p>+</p></li></a>
            </ul>
            </div>
        )
    }
}

export default ServerIndex