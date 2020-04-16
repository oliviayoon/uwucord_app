import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


const Tutorial = ({closeModal}) => {

    return(
        <div className="tutorial-container">
            <div className="tutorial-text">
                <h1>w-wewcome to uwucord !!</h1>
                <h2>do yew need a tutorial ? :3</h2>
                <div className="tutorial-options">
                <img onClick={() => closeModal()} className="tut-image" src={window.tutEnd} />
                <img className="tut-image" src={window.tutStart} />
                </div>
            </div>
        </div>
    )
}

const msp = state => ({

})

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Tutorial)