import React from 'react'

class ChannelIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {channel, openModal, ownerId, currentUser} = this.props
        const edit = ownerId === currentUser.id ? (<i onClick={() => openModal("editChannel")} class="fas fa-star"></i>) : null
        return(
        <div className="channel-item-info">
            <strong> <i class="fas fa-hashtag"></i>{channel.name} </strong>
            <div>
                {edit}
            </div>
        </div>
    )}
} 

export default ChannelIndexItem