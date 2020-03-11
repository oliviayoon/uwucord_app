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
        this.props.destroyChannel(this.state.id)
            .then(() => this.props.closeModal())
    }

    handleClick(e){
        e.preventDefault()
        // debugger
        this.props.processChannel(this.state)
            .then(()=> {
                this.props.closeModal()
            })
    }

    render(){
        const {formType} = this.props

        const header = formType === "Create" ? (<h1 className="channel-header-add" color="black">add a channew :3</h1>) : (<h1 className="channel-header-edit" color="black">edit yew baka ? >:3</h1>)

        return(
            <div className="channel-form-container">
                <div className="channel-form">
                    {header}
                    <p>meowmeowmeow meow meow</p>
                    <form className="channel-form">
                        <label className="channel-form-name">channew name:
                            <input onChange={this.handleChange()} type="text" value={this.state.name} />
                        </label>
                    </form>
                    <button onClick={this.handleClick}className="add-channel-button">wes dew dis</button>
                    <button onClick={this.handleDelete} >dewete channew ?</button>
                </div>
            </div>
        )}
} 

export default ChannelForm