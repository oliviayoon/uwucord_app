import {connect} from 'react-redux';
import ServerForm from './server_form';
import {closeModal} from '../../../actions/modal_actions'
import { createServer } from '../../../util/server_api_util';
import {withRouter} from 'react-router-dom';

const msp = state => ({
    formType: "reate",
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