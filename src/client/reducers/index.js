import { combineReducers } from "redux";
import  authReducer  from "./AuthReducer";
import {reducer as formReducer} from "redux-form";
import StreamReducer from "./StreamReducer";

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    stream:StreamReducer
})