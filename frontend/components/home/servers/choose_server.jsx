import React from 'react';
import {openModal} from '../../../actions/modal_actions'
import { connect } from 'react-redux';

const ChooseServer = ({openModal}) => (
    <div className="server-form choose">
        <h1>U HAF 2 CHOIWCES</h1> 
        <div className="cat-container-holder">
            <div className="cat-container create-contain tooltip">
                <h2 className="cweate tooltiptext">cweate</h2>
                    <p>Cweate a newe server and inwite your fwends !! it's fwee ~</p>
                    <button className="choose-opt-button cr" onClick={() => openModal("createServer")}>LES DO DIS ^U^</button>
            </div>
            <div className="cat-container join-contain tooltip">
             <h2 className="join tooltiptext">joiwin</h2>
                <p>Entew an inwite and joiwin your fwend's server !!</p>
                <button className="choose-opt-button jo" onClick={() => openModal("joinServer")}>U HAS FWENDS ?</button>
            </div>
        </div>
    </div>
)

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect(null,mdp)(ChooseServer)

// will need openModal of createServer or joinServer
