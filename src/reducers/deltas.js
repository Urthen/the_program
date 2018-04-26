const { createAction, handleAction } = require("redux-actions");

const DEFAULT_STATE = {
	energy: 0,
	light: 0
};

const modifyDelta = createAction("MODIFY_DELTA");

const deltasReducer = handleAction(
	modifyDelta,
	(state, { payload: { key, value } }) => ({ ...state, [key]: value }),
	DEFAULT_STATE
);

export default deltasReducer;
export { modifyDelta };
