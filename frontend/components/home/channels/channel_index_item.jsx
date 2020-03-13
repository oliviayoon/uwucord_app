import React from 'react'

class ChannelIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {channel, openModal, ownerId, currentUser} = this.props
        const edit = ownerId === currentUser.id ? (<i onClick={() => openModal("editChannel")} className="fas fa-star"></i>) : null
        return(
        <div className="channel-item-info">
            <div className="channel-title-text">
        <i class="fas fa-hashtag"></i> <p>{channel.name}</p>
            </div>
            <div>
                {edit}
            </div>
        </div>
    )}
} 

export default ChannelIndexItem