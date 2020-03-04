import React from 'react'
import {Link} from 'react-router-dom'

const DEMO_USER = {
    email: "demo@uwu.com",
    password: "password"
}

class SessionForm extends React.Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.setState(DEMO_USER)
        setTimeout(() => this.props.processForm(DEMO_USER)
            .then(() => this.props.history.push('/@me')), 1000)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => this.props.history.push('/@me'))
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render(){
        const link = (this.props.formType === "signup") ? 
        ( <span>Alweady have an account ? <Link to="/login"> uwu !!!</Link></span> ) 
            : ( 
            <span>
                Wanna sign in? <Link to="/register">Wegister !!</Link> or T-twy a <span onClick={this.handleDemoLogin}><a>Demo</a></span> !!</span>)
        const header = (this.props.formType === "signup") ? 
        ( <h1>Sign Uwup!</h1> ) : ( <h1>Welcombe back !! ^ w ^</h1>)
        const button = (this.props.formType === "signup") ? 
        ("ÒwÓ LES GO !!") : ("Wog In")

        return(<div className="session-background"  style={{backgroundImage: `url("https://discordapp.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg")`}} >
                <img src="https://cdn.discordapp.com/attachments/369614958356463617/684448035425615902/wogo.png" width={"150px"} position={'absolute'}/>
                {/* <img src="https://cdn.discordapp.com/attachments/369614958356463617/684495108049076230/Untitled_Artwork.png" height={"500"} position={'relative'}/> */}
                <form className="session-form" >
                <header className="session-form-header">
                    {header}
                    {this.props.formType === "login" ? (<h2>we missed u!</h2>) : "" }
                </header>
                <span className="session-errors">{!this.props.errors.length ? "" : <>ERROR: <i>{this.props.errors.length > 1 ? this.props.errors.join(" & ") : this.props.errors}</i></>}</span>
                    <label>Emwail
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                     </label>
                    {this.props.formType === "signup" ?
                    (<label>Uwusername
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>) : ""
                    }
                    <label>Passwod
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>{button}</button>
                    {link}
                    </form>
        </div>
        )
    }
} 
export default SessionForm