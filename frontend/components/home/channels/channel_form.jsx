import React from 'react';

class ChannelForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.channel

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        // debugger
    }

    handleChange(e){
        return e => this.setState({name: e.currentTarget.value})
    }

    handleDelete(e){
        e.preventDefault();
        // debugger
        this.props.destroyChannel(this.state.id)
            .then((res) => {
                this.props.closeModal()
                this.props.history.push(`/channels/${this.props.currentServer.id}/${this.props.generalChannel.id}`)
            })
    }

    handleClick(e){
        e.preventDefault()
        this.props.processChannel(this.state)
            .then((res)=> {
                this.props.closeModal()
                this.props.history.push(`/channels/${this.props.currentServer.id}/${res.channel.id}`)
            })
    }

    componentWillUnmount(){
        // debugger
        this.props.clearChannelErrors()
    }

    render(){
        const {formType, errors} = this.props
        // debugger
        const header = formType === "Create" ? (<h1 className="channel-form-header" >add a channew :3</h1>) : (<h1 className="channel-form-header">edit yew baka ? >:3</h1>)
        const deleteButton = formType === "Edit" ? (<button className="delete-channel-button" onClick={this.handleDelete} >dewete channew ?</button>) : ""

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
                    <button onClick={this.handleClick}className="add-channel-button">wes dew dis</button>
                    {deleteButton}
                </div>
            </div>
        )}
} 

export default ChannelForm