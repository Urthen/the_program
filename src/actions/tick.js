import { modifyEnergy, modifyLight } from "../reducers/core";

const tick = () => (dispatch, getState) => {
	const state = getState();
	dispatch(modifyEnergy({ amount: state.deltas.energy }));
	dispatch(modifyLight({ amount: state.deltas.light }));
};

export default tick;
