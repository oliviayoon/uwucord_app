import React from 'react';
import ServerIndexItem from './server_index_item'

class ServerIndex extends React.Component {

    componentDidMount(){
        // debugger
        this.props.fetchAllServers()
    }

    render(){
        const {servers} = this.props
        return (
            <div className="server-index">
            <ul>
                {servers.map(server => <ServerIndexItem key={server.id} server={server} />)}
            </ul>
            </div>
        )
    }
}

export default ServerIndex