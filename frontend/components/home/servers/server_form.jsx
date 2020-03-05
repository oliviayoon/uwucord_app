import React from 'react';

class ServerForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.server;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handbleBack.bind(this);
    }

    handleChange(e){
        this.setState({ name: e.currentTarget.value })
    }

    handleBack(){
        this.props.prevModal();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state)
            .then(server => {
                this.props.closeModal();
                this.props.history.push(`/channels/${server.id}`)
            })
    }

    render(){
        const { formType } = this.props; // will need one for create and edit
        return (
            <div className="server-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        servawr name:
                        <input 
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="what's it gonna be pal òwó"
                        />
                    </label>
                <button>{formType} server !!</button>
                <button onClick={this.handleBack}>gowo back ?</button>
                </form>
            </div>
        )
    }
}

export default ServerForm