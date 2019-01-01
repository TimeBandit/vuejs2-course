import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

// this is how you add a plugin to vue
Vue.use(VueResource);

new Vue({
	el: "#app",
	render: h => h(App)
});
