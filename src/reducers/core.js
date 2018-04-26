import { createActions, handleActions } from "redux-actions";

const DEFAULT_STATE = {
	energy: 0,
	light: 0
};

const { modifyEnergy, modifyLight } = createActions(
	"MODIFY_ENERGY",
	"MODIFY_LIGHT"
);

const coreReducer = handleActions(
	{
		[modifyEnergy]: (state, { payload: { amount } }) => {
			return { ...state, energy: state.energy + amount };
		},
		[modifyLight]: (state, { payload: { amount } }) => {
			return { ...state, light: state.light + amount };
		}
	},
	DEFAULT_STATE
);

export default coreReducer;
export { modifyEnergy, modifyLight };
