import {connect} from 'react-redux';
import ServerForm from './server_form';
import {closeModal, openModal} from '../../../actions/modal_actions'
import { createServer } from '../../../util/server_api_util';
import {withRouter} from 'react-router-dom';

const msp = state => ({
    formType: "Create",
    server: {
        name: ""
    }
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    processForm: server => dispatch(createServer(server)),
    prevModal: () => dispatch(openModal("chooseServer"))

})

export default withRouter(connect(msp, mdp)(ServerForm))