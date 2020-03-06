import React from 'react';

class ServerForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.server;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleChange(e){
        this.setState({ name: e.currentTarget.value })
    }

    handleBack(){
        debugger
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
                <div className="server-form-container">
                    <h1>IZ TIME TO CWEATE</h1>
                    <p className="server-form-text">bye cweating a servew, u will has access to fwee voice and text chwat !!</p>
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
                </form>
                <div className="server-form-footer">
                    <button onClick={this.handleBack}>gowo back ?</button>
                    <button>{formType} server !!</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ServerForm