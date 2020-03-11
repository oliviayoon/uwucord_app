import React from 'react'

class ChannelIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {channel, openModal, ownerId, currentUser} = this.props
        const edit = ownerId === currentUser.id ? (<button onClick={() => openModal("editChannel")}className="edit-channel-button">edit</button>) : null
        return(
        <div className="channel-item-info">
            <strong> #{channel.name} </strong>
            <div>
                {edit}
            </div>
        </div>
    )}
} 

export default ChannelIndexItem