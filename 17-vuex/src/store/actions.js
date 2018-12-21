// you would create standalone files for actions that don't belong in a module
// because they dont belong in one place such as a header

export const updateValue = ({ commit }, payload) => {
	commit("updateValue", payload);
};

export const exampleAction = params => {};
