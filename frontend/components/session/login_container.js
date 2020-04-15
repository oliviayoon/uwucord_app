import {connect} from 'react-redux'
import SessionForm from "./session_form"
import { login, clearErrors } from "../../actions/session_actions"
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.sessionErrors,
    formType: "login"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)