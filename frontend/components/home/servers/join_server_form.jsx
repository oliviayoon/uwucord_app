import React from 'react';
import {connect} from 'react-redux';
import {closeModal, openModal} from '../../../actions/modal_actions'
import { joinServer } from '../../../actions/server_actions';
import {withRouter} from 'react-router-dom';
import {clearErrors} from '../../../actions/server_actions'

class JoinServerForm extends React.Component {
    constructor(props){
        super(props)

        this.state = { invite: "" }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleChange(e){
        this.setState({ invite: e.currentTarget.value })
    }

    handleBack(){
        this.props.prevModal();
    }

    handleSubmit(e){
        
        e.preventDefault();
         
        this.props.processForm(this.state.invite) // formData
            .then(res => {
                debugger
                this.props.closeModal();
                this.props.history.push(`/channels/${Object.keys(res.payload.server)[0]}/${Object.values(res.payload.channels)[0].id}`)
            })
    }

    render(){
        const {errors} = this.props
        return(
        <div className="server-form">
            <div className ="server-form-container" >
            <h1 className="join-header">JOIWN THE PAWTY >:3</h1>
                <p className="server-form-text">entew an invwite bewow to join an existwing sewver !! it looks someting like dis:</p>
                 <p className="invite-string">m30wuwu</p>
                <form className="join-text">
                    <p className="server-errors">{errors}</p>
                    <label>
                        <input type="text" value={this.state.invite} onChange={this.handleChange} required="required" />
                    </label>
                        <span className="invite-text">entew an invite !!</span>
                </form>
             </div>
            <div className="server-form-footer">
                <button className="back-button pink" onClick={this.handleBack}><i className="far fa-hand-point-left"></i> gowo back ?</button>
                <button className="join-button" onClick={this.handleSubmit}>joiwin server !!</button>
            </div>
        </div>
    )}
} 
    

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.serverErrors
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    processForm: (server) => dispatch(joinServer(server)),
    prevModal: () => dispatch(openModal("chooseServer")),
    clearErrors: () => dispatch(clearErrors())

})

export default withRouter(connect(msp, mdp)(JoinServerForm))