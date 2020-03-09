import React from 'react';

class ServerForm extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.server;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleChange(e){
        this.setState({ name: e.currentTarget.value })
    }

    handleImageChange(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader(); 
        fileReader.onloadend = () => {
            this.setState({ profilePic: file, picUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
            
    }

    handleBack(){
        this.props.prevModal();
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger

        const formData = new FormData();
        if (this.state.id) formData.append('server[id]', this.state.id)
        formData.append('server[name]', this.state.name)
        if (this.state.profilePic) formData.append('server[profile_pic]', this.state.profilePic)
        formData.append('server[private]', this.state.private)
        formData.append('server[owner_id]', this.state.owner_id)
        
        this.props.processForm(formData) // formData
            .then(server => {
                this.props.closeModal();
                this.props.history.push(`/channels/${server.id}`)
            })
    

    }

    render(){
        const { formType, errors } = this.props; // will need one for create and edit
        const preview = this.state.picUrl ? <img src={this.state.picUrl} width="100" /> : null

        const header = formType === "Create" ? ("IZ TIME TO CWEATE") : ("EDWIT UR SERVER ^U^")
        const text = formType === "Create" ? ("bye cweating a servew, u will has access to fwee voice and text chwat !!") : ("didn't wike ur sewver name, u b-baka ?! change it den !")
        const back = formType === "Create" ? (<button onClick={this.handleBack}>gowo back ?</button>) : ("")
        return (
            <div className="server-form">
                <div className="server-form-container">
                    <h1>{header}</h1>
                    <p className="server-form-text">{text}</p>
                <form >
                    <p>{errors}</p>
                     <label>
                        servawr name:
                        <input 
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="what's it gonna be pal òwó"
                        />
                    </label>
                    <label>
                        make it pwivate?
                        <input type="radio" />
                    </label>
                    <label>pwofile pic:
                        <input type="file" onChange={this.handleImageChange}/>
                        <p>pweview</p>
                        {preview}
                    </label>
                </form>
                <div className="server-form-footer">
                    {back}
                    <button onClick={this.handleSubmit}>{formType} server !!</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ServerForm