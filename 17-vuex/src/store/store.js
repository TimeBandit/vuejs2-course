import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";
Vue.use(Vuex);

// this is the central store that modules will still need to be merged into
export const store = new Vuex.Store({
	state: {
		value: 0
	},
	getters: {
		// this is where you centralise any pre handling of data in the state
		// saves you duplicating code in computed properties or seperate
		// components
		...getters
	},
	// mutations solve the same problem the getters solves, how to centralise setting
	// of state, these change functions are held in one place; the store
	// mutations must be synchronous
	mutations: {
		...mutations
	},
	actions: {
		// this is where we perform async tasks before committing with a mutations
		// it is good practice to do all your state changes from actions but it's
		// only mandatory for async operations.
		...actions
	},
	modules: {
		c: counter
	}
});

console.log(store);
