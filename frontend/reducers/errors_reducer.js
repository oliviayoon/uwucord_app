import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorsReducer from './server_errors_reducer';
import ChannelErrorsReducer from "./channel_errors_reducer";

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  serverErrors: serverErrorsReducer,
  channelErrors: ChannelErrorsReducer
})

export default errorsReducer;