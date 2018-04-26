import { combineReducers } from "redux";
import core from "./core";
import deltas from "./deltas";

const indexReducer = combineReducers({
	core,
	deltas
});

export default indexReducer;
