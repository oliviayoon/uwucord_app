import React from 'react';

class ChannelForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.channel

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
         
    }

    handleChange(e){
        return e => this.setState({name: e.currentTarget.value})
    }

    handleDelete(e){
        e.preventDefault();
        this.props.destroyChannel(this.state.id)
            .then((res) => {
                this.props.closeModal()
                // debugger
                this.props.changeActiveChannel({
                    serverId: this.props.currentServer.id,
                    channelId: this.props.generalChannel.id
                })
                this.props.history.push(`/channels/${this.props.currentServer.id}/${this.props.generalChannel.id}`)
            })
    }

    handleClick(e){
        e.preventDefault()
        this.props.processChannel(this.state)
            .then((res)=> {
                this.props.closeModal()
                this.props.changeActiveChannel({
                    serverId: res.channel.serverId,
                    channelId: res.channel.id
                })
                this.props.history.push(`/channels/${this.props.currentServer.id}/${res.channel.id}`)
            })
    }

    componentWillUnmount(){
         
        this.props.clearChannelErrors()
    }

    render(){
        const {formType, errors, closeModal} = this.props
         
        const header = formType === "Create" ? (<h1 className="channel-form-header" >add a channew :3</h1>) : (<h1 className="channel-form-header">edit yew baka ? >:3</h1>)
        const deleteButton = formType === "Edit" ? (<button className="delete-channel-button" onClick={this.handleDelete} >dewete channew</button>) : (<button className="delete-channel-button" onClick={() => closeModal()} >or naw~</button>)

        return(
            <div className="channel-form-container">
                <div className="channel-form">
                    {header}
                    <form className="channel-form-input">
                        <label className="channel-form-name">channew name
                        <p className="channel-errors">{errors}</p>
                            <input onChange={this.handleChange()} type="text" value={this.state.name} />
                        </label>
                    </form>
                    <div className="channel-form-buttons">
                        <button onClick={this.handleClick} className="add-channel-button">wes dew dis</button>
                        {deleteButton}
                    </div>
                </div>
            </div>
        )}
} 

export default ChannelForm