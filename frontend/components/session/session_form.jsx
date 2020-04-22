import React from 'react'
import {Link} from 'react-router-dom'

export const demoUsers = [
    {email: "demo@uwu.com", password: "passwod"},
    {email: "recruiter@uwu.com", password: "passwod"},
    {email: "boss@uwu.com", password: "passwod"}
]

class SessionForm extends React.Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
        this.animateLogin = this.animateLogin.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    animateLogin(speed = 100) {

        

        const user = demoUsers[Math.floor(Math.random() * demoUsers.length)]

        let {email, password} = user;

        if (this.state.email !== email) {
            const inputUser = setInterval(() => {
                if (this.state.email !== email) {
                    const temp = email.slice(0, this.state.email.length + 1);
                    this.setState({email: temp});
                } else { clearInterval(inputUser); animatePassword(); }
            }, speed);
        }

        const animatePassword = () => {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({password: password.slice(0, this.state.password.length + 1)})
                else { clearInterval(inputPassword); login(); }
            }, speed);
        }

        const login = () => {
            this.props.processForm(this.state)
                .then(() => {
                    this.props.history.push('/channels/@me');
                })
            this.setState({email: "", password: ""});
        }
    }

    

    handleDemoLogin(e) {
        e.preventDefault();
        this.animateLogin();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => {
                this.props.history.push('/channels/@me');
                // this.props.openModal('userTutorial');
            })
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render(){
        const link = (this.props.formType === "signup") ? 
        ( <span>Alweady have an account ? <Link to="/login">uwu !!!</Link></span> ) 
            : ( <span>Wanna sign in? <Link to="/register">Wegister !!</Link> or T-twy a <span onClick={this.handleDemoLogin}><a>Demo</a></span> !!</span>)
        const header = (this.props.formType === "signup") ? 
        ( <h1>Sign Uwup!</h1> ) : ( <h1>Welcombe back !! ^ w ^</h1>)
        const button = (this.props.formType === "signup") ? 
        ("ÒwÓ LES GO !!") : ("Wog In")

        return(
            <div className="session-background">
                <Link to="/"><img src={window.pinkWogo} width={"180px"}/></Link>
                <form className="session-form" >
                    <header className="session-form-header">
                        {header}
                        {this.props.formType === "login" ? (<h2>it's not like i missed u b-baka!</h2>) : "" }
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