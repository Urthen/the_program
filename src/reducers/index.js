import { combineReducers } from "redux";
import coreReducer from "./core";
import deltasReducer from "./deltas";

const indexReducer = combineReducers({
	coreReducer,
	deltasReducer
});

export default indexReducer;
