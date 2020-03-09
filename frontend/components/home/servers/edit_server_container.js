import {connect} from 'react-redux';
import ServerForm from './server_form';
import {closeModal, openModal} from '../../../actions/modal_actions'
import { updateServer, deleteServer } from '../../../actions/server_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
// debugger
    return({
        formType: "Edit",
        server: state.entities.servers[Object.values(ownProps.location.pathname.split("/"))[2]],
        errors: state.errors.serverErrors
    })
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    processForm: server => dispatch(updateServer(server)),
    deleteServer: serverId => dispatch(deleteServer(serverId))
})

export default withRouter(connect(msp, mdp)(ServerForm))