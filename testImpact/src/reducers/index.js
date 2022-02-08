import { combineReducers } from "redux";
import studentReducers from "../reducers/studentReducer"
export default combineReducers({
	studentReducers: studentReducers
})