import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log("Global Mixin - Created Hook");
  }
});

Vue.filter("length", function(value) {
  if (value.length) {
    return value + ` (${value.length})`;
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
