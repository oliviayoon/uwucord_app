import {connect} from 'react-redux'
import React from 'react';
import {leaveServer} from '../../../actions/server_actions'
import {closeModal} from '../../../actions/modal_actions'
import {withRouter} from 'react-router-dom'

class LeaveServerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.currentServer

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        this.props.leaveServer(this.state.id)
            .then(server => {
                this.props.closeModal();
                this.props.history.push(`/channels/@me`)
            })
    }

    render(){
    
        return(
        <div className="server-form">
            <div className ="server-form-container">
                <h1 className="leave-header">GEWDBYE 4EVA ? 4EVA EVA ? </h1>
                <p className="server-form-text">are yew sure ya wanna leave ?! ;-; there's no going back !</p>
                <button className="leave-button" onClick={this.handleClick}>byeeeee</button>
            </div>
        </div>

        )
    }

}

const msp = (state, ownProps) => {
    return({
        currentServer: state.entities.servers[Object.values(ownProps.location.pathname.split("/"))[2]]

})}

const mdp = dispatch => ({
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(LeaveServerForm))