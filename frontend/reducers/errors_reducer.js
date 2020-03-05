import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorsReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  serverErrors: serverErrorsReducer
})

export default errorsReducer;