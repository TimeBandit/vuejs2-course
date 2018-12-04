import Vue from "vue";
import App from "./App.vue";

// global filter
Vue.filter("toLowerCase", function(value) {
  return value.toLowerCase();
});

// mixins can be global but they are rarley used.
// sometimes for integrating third party components
// it is added to all instances, method call order is
// global mixin, local mixin, and code local to the component
// usr with caution, used mainly for making plugins
Vue.mixin({
  created() {
    console.log("global mixin created hook");
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
