import {connect} from 'react-redux'
import SessionForm from "./session_form"
import { login, clearErrors } from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.sessionErrors,
    formType: "login"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)