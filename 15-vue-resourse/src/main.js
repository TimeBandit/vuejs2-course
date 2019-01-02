import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

// this is how you add a plugin to vue
Vue.use(VueResource);
// $http dollar sign only needed when when inside a vue component
// here we want to centralise the http string
// see the docs for options
Vue.http.options.root = "https://vuejs-http-927e6.firebaseio.com/";
// intercepting requests
Vue.http.interceptors.push((request, next) => {
	console.log(request);
	if (request.method === "POST") {
		request.method = "PUT";
	}
	// intercepting the response
	next(response => {
		response.json = () => {
			// makes the code work again since the interceptor above broke it
			return { messages: response.body };
		};
	});
});

new Vue({
	el: "#app",
	render: h => h(App)
});
