import {connect} from 'react-redux';
import ServerForm from './server_form';
import {closeModal, openModal} from '../../../actions/modal_actions'
import { createServer, clearErrors } from '../../../actions/server_actions';
import {withRouter} from 'react-router-dom';


const msp = state => ({
    formType: "Create",
    server: {
        name: "",
        private: false,
        owner_id: state.session.id,
        profilePic: null,
        picUrl: null
    },
    errors: state.errors.serverErrors
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    processForm: server => dispatch(createServer(server)),
    prevModal: () => dispatch(openModal("chooseServer")),
    clearErrors: () => dispatch(clearErrors())

})

export default withRouter(connect(msp, mdp)(ServerForm))