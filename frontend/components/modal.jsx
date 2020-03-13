import React from 'react';
import {closeModal} from '../actions/modal_actions';
import {connect} from 'react-redux';
import CreateServerContainer from './home/servers/create_server_container'
import EditServerContainer from './home/servers/edit_server_container'
import JoinServerForm from './home/servers/join_server_form'
import ChooseServer from './home/servers/choose_server';
import LeaveServerForm from './home/servers/leave_server';
import {Route} from 'react-router-dom'
import AddChannelForm from './home/channels/add_channel_form';
import EditChannelForm from './home/channels/edit_channel_form';
import InviteFriendsform from './home/channels/invite_friends'

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
        case 'editServer':
            component = <EditServerContainer />
            break;
        case 'leaveServer':
            component = <LeaveServerForm />
            break;
        case 'addChannel':
            component = <AddChannelForm />
            break;
        case 'editChannel':
            component = <EditChannelForm />
            break;
        case 'inviteFriends':
            component = <InviteFriendsform />
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