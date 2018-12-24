import * as types from "../types";

// using modules we split the store into managable chunks
// this helps make the app scalable
const state = { counter: 0 };

const getters = {
	// 👇 namespacing in action
	[types.DOUBLE_COUNTER]: state => {
		return state.counter;
	},
	doubleCounter: state => {
		return state.counter * 2;
	},
	[types.CLICK_COUNTER]: state => {
		return state.counter + " Clicks";
	}
};
console.log(getters);

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
	decrement: ({ commit }, payload) => {
		commit("decrement", payload);
	},
	asyncIncrement: ({ commit }, payload) => {
		setTimeout(() => {
			commit("increment", payload);
		}, 1000);
	},
	asyncDecrement: ({ commit }, payload) => {
		setTimeout(() => {
			commit("decrement", payload);
		}, 1000);
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
