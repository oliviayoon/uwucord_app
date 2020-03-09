import {connect} from 'react-redux';
import ServerForm from './server_form';
import {closeModal, openModal} from '../../../actions/modal_actions'
import { updateServer } from '../../../actions/server_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
// debugger
    return({
        formType: "Edit",
        server: state.entities.servers[Object.values(ownProps.history.location.pathname.split("/"))[2]],
        errors: state.errors.serverErrors
    })
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    processForm: server => dispatch(updateServer(server)),
})

export default withRouter(connect(msp, mdp)(ServerForm))