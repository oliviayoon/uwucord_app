import {connect} from 'react-redux'
import SessionForm from "./session_form"
import { signup, clearErrors} from "../../actions/session_actions"
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.sessionErrors,
    formType: "signup"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)