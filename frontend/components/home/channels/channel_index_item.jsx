import React from 'react'

class ChannelIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClickChannel = this.handleClickChannel.bind(this);
    }

    handleClickChannel(){
        this.props.changeActiveChannel({
            serverId: this.props.channel.serverId,
            channelId: this.props.channel.id
        })
    }

    render(){
        const {channel, openModal, ownerId, currentUser} = this.props
        const edit = ownerId === currentUser.id ? (<i onClick={() => openModal("editChannel")} className="fas fa-star"><div className="tooltiparrow">edit dis channew</div></i>) : null
        return(
        <div className="channel-item-info" onClick={this.handleClickChannel}>
            <div className="channel-title-text">
        <i className="fas fa-hashtag"></i><p>{channel.name}</p>
            </div>
            <div>
                {edit}
            </div>
        </div>
    )}
} 

export default ChannelIndexItem