import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		// savedPosition is the location in the history stack
		if (savedPosition) {
			return savedPosition;
		}
		// return {x:0, y:700}; can return an object or a selector
		if (to.hash) {
			return { selector: to.hash };
		}
	}
});

// gets executing on each routing action
// global level routing hook
router.beforeEach((to, from, next) => {
	console.log("global before each");
	// next(false) abort the current operation
	// next('a path')
	// next({path, redirect, etc})
	// next()
	next();
});
new Vue({
	el: "#app",
	router,
	render: h => h(App)
});
