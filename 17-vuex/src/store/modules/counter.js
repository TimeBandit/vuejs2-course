// using modules we split the store into managable chunks
// this helps make the app scalable
const state = { counter: 0 };

const getters = {
	doubleCounter: state => {
		return state.counter * 2;
	},
	stringCounter: state => {
		return state.counter + " Clicks";
	}
};

const mutations = {
	increment: (state, payload) => {
		state.counter += payload;
	},
	decrement: (state, payload) => {
		state.counter -= payload;
	}
};

const actions = {
	increment: ({ commit }, payload) => {
		commit("increment", payload);
	},
	decrement: ({ commit }, decrement) => {
		commit("decrement", decrement);
	},
	asyncIncrement: ({ commit }) => {
		setTimeout(() => {
			commit("increment");
		}, 1000);
	},
	asyncDecrement: ({ commit }) => {
		setTimeout(() => {
			commit("decrement");
		}, 1000);
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
