import {connect} from 'react-redux'
import Nav from './nav'
// import {logout} from '../../actions/session_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

// const mapDispatchToProps = dispatch => ({
// })

export default connect(mapStateToProps)(Nav)