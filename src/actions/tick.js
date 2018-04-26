const { modifyEnergy, modifyLight } = require("../reducers/core");

function tick() {
	return (dispatch, getState) => {
		const state = getState();
		dispatch(modifyEnergy(state.deltas.energy));
		dispatch(modifyLight(state.deltas.light));
	};
}
