import { combineReducers } from "redux"
import login from "./auth/login/reducer";
import list from "./properties/list/reducer";
import details from "./properties/details/reducer";

const rootReducer = combineReducers({
	login, list, details
})

export default rootReducer
