import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    // this is where you centralise any pre handling of data in the state
    // save you duplicating code in computed properties of seperate
    // components
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  // mutations solve the same problem the getters solves, how to centralise setting
  // of state, these change functions are held in one place; the store
  // mutations must be synchronous
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    // this is where be perform async tasks before committing with a mutations
    // it is good practice to do all your state changes from actions but it's
    // only mandatory for async operations.
    increment: ({ commit }) => {
      commit("increment");
    },
    decrement: ({ commit }) => {
      commit("decrement");
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
  }
});
