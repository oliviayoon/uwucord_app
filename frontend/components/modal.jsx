import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import CreateServerContainer from './home/servers/create_server_container'
import JoinServerForm from './home/servers/join_server_form'
import ChooseServer from './home/servers/choose_server';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;


    switch (modal) {
        case 'createServer':
            component = <CreateServerContainer />;
            break;
        case 'chooseServer':
            component = <ChooseServer />;
            break;
        case 'joinServer':
            component = <JoinServerForm />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = state => ({
    modal: state.ui.modal
})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal)